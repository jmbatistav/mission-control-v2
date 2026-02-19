"use client";

import { useCallback } from "react";
import * as THREE from "three";
import AgentFigure from "./AgentFigure";
import type { AgentAnimState } from "./AgentFigure";
import AgentLabel from "./AgentLabel";
import { useAgentMovement } from "./AgentMovementController";

interface WalkingAgentProps {
  agentId: string;
  name: string;
  avatar: string;
  status: "active" | "idle" | "offline";
  color: string;
  animState: AgentAnimState;
  /** Waypoint path (null = stationary, use homePosition) */
  path: THREE.Vector3[] | null;
  /** Home/cubicle position */
  homePosition: THREE.Vector3;
  /** Optional rotation override for meeting seats */
  meetingSeatRotation: number | null;
  hideLabels?: boolean;
  onClick?: () => void;
  /** Called when walking agent arrives at destination */
  onArrived?: (agentId: string) => void;
  /** Optional label for autonomous behavior */
  autonomousLabel?: string;
}

export default function WalkingAgent({
  agentId,
  name,
  avatar,
  status,
  color,
  animState,
  path,
  homePosition,
  meetingSeatRotation,
  hideLabels,
  onClick,
  onArrived,
  autonomousLabel,
}: WalkingAgentProps) {
  const onArrivedCallback = useCallback(() => {
    onArrived?.(agentId);
  }, [agentId, onArrived]);

  const movement = useAgentMovement({
    path,
    homePosition,
    speed: 2,
    onArrived: onArrivedCallback,
  });

  // Determine the rendering position
  const isWalking = animState === "walking" && movement.isMoving;
  const pos: [number, number, number] = isWalking
    ? [movement.position.x, movement.position.y, movement.position.z]
    : [homePosition.x, homePosition.y, homePosition.z];

  // For meeting seated states, use meeting seat position from path destination
  const isAtMeeting = animState === "in_meeting" || animState === "sitting_down";
  const meetingPos =
    isAtMeeting && path && path.length > 0 ? path[path.length - 1] : null;

  // For autonomous "idle at destination" (at_break, visiting), use path end
  const isAtAutonomousDestination =
    !isWalking &&
    !isAtMeeting &&
    animState === "idle" &&
    autonomousLabel &&
    path &&
    path.length > 0;
  const autoDestPos = isAtAutonomousDestination ? path[path.length - 1] : null;

  const finalPos: [number, number, number] = meetingPos
    ? [meetingPos.x, meetingPos.y, meetingPos.z]
    : autoDestPos
      ? [autoDestPos.x, autoDestPos.y, autoDestPos.z]
      : pos;

  // Rotation: walking uses movement rotation, meeting uses seat rotation, otherwise 0
  const rotY = isWalking
    ? movement.rotation
    : meetingSeatRotation ?? 0;

  return (
    <group>
      <AgentFigure
        animState={animState}
        color={color}
        position={finalPos}
        rotationY={rotY}
        onClick={onClick}
      />
      <AgentLabel
        name={name}
        avatar={avatar}
        status={status}
        color={color}
        position={finalPos}
        hidden={hideLabels}
      />
    </group>
  );
}
