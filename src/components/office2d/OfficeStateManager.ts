/* ─────────────────────────────────────────────
   OfficeStateManager.ts — Reads Convex state, determines agent physical state
   ─────────────────────────────────────────────*/

import {
  getAgentSeatPosition,
  getMeetingSeat,
  getBreakAreaPosition,
  getVisitPosition,
  buildBlockedGrid,
  findPath,
} from "./GridSystem";
import type { AnimState } from "./AgentAnimationController";

/* ─── Types ─── */

export interface Agent2D {
  _id: string;
  name: string;
  role: string;
  function: string;
  avatar: string;
  status: string;
  color: string;
  currentTask?: string;
}

export interface Meeting2D {
  _id: string;
  title: string;
  participants: string[];
  location: string;
  status: string;
}

export interface AgentPhysicalState2D {
  agentId: string;
  agentName: string;
  avatar: string;
  color: string;
  status: string;
  currentTask?: string;
  role: string;
  dept: string;
  animState: AnimState;
  homeX: number;
  homeY: number;
  targetX: number;
  targetY: number;
  path: { x: number; y: number }[] | null;
  inMeeting: boolean;
  autonomousLabel?: string;
}

/* ─── Phase tracking ─── */

type PhaseKind =
  | "at_cubicle"
  | "walking_to_meeting"
  | "in_meeting"
  | "walking_to_cubicle"
  | "walking_to_break"
  | "at_break"
  | "walking_from_break"
  | "walking_to_visit"
  | "visiting"
  | "walking_from_visit";

interface AgentPhase {
  kind: PhaseKind;
  startedAt: number;
  meetingSeat?: number;
  breakPos?: { x: number; y: number };
  visitTargetPos?: { x: number; y: number };
  visitTargetId?: string;
}

/* ─── Constants ─── */

const MAX_AUTONOMOUS = 2;
const BREAK_DURATION = 10_000;
const VISIT_DURATION = 5_000;
const MIN_IDLE_DELAY = 30_000;
const MAX_IDLE_DELAY = 60_000;
const CHECK_INTERVAL = 3_000;

/* ─── State Manager Class ─── */

export class OfficeStateManager {
  private phases = new Map<string, AgentPhase>();
  private lastIdleAt = new Map<string, number>();
  private nextDelay = new Map<string, number>();
  private blocked = buildBlockedGrid();
  private intervalId: ReturnType<typeof setInterval> | null = null;

  private agents: Agent2D[] = [];
  private meetings: Meeting2D[] = [];
  private deptGroups: Record<string, Agent2D[]> = {};

  /** Start the autonomous behavior timer */
  start() {
    this.intervalId = setInterval(() => this.tick(), CHECK_INTERVAL);
  }

  /** Stop the timer */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /** Update agents and meetings from Convex */
  updateData(agents: Agent2D[], meetings: Meeting2D[]) {
    this.agents = agents;
    this.meetings = meetings;

    // Group by department
    this.deptGroups = {};
    for (const agent of agents) {
      const dept = agent.function;
      if (!this.deptGroups[dept]) this.deptGroups[dept] = [];
      this.deptGroups[dept].push(agent);
    }
  }

