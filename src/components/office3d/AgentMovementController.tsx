"use client";

import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Types
   ─────────────────────────────────────────────*/

export interface MovementState {
  /** Current interpolated world position */
  position: THREE.Vector3;
  /** Current Y-rotation (facing direction) */
  rotation: number;
  /** Whether the agent is currently moving */
  isMoving: boolean;
}

interface UseAgentMovementOpts {
  /** Waypoint path to follow (set externally). null = stay in place */
  path: THREE.Vector3[] | null;
  /** Starting position (home) */
  homePosition: THREE.Vector3;
  /** Movement speed in units/second */
  speed?: number;
  /** Called when agent reaches final waypoint */
  onArrived?: () => void;
}

/* ─────────────────────────────────────────────
   Hook
   ─────────────────────────────────────────────*/

export function useAgentMovement({
  path,
  homePosition,
  speed = 2,
  onArrived,
}: UseAgentMovementOpts): MovementState {
  const currentPos = useRef(homePosition.clone());
  const currentRot = useRef(0);
  const waypointIndex = useRef(0);
  const isMoving = useRef(false);
  const hasArrived = useRef(false);
  const lastPath = useRef<THREE.Vector3[] | null>(null);
  const onArrivedRef = useRef(onArrived);
  onArrivedRef.current = onArrived;

  // Detect new path assignment
  if (path !== lastPath.current) {
    lastPath.current = path;
    if (path && path.length > 0) {
      waypointIndex.current = 0;
      isMoving.current = true;
      hasArrived.current = false;
      // Snap to first waypoint if it's our current position
      if (currentPos.current.distanceTo(path[0]) < 0.2) {
        waypointIndex.current = 1;
      }
    } else {
      isMoving.current = false;
    }
  }

  useFrame((_, delta) => {
    if (!path || path.length === 0 || !isMoving.current || hasArrived.current) {
      return;
    }

    const targetIdx = Math.min(waypointIndex.current, path.length - 1);
    const target = path[targetIdx];

    // Direction to target
    const dir = target.clone().sub(currentPos.current);
    dir.y = 0;
    const dist = dir.length();

    if (dist < 0.1) {
      // Reached this waypoint
      currentPos.current.copy(target);
      if (waypointIndex.current < path.length - 1) {
        waypointIndex.current++;
      } else {
        // Reached final waypoint
        isMoving.current = false;
        hasArrived.current = true;
        onArrivedRef.current?.();
      }
      return;
    }

    // Move toward target
    const moveAmount = Math.min(speed * delta, dist);
    dir.normalize();
    currentPos.current.add(dir.multiplyScalar(moveAmount));

    // Smooth rotation toward movement direction
    const targetRot = Math.atan2(dir.x, dir.z);
    // Slerp-like rotation smoothing
    let rotDiff = targetRot - currentRot.current;
    // Normalize to [-PI, PI]
    while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
    while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
    currentRot.current += rotDiff * Math.min(1, 8 * delta);
  });

  return {
    position: currentPos.current,
    rotation: currentRot.current,
    isMoving: isMoving.current,
  };
}
