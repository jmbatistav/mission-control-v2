"use client";

import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import type { AgentAnimState } from "./AgentFigure";
import {
  getCubiclePosition,
  getMeetingSeatPosition,
  getMeetingSeatRotation,
  getPath,
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
  | "sitting_at_cubicle";

interface AgentPhase {
  kind: PhaseKind;
  startedAt: number;
  meetingSeat?: number;
}

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

  // Advance phases based on timing
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const currentPhases = phases.current;

      for (const [agentId, phase] of currentPhases.entries()) {
        const elapsed = now - phase.startedAt;

        switch (phase.kind) {
          case "standing_up":
            if (elapsed > 500) {
              currentPhases.set(agentId, { kind: "walking_to_meeting", startedAt: now, meetingSeat: phase.meetingSeat });
            }
            break;
          case "sitting_at_meeting":
            if (elapsed > 500) {
              currentPhases.set(agentId, { kind: "in_meeting", startedAt: now, meetingSeat: phase.meetingSeat });
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
            }
            break;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return useMemo(() => {
    const now = Date.now();
    const result: AgentPhysicalState[] = [];

    for (const agent of agents) {
      const nameLower = agent.name.toLowerCase();
      const isInMeeting = inMeetingNames.has(nameLower);
      const seatIndex = meetingSeatMap.get(nameLower);

      // Compute home cubicle position
      const deptAgents = deptGroups[agent.function] || [];
      const indexInDept = deptAgents.findIndex((a) => a._id === agent._id);
      const homePos = getCubiclePosition(agent.function, Math.max(0, indexInDept));

      // Get or initialize phase
      let phase = phases.current.get(agent._id);
      if (!phase) {
        phase = { kind: "at_cubicle", startedAt: now };
        phases.current.set(agent._id, phase);
      }

      // Phase transitions based on meeting state
      if (isInMeeting && seatIndex != null) {
        // Agent should be in/going to meeting
        if (phase.kind === "at_cubicle") {
          phase = { kind: "standing_up", startedAt: now, meetingSeat: seatIndex };
          phases.current.set(agent._id, phase);
        }
      } else {
        // Agent should be at cubicle
        if (phase.kind === "in_meeting" || phase.kind === "sitting_at_meeting") {
          phase = { kind: "standing_from_meeting", startedAt: now };
          phases.current.set(agent._id, phase);
        } else if (phase.kind === "walking_to_meeting" || phase.kind === "standing_up") {
          // Meeting ended before they got there — just send them back
          phase = { kind: "walking_to_cubicle", startedAt: now };
          phases.current.set(agent._id, phase);
        }
      }

      // Compute physical state from phase
      let animState: AgentAnimState;
      let path: THREE.Vector3[] | null = null;
      let meetingSeatRotation: number | null = null;

      switch (phase.kind) {
        case "at_cubicle":
          // Use agent's convex status for cubicle animation
          animState = agent.status === "active" ? "working" :
                      agent.status === "offline" ? "offline" : "idle";
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
          const fromSeatPos = phase.meetingSeat != null
            ? getMeetingSeatPosition(phase.meetingSeat)
            : homePos;
          path = getPath(fromSeatPos, homePos);
          break;
        }

        case "sitting_at_cubicle":
          animState = "sitting_down";
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
      });
    }

    return result;
  }, [agents, inMeetingNames, meetingSeatMap, deptGroups]);
}