  /** Compute physical states for all agents */
  computeStates(): AgentPhysicalState2D[] {
    const now = Date.now();
    const inMeetingNames = new Set<string>();
    const meetingSeatMap = new Map<string, number>();

    let seatIdx = 0;
    for (const m of this.meetings) {
      if (m.status === "in_progress") {
        for (const name of m.participants) {
          const lower = name.toLowerCase();
          inMeetingNames.add(lower);
          if (!meetingSeatMap.has(lower)) {
            meetingSeatMap.set(lower, seatIdx % 6);
            seatIdx++;
          }
        }
      }
    }

    const results: AgentPhysicalState2D[] = [];

    for (const agent of this.agents) {
      const nameLower = agent.name.toLowerCase();
      const isInMeeting = inMeetingNames.has(nameLower);
      const seatIndex = meetingSeatMap.get(nameLower);
      const deptAgents = this.deptGroups[agent.function] || [];
      const indexInDept = deptAgents.findIndex((a) => a._id === agent._id);
      const home = getAgentSeatPosition(agent.function, Math.max(0, indexInDept));

      // Init phase if needed
      if (!this.phases.has(agent._id)) {
        this.phases.set(agent._id, { kind: "at_cubicle", startedAt: now });
        this.lastIdleAt.set(agent._id, now);
      }

      let phase = this.phases.get(agent._id)!;

      // Handle meeting transitions
      if (isInMeeting && seatIndex != null) {
        if (phase.kind === "at_cubicle" || phase.kind === "at_break" ||
            phase.kind === "visiting" || phase.kind === "walking_to_break" ||
            phase.kind === "walking_from_break" || phase.kind === "walking_to_visit" ||
            phase.kind === "walking_from_visit") {
          const seat = getMeetingSeat(seatIndex);
          phase = {
            kind: "walking_to_meeting",
            startedAt: now,
            meetingSeat: seatIndex,
          };
          this.phases.set(agent._id, phase);
        }
      } else {
        if (phase.kind === "in_meeting" || phase.kind === "walking_to_meeting") {
          phase = { kind: "walking_to_cubicle", startedAt: now };
          this.phases.set(agent._id, phase);
        }

        // Cancel autonomous if agent becomes active
        if (agent.status === "active") {
          if (phase.kind === "walking_to_break" || phase.kind === "at_break" ||
              phase.kind === "walking_from_break" || phase.kind === "walking_to_visit" ||
              phase.kind === "visiting" || phase.kind === "walking_from_visit") {
            phase = { kind: "walking_to_cubicle", startedAt: now };
            this.phases.set(agent._id, phase);
          }
        }
      }

      // Compute anim state and path
      let animState: AnimState;
      let path: { x: number; y: number }[] | null = null;
      let targetX = home.x;
      let targetY = home.y;
      let autonomousLabel: string | undefined;

      switch (phase.kind) {
        case "at_cubicle":
          animState = agent.status === "active" ? "typing"
                    : agent.status === "offline" ? "offline"
                    : "idle";
          break;

        case "walking_to_meeting": {
          animState = "walking";
          const seat = getMeetingSeat(phase.meetingSeat ?? 0);
          path = findPath(home, seat, this.blocked);
          targetX = seat.x;
          targetY = seat.y;
          break;
        }

        case "in_meeting":
          animState = "meeting";
          const mSeat = getMeetingSeat(phase.meetingSeat ?? 0);
          targetX = mSeat.x;
          targetY = mSeat.y;
          break;

        case "walking_to_cubicle":
          animState = "walking";
          path = findPath({ x: targetX, y: targetY }, home, this.blocked);
          targetX = home.x;
          targetY = home.y;
          break;

        case "walking_to_break": {
          animState = "walking";
          const bp = phase.breakPos ?? getBreakAreaPosition();
          path = findPath(home, bp, this.blocked);
          targetX = bp.x;
          targetY = bp.y;
          autonomousLabel = "heading to break";
          break;
        }

        case "at_break":
          animState = "idle";
          if (phase.breakPos) {
            targetX = phase.breakPos.x;
            targetY = phase.breakPos.y;
          }
          autonomousLabel = `☕ on break`;
          break;

        case "walking_from_break":
          animState = "walking";
          path = findPath(phase.breakPos ?? home, home, this.blocked);
          targetX = home.x;
          targetY = home.y;
          break;

        case "walking_to_visit": {
          animState = "walking";
          const vp = phase.visitTargetPos ?? home;
          path = findPath(home, vp, this.blocked);
          targetX = vp.x;
          targetY = vp.y;
          break;
        }

        case "visiting":
          animState = "thinking";
          if (phase.visitTargetPos) {
            targetX = phase.visitTargetPos.x;
            targetY = phase.visitTargetPos.y;
          }
          autonomousLabel = "💬 chatting";
          break;

        case "walking_from_visit":
          animState = "walking";
          path = findPath(phase.visitTargetPos ?? home, home, this.blocked);
          targetX = home.x;
          targetY = home.y;
          break;

        default:
          animState = "idle";
      }

      results.push({
        agentId: agent._id,
        agentName: agent.name,
        avatar: agent.avatar,
        color: agent.color,
        status: agent.status,
        currentTask: agent.currentTask,
        role: agent.role,
        dept: agent.function,
        animState,
        homeX: home.x,
        homeY: home.y,
        targetX,
        targetY,
        path,
        inMeeting: isInMeeting,
        autonomousLabel,
      });
    }

    return results;
  }

