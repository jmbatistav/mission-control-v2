"use client";

import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import type { AgentAnimState } from "./AgentFigure";
import {
  getCubiclePosition,
  getMeetingSeatPosition,
  getMeetingSeatRotation,
  getPath,
  getBreakAreaPosition,
  getVisitPosition,
} from "./NavigationSystem";

/* ─────────────────────────────────────────────
   Types
   ─────────────────────────────────────────────*/

interface Agent {
  _id: string;
  name: string;
  function: string;
  status: string;
  currentTask?: string;
}

interface Meeting {
  _id: string;
  title: string;
  participants: string[];
  location: string;
  status: string;
}

/** The physical state of an agent in the 3D scene */
export interface AgentPhysicalState {
  agentId: string;
  agentName: string;
  animState: AgentAnimState;
  /** Waypoint path for movement (null = stationary) */
  path: THREE.Vector3[] | null;
  /** Home cubicle position */
  homePosition: THREE.Vector3;
  /** Target rotation when seated at meeting */
  meetingSeatRotation: number | null;
  /** Whether this agent is currently in a meeting */
  inMeeting: boolean;
  /** Autonomous behavior label (for break area / visit indicators) */
  autonomousLabel?: string;
  /** If visiting, who are they visiting */
  visitingAgentId?: string;
}

/* ─────────────────────────────────────────────
   Phase tracking per agent
   ─────────────────────────────────────────────*/

type PhaseKind =
  | "at_cubicle"
  | "standing_up"
  | "walking_to_meeting"
  | "sitting_at_meeting"
  | "in_meeting"
  | "standing_from_meeting"
  | "walking_to_cubicle"
  | "sitting_at_cubicle"
  // Autonomous idle behaviors
  | "walking_to_break"
  | "at_break"
  | "walking_from_break"
  | "walking_to_visit"
  | "visiting"
  | "walking_from_visit"
  | "stretching";

interface AgentPhase {
  kind: PhaseKind;
  startedAt: number;
  meetingSeat?: number;
  /** For visit behaviors: the target agent's cubicle position */
  visitTargetPos?: THREE.Vector3;
  /** For visit behaviors: target agent ID */
  visitTargetId?: string;
  /** For break: cached break position */
  breakPos?: THREE.Vector3;
}

/* ─────────────────────────────────────────────
   Autonomous Behavior Constants
   ─────────────────────────────────────────────*/

const MAX_AUTONOMOUS_AGENTS = 2;
const BREAK_DURATION_MS = 10_000;
const VISIT_DURATION_MS = 5_000;
const STRETCH_DURATION_MS = 2_000;
const AUTONOMOUS_CHECK_INTERVAL_MS = 3_000;
// Min/max idle time before an agent considers doing something (ms)
const MIN_IDLE_BEFORE_ACTION = 30_000;
const MAX_IDLE_BEFORE_ACTION = 60_000;

/* ─────────────────────────────────────────────
   Hook
   ─────────────────────────────────────────────*/

interface UseAgentStatesOpts {
  agents: Agent[];
  activeMeetings: Meeting[];
  /** Map of department function → array of agents in that dept (to compute index) */
  deptGroups: Record<string, Agent[]>;
}

