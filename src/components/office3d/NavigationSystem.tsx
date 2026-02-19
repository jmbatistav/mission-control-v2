"use client";

import * as THREE from "three";

/* ─────────────────────────────────────────────
   Office Layout Constants
   ─────────────────────────────────────────────*/

// Department base positions (from OfficeScene)
const DEPARTMENT_POSITIONS: Record<string, [number, number, number]> = {
  engineering: [-1, 0, 0],
  design: [-1, 0, 5],
  product: [2, 0, 5],
  operations: [-1, 0, 10],
};

const CUBICLE_SPACING = 3;

// Meeting room chair positions (6 chairs around circular table at [8, 0, -4])
const MEETING_ROOM_CENTER: [number, number, number] = [8, 0, -4];

function getMeetingRoomSeat(seatIndex: number): THREE.Vector3 {
  const angle = (seatIndex / 6) * Math.PI * 2;
  return new THREE.Vector3(
    MEETING_ROOM_CENTER[0] + Math.cos(angle) * 1.8,
    0,
    MEETING_ROOM_CENTER[2] + Math.sin(angle) * 1.8
  );
}

// Common aisle Y-coordinate for routing
const AISLE_X = 4; // Central aisle X position (between departments and meeting room)

/* ─────────────────────────────────────────────
   Public API
   ─────────────────────────────────────────────*/

/**
 * Get the world-space cubicle position for an agent based on
 * their department (function) and index within that department.
 */
export function getCubiclePosition(
  deptFunction: string,
  indexInDept: number
): THREE.Vector3 {
  if (deptFunction === "leadership") {
    // Manager area has a single cubicle at [-6, 0, -4], agent sits at z+0.45
    return new THREE.Vector3(-6, 0, -4 + 0.45);
  }

  const base = DEPARTMENT_POSITIONS[deptFunction];
  if (!base) return new THREE.Vector3(0, 0, 0);

  return new THREE.Vector3(
    base[0] + indexInDept * CUBICLE_SPACING,
    0,
    base[2] + 0.45 // agent offset inside cubicle
  );
}

/**
 * Get the seat position for a meeting room chair.
 * seatIndex: 0-5
 */
export function getMeetingSeatPosition(seatIndex: number): THREE.Vector3 {
  return getMeetingRoomSeat(seatIndex);
}

/**
 * Get the rotation the agent should face when seated at
 * a meeting room chair (facing center of table).
 */
export function getMeetingSeatRotation(seatIndex: number): number {
  const seat = getMeetingRoomSeat(seatIndex);
  const center = new THREE.Vector3(...MEETING_ROOM_CENTER);
  const dir = center.clone().sub(seat);
  return Math.atan2(dir.x, dir.z);
}

/**
 * Simple waypoint-corridor path from A to B.
 * Routes through a common aisle to avoid walking through desks.
 */
export function getPath(from: THREE.Vector3, to: THREE.Vector3): THREE.Vector3[] {
  const dist = from.distanceTo(to);
  // If very close, just go direct
  if (dist < 3) return [from.clone(), to.clone()];

  // Route through aisle corridor
  const waypoint1 = new THREE.Vector3(AISLE_X, 0, from.z);
  const waypoint2 = new THREE.Vector3(AISLE_X, 0, to.z);

  // Skip redundant waypoints if already near aisle
  const points: THREE.Vector3[] = [from.clone()];

  if (Math.abs(from.x - AISLE_X) > 1.5) {
    points.push(waypoint1);
  }
  if (Math.abs(waypoint1.z - waypoint2.z) > 1) {
    points.push(waypoint2);
  }
  points.push(to.clone());

  return points;
}

/* ─────────────────────────────────────────────
   Break Area & Visit Positions
   ─────────────────────────────────────────────*/

const BREAK_AREA_CENTER: [number, number, number] = [8, 0, 10];

/**
 * Get a position near the break area coffee table.
 * Slight offset so agents stand at the lounge chairs, not dead-center.
 */
export function getBreakAreaPosition(): [number, number, number] {
  // Stand near the lounge chairs, offset from center
  const offsetX = (Math.random() - 0.5) * 1.2;
  const offsetZ = 0.5 + Math.random() * 0.3;
  return [
    BREAK_AREA_CENTER[0] + offsetX,
    0,
    BREAK_AREA_CENTER[2] + offsetZ,
  ];
}

/**
 * Get a position in front of a target cubicle for visiting.
 * Stands in the aisle facing the target agent's cubicle.
 */
export function getVisitPosition(
  targetCubiclePos: THREE.Vector3
): [number, number, number] {
  // Stand 1.2 units in front (positive Z) of the cubicle
  return [targetCubiclePos.x, 0, targetCubiclePos.z + 1.2];
}

/**
 * Get path from a cubicle to the break area, routed through the aisle.
 */
export function getPathToBreakArea(
  from: THREE.Vector3
): THREE.Vector3[] {
  const breakPos = getBreakAreaPosition();
  const target = new THREE.Vector3(...breakPos);
  return getPath(from, target);
}

/**
 * Get path from a cubicle to another cubicle for a visit.
 */
export function getPathToVisit(
  from: THREE.Vector3,
  targetCubiclePos: THREE.Vector3
): THREE.Vector3[] {
  const visitPos = getVisitPosition(targetCubiclePos);
  const target = new THREE.Vector3(...visitPos);
  return getPath(from, target);
}

export { MEETING_ROOM_CENTER, BREAK_AREA_CENTER };