  /** Periodic tick for phase transitions and autonomous behavior */
  private tick() {
    const now = Date.now();

    const inMeetingNames = new Set<string>();
    for (const m of this.meetings) {
      if (m.status === "in_progress") {
        for (const name of m.participants) {
          inMeetingNames.add(name.toLowerCase());
        }
      }
    }

    let autonomousCount = 0;
    for (const [, phase] of this.phases) {
      if (
        phase.kind === "walking_to_break" || phase.kind === "at_break" ||
        phase.kind === "walking_from_break" || phase.kind === "walking_to_visit" ||
        phase.kind === "visiting" || phase.kind === "walking_from_visit"
      ) {
        autonomousCount++;
      }
    }

    for (const [agentId, phase] of this.phases) {
      const elapsed = now - phase.startedAt;

      switch (phase.kind) {
        case "walking_to_meeting":
          if (elapsed > 5000) {
            this.phases.set(agentId, {
              kind: "in_meeting",
              startedAt: now,
              meetingSeat: phase.meetingSeat,
            });
          }
          break;
        case "walking_to_cubicle":
          if (elapsed > 5000) {
            this.phases.set(agentId, { kind: "at_cubicle", startedAt: now });
            this.lastIdleAt.set(agentId, now);
          }
          break;
        case "walking_to_break":
          if (elapsed > 5000) {
            this.phases.set(agentId, {
              kind: "at_break",
              startedAt: now,
              breakPos: phase.breakPos,
            });
          }
          break;
        case "at_break":
          if (elapsed > BREAK_DURATION) {
            this.phases.set(agentId, {
              kind: "walking_from_break",
              startedAt: now,
              breakPos: phase.breakPos,
            });
          }
          break;
        case "walking_from_break":
          if (elapsed > 5000) {
            this.phases.set(agentId, { kind: "at_cubicle", startedAt: now });
            this.lastIdleAt.set(agentId, now);
          }
          break;
        case "walking_to_visit":
          if (elapsed > 4000) {
            this.phases.set(agentId, {
              kind: "visiting",
              startedAt: now,
              visitTargetPos: phase.visitTargetPos,
              visitTargetId: phase.visitTargetId,
            });
          }
          break;
        case "visiting":
          if (elapsed > VISIT_DURATION) {
            this.phases.set(agentId, {
              kind: "walking_from_visit",
              startedAt: now,
              visitTargetPos: phase.visitTargetPos,
            });
          }
          break;
        case "walking_from_visit":
          if (elapsed > 5000) {
            this.phases.set(agentId, { kind: "at_cubicle", startedAt: now });
            this.lastIdleAt.set(agentId, now);
          }
          break;
      }
    }

    // Trigger new autonomous behaviors
    if (autonomousCount < MAX_AUTONOMOUS) {
      const idleAgents = this.agents.filter((a) => {
        if (a.status !== "idle") return false;
        if (inMeetingNames.has(a.name.toLowerCase())) return false;
        const phase = this.phases.get(a._id);
        return !phase || phase.kind === "at_cubicle";
      });

      for (const agent of idleAgents) {
        if (autonomousCount >= MAX_AUTONOMOUS) break;

        const lastIdle = this.lastIdleAt.get(agent._id) || 0;
        let delay = this.nextDelay.get(agent._id);
        if (delay == null) {
          delay = MIN_IDLE_DELAY + Math.random() * (MAX_IDLE_DELAY - MIN_IDLE_DELAY);
          this.nextDelay.set(agent._id, delay);
        }

        if (now - lastIdle < delay) continue;

        // Reset delay
        this.nextDelay.set(
          agent._id,
          MIN_IDLE_DELAY + Math.random() * (MAX_IDLE_DELAY - MIN_IDLE_DELAY)
        );

        const roll = Math.random();

        if (roll < 0.45) {
          // Break area
          const breakPos = getBreakAreaPosition();
          this.phases.set(agent._id, {
            kind: "walking_to_break",
            startedAt: now,
            breakPos,
          });
          autonomousCount++;
        } else {
          // Visit another agent
          // Only visit idle agents — never bother someone who's working
          const others = this.agents.filter(
            (a) => a._id !== agent._id && a.status === "idle"
          );
          if (others.length > 0) {
            const target = others[Math.floor(Math.random() * others.length)];
            const deptAgents = this.deptGroups[target.function] || [];
            const idx = deptAgents.findIndex((a) => a._id === target._id);
            const targetSeat = getAgentSeatPosition(target.function, Math.max(0, idx));
            const visitPos = getVisitPosition(targetSeat);
            this.phases.set(agent._id, {
              kind: "walking_to_visit",
              startedAt: now,
              visitTargetPos: visitPos,
              visitTargetId: target._id,
            });
            autonomousCount++;
          }
        }
      }
    }
  }
}
