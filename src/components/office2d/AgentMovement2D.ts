/* ─────────────────────────────────────────────
   AgentMovement2D.ts — Smooth grid-to-grid movement + pathfinding
   ─────────────────────────────────────────────*/

import { CELL_SIZE } from "./GridSystem";
import type { Direction } from "./AgentAnimationController";

export interface GridPos {
  x: number;
  y: number;
}

const SPEED = 2; // cells per second

export class AgentMovement {
  // Current smooth pixel position
  pixelX: number;
  pixelY: number;

  // Grid positions
  gridX: number;
  gridY: number;

  // Movement
  private path: GridPos[] = [];
  private pathIndex: number = 0;
  private moving: boolean = false;

  direction: Direction = "down";

  constructor(gridX: number, gridY: number) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.pixelX = gridX * CELL_SIZE + CELL_SIZE / 2;
    this.pixelY = gridY * CELL_SIZE + CELL_SIZE / 2;
  }

  get isMoving(): boolean {
    return this.moving;
  }

  /** Set a path of grid cells to follow */
  setPath(path: GridPos[]) {
    if (path.length < 2) return;
    this.path = path;
    this.pathIndex = 1; // skip first (current pos)
    this.moving = true;
  }

  /** Teleport to position (no animation) */
  teleport(gridX: number, gridY: number) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.pixelX = gridX * CELL_SIZE + CELL_SIZE / 2;
    this.pixelY = gridY * CELL_SIZE + CELL_SIZE / 2;
    this.path = [];
    this.pathIndex = 0;
    this.moving = false;
  }

  /** Cancel current movement */
  stop() {
    this.path = [];
    this.pathIndex = 0;
    this.moving = false;
    this.gridX = Math.round((this.pixelX - CELL_SIZE / 2) / CELL_SIZE);
    this.gridY = Math.round((this.pixelY - CELL_SIZE / 2) / CELL_SIZE);
    this.pixelX = this.gridX * CELL_SIZE + CELL_SIZE / 2;
    this.pixelY = this.gridY * CELL_SIZE + CELL_SIZE / 2;
  }

  /** Update movement each frame */
  update(deltaMs: number): boolean {
    if (!this.moving || this.pathIndex >= this.path.length) {
      this.moving = false;
      return false;
    }

    const target = this.path[this.pathIndex];
    const targetPx = target.x * CELL_SIZE + CELL_SIZE / 2;
    const targetPy = target.y * CELL_SIZE + CELL_SIZE / 2;

    const dx = targetPx - this.pixelX;
    const dy = targetPy - this.pixelY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const step = SPEED * CELL_SIZE * (deltaMs / 1000);

    if (dist <= step + 0.5) {
      // Arrived at waypoint
      this.pixelX = targetPx;
      this.pixelY = targetPy;
      this.gridX = target.x;
      this.gridY = target.y;
      this.pathIndex++;

      if (this.pathIndex >= this.path.length) {
        this.moving = false;
        return false;
      }
    } else {
      // Move toward target
      const nx = dx / dist;
      const ny = dy / dist;
      this.pixelX += nx * step;
      this.pixelY += ny * step;
    }

    // Update direction based on movement
    if (Math.abs(dx) > Math.abs(dy)) {
      this.direction = dx > 0 ? "right" : "left";
    } else {
      this.direction = dy > 0 ? "down" : "up";
    }

    return true; // still moving
  }
}