export function useAgentStates({
  agents,
  activeMeetings,
  deptGroups,
}: UseAgentStatesOpts): AgentPhysicalState[] {
  // Track phase per agent
  const phases = useRef<Map<string, AgentPhase>>(new Map());

  // Track when each idle agent last returned to cubicle (for autonomous timing)
  const lastIdleAt = useRef<Map<string, number>>(new Map());
  // Random delay per agent before next autonomous action
  const nextActionDelay = useRef<Map<string, number>>(new Map());

  // Build a set of agent names currently in active meetings
  const inMeetingNames = useMemo(() => {
    const set = new Set<string>();
    for (const m of activeMeetings) {
      if (m.status === "in_progress") {
        for (const name of m.participants) {
          set.add(name.toLowerCase());
        }
      }
    }
    return set;
  }, [activeMeetings]);

  // Assign meeting seats to participants deterministically
  const meetingSeatMap = useMemo(() => {
    const map = new Map<string, number>();
    let seatIdx = 0;
    for (const m of activeMeetings) {
      if (m.status === "in_progress") {
        for (const name of m.participants) {
          if (!map.has(name.toLowerCase())) {
            map.set(name.toLowerCase(), seatIdx % 6);
            seatIdx++;
          }
        }
      }
    }
    return map;
  }, [activeMeetings]);

  // Helper: get cubicle position for an agent
  const getAgentHome = useMemo(() => {
    return (agent: Agent): THREE.Vector3 => {
      const deptAgents = deptGroups[agent.function] || [];
      const indexInDept = deptAgents.findIndex((a) => a._id === agent._id);
      return getCubiclePosition(agent.function, Math.max(0, indexInDept));
    };
  }, [deptGroups]);

  // Advance phases based on timing (meeting transitions + autonomous)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const currentPhases = phases.current;

      // Count how many agents are currently doing autonomous actions
      let autonomousCount = 0;
      for (const [, phase] of currentPhases) {
        if (
          phase.kind === "walking_to_break" ||
          phase.kind === "at_break" ||
          phase.kind === "walking_from_break" ||
          phase.kind === "walking_to_visit" ||
          phase.kind === "visiting" ||
          phase.kind === "walking_from_visit" ||
          phase.kind === "stretching"
        ) {
          autonomousCount++;
        }
      }

      for (const [agentId, phase] of currentPhases.entries()) {
        const elapsed = now - phase.startedAt;

        switch (phase.kind) {
          // ── Meeting transitions ──
          case "standing_up":
            if (elapsed > 500) {
              if (phase.meetingSeat != null) {
                currentPhases.set(agentId, {
                  kind: "walking_to_meeting",
                  startedAt: now,
                  meetingSeat: phase.meetingSeat,
                });
              }
            }
            break;
          case "sitting_at_meeting":
            if (elapsed > 500) {
              currentPhases.set(agentId, {
                kind: "in_meeting",
                startedAt: now,
                meetingSeat: phase.meetingSeat,
              });
            }
            break;
          case "standing_from_meeting":
            if (elapsed > 500) {
              currentPhases.set(agentId, { kind: "walking_to_cubicle", startedAt: now });
            }
            break;
          case "sitting_at_cubicle":
            if (elapsed > 500) {
              currentPhases.set(agentId, { kind: "at_cubicle", startedAt: now });
              lastIdleAt.current.set(agentId, now);
            }
            break;

          // ── Autonomous behavior transitions ──
          case "at_break":
            if (elapsed > BREAK_DURATION_MS) {
              currentPhases.set(agentId, { kind: "walking_from_break", startedAt: now });
            }
            break;
          case "walking_from_break":
            // Walking phase is handled by movement controller; we transition when
            // the path completes. For safety, after 15s force back to cubicle.
            if (elapsed > 15_000) {
              currentPhases.set(agentId, { kind: "at_cubicle", startedAt: now });
              lastIdleAt.current.set(agentId, now);
            }
            break;
          case "visiting":
            if (elapsed > VISIT_DURATION_MS) {
              currentPhases.set(agentId, { kind: "walking_from_visit", startedAt: now });
            }
            break;
          case "walking_from_visit":
            if (elapsed > 15_000) {
              currentPhases.set(agentId, { kind: "at_cubicle", startedAt: now });
              lastIdleAt.current.set(agentId, now);
            }
            break;
          case "stretching":
            if (elapsed > STRETCH_DURATION_MS) {
              currentPhases.set(agentId, { kind: "at_cubicle", startedAt: now });
              lastIdleAt.current.set(agentId, now);
            }
            break;
        }
      }

      // ── Trigger new autonomous behaviors for idle agents ──
      if (autonomousCount < MAX_AUTONOMOUS_AGENTS) {
        const idleAgents = agents.filter((a) => {
          if (a.status !== "idle") return false;
          if (inMeetingNames.has(a.name.toLowerCase())) return false;
          const phase = currentPhases.get(a._id);
          return !phase || phase.kind === "at_cubicle";
        });

        for (const agent of idleAgents) {
          if (autonomousCount >= MAX_AUTONOMOUS_AGENTS) break;

          // Check if enough time has passed since last idle
          const lastIdle = lastIdleAt.current.get(agent._id) || 0;
          let delay = nextActionDelay.current.get(agent._id);
          if (delay == null) {
            delay = MIN_IDLE_BEFORE_ACTION + Math.random() * (MAX_IDLE_BEFORE_ACTION - MIN_IDLE_BEFORE_ACTION);
            nextActionDelay.current.set(agent._id, delay);
          }

          if (now - lastIdle < delay) continue;

          // Reset delay for next time
          nextActionDelay.current.set(
            agent._id,
            MIN_IDLE_BEFORE_ACTION + Math.random() * (MAX_IDLE_BEFORE_ACTION - MIN_IDLE_BEFORE_ACTION)
          );

          // Pick a random behavior
          const roll = Math.random();
          const home = getAgentHome(agent);

          if (roll < 0.4) {
            // Walk to break area
            const breakPos = new THREE.Vector3(...getBreakAreaPosition());
            currentPhases.set(agent._id, {
              kind: "walking_to_break",
              startedAt: now,
              breakPos,
            });
            autonomousCount++;
          } else if (roll < 0.75) {
            // Visit another agent's cubicle
            const otherAgents = agents.filter(
              (a) => a._id !== agent._id && a.status !== "offline"
            );
            if (otherAgents.length > 0) {
              const target = otherAgents[Math.floor(Math.random() * otherAgents.length)];
              const targetHome = getAgentHome(target);
              const visitPos = new THREE.Vector3(...getVisitPosition(targetHome));
              currentPhases.set(agent._id, {
                kind: "walking_to_visit",
                startedAt: now,
                visitTargetPos: visitPos,
                visitTargetId: target._id,
              });
              autonomousCount++;
            }
          } else {
            // Stretch in place
            currentPhases.set(agent._id, {
              kind: "stretching",
              startedAt: now,
            });
            autonomousCount++;
          }
        }
      }
    }, AUTONOMOUS_CHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [agents, inMeetingNames, getAgentHome]);

  return useMemo(() => {
    const now = Date.now();
    const result: AgentPhysicalState[] = [];

    for (const agent of agents) {
      const nameLower = agent.name.toLowerCase();
      const isInMeeting = inMeetingNames.has(nameLower);
      const seatIndex = meetingSeatMap.get(nameLower);

      // Compute home cubicle position
      const homePos = getAgentHome(agent);

      // Get or initialize phase
      let phase = phases.current.get(agent._id);
      if (!phase) {
        phase = { kind: "at_cubicle", startedAt: now };
        phases.current.set(agent._id, phase);
        lastIdleAt.current.set(agent._id, now);
      }

      // ── Meeting state takes priority over autonomous ──
      if (isInMeeting && seatIndex != null) {
        // Cancel any autonomous behavior
        if (
          phase.kind === "walking_to_break" ||
          phase.kind === "at_break" ||
          phase.kind === "walking_from_break" ||
          phase.kind === "walking_to_visit" ||
          phase.kind === "visiting" ||
          phase.kind === "walking_from_visit" ||
          phase.kind === "stretching" ||
          phase.kind === "at_cubicle"
        ) {
          phase = { kind: "standing_up", startedAt: now, meetingSeat: seatIndex };
          phases.current.set(agent._id, phase);
        }
      } else {
        // Agent should NOT be in meeting
        if (phase.kind === "in_meeting" || phase.kind === "sitting_at_meeting") {
          phase = { kind: "standing_from_meeting", startedAt: now };
          phases.current.set(agent._id, phase);
        } else if (phase.kind === "walking_to_meeting" || (phase.kind === "standing_up" && phase.meetingSeat != null)) {
          phase = { kind: "walking_to_cubicle", startedAt: now };
          phases.current.set(agent._id, phase);
        }

        // If agent becomes active/working, cancel autonomous behavior
        if (agent.status === "active" && !isInMeeting) {
          if (
            phase.kind === "walking_to_break" ||
            phase.kind === "at_break" ||
            phase.kind === "walking_from_break" ||
            phase.kind === "walking_to_visit" ||
            phase.kind === "visiting" ||
            phase.kind === "walking_from_visit" ||
            phase.kind === "stretching"
          ) {
            phase = { kind: "walking_to_cubicle", startedAt: now };
            phases.current.set(agent._id, phase);
          }
        }
      }

      // Compute physical state from phase
      let animState: AgentAnimState;
      let path: THREE.Vector3[] | null = null;
      let meetingSeatRotation: number | null = null;
      let autonomousLabel: string | undefined;
      let visitingAgentId: string | undefined;

      switch (phase.kind) {
        case "at_cubicle":
          animState =
            agent.status === "active"
              ? "working"
              : agent.status === "offline"
                ? "offline"
                : "idle";
          break;

        case "standing_up":
          animState = "standing_up";
          break;

        case "walking_to_meeting": {
          animState = "walking";
          const seatPos = getMeetingSeatPosition(phase.meetingSeat ?? 0);
          path = getPath(homePos, seatPos);
          break;
        }

        case "sitting_at_meeting":
          animState = "sitting_down";
          meetingSeatRotation = getMeetingSeatRotation(phase.meetingSeat ?? 0);
          break;

        case "in_meeting":
          animState = "in_meeting";
          meetingSeatRotation = getMeetingSeatRotation(phase.meetingSeat ?? 0);
          break;

        case "standing_from_meeting":
          animState = "standing_up";
          break;

        case "walking_to_cubicle": {
          animState = "walking";
          const fromSeatPos =
            phase.meetingSeat != null
              ? getMeetingSeatPosition(phase.meetingSeat)
              : homePos;
          path = getPath(fromSeatPos, homePos);
          break;
        }

        case "sitting_at_cubicle":
          animState = "sitting_down";
          break;

        // ── Autonomous behaviors ──
        case "walking_to_break": {
          animState = "walking";
          const breakTarget = phase.breakPos ?? new THREE.Vector3(8, 0, 10.5);
          path = getPath(homePos, breakTarget);
          autonomousLabel = "heading to break";
          break;
        }

        case "at_break":
          animState = "idle";
          autonomousLabel = `☕ ${agent.name} on break`;
          break;

        case "walking_from_break": {
          animState = "walking";
          const fromBreak = phase.breakPos ?? new THREE.Vector3(8, 0, 10.5);
          path = getPath(fromBreak, homePos);
          break;
        }

        case "walking_to_visit": {
          animState = "walking";
          const visitTarget = phase.visitTargetPos ?? homePos;
          path = getPath(homePos, visitTarget);
          visitingAgentId = phase.visitTargetId;
          break;
        }

        case "visiting":
          animState = "idle";
          visitingAgentId = phase.visitTargetId;
          autonomousLabel = "chatting";
          break;

        case "walking_from_visit": {
          animState = "walking";
          const fromVisit = phase.visitTargetPos ?? homePos;
          path = getPath(fromVisit, homePos);
          break;
        }

        case "stretching":
          // Reuse "standing_up" animation (arms go up) as a stretch
          animState = "standing_up";
          autonomousLabel = "stretching";
          break;

        default:
          animState = "idle";
      }

      result.push({
        agentId: agent._id,
        agentName: agent.name,
        animState,
        path,
        homePosition: homePos,
        meetingSeatRotation,
        inMeeting: isInMeeting,
        autonomousLabel,
        visitingAgentId,
      });
    }

    return result;
  }, [agents, inMeetingNames, meetingSeatMap, getAgentHome]);
}
