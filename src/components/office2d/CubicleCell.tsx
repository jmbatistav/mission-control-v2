/* ─────────────────────────────────────────────
   CubicleCell.tsx — Renders a cubicle at grid position
   Helper used by Office2D.tsx to place desk+chair+walls
   ─────────────────────────────────────────────*/

"use client";

import { Container, Sprite, Graphics } from "pixi.js";
import { CELL_SIZE } from "./GridSystem";
import { getDeskTexture, getChairTexture } from "./SpriteGenerator";

export interface CubicleData {
  container: Container;
}

/**
 * Create a cubicle container with desk, chair, and partition walls.
 * Cubicle is 3 cells wide × 3 cells tall.
 * @param gridX - left column of cubicle
 * @param gridY - top row of cubicle
 */
export function createCubicle(gridX: number, gridY: number): CubicleData {
  const container = new Container();
  container.x = gridX * CELL_SIZE;
  container.y = gridY * CELL_SIZE;

  // Desk (top row, spans 2 cells centered)
  const desk = new Sprite(getDeskTexture());
  desk.x = CELL_SIZE * 0.5;
  desk.y = 0;
  desk.width = CELL_SIZE * 2;
  desk.height = CELL_SIZE;
  container.addChild(desk);

  // Chair (middle row, centered)
  const chair = new Sprite(getChairTexture());
  chair.x = CELL_SIZE + 6;
  chair.y = CELL_SIZE;
  chair.width = CELL_SIZE * 0.75;
  chair.height = CELL_SIZE;
  container.addChild(chair);

  // Left wall
  const leftWall = new Graphics();
  leftWall.rect(0, 0, 2, CELL_SIZE * 3);
  leftWall.fill(0x444455);
  container.addChild(leftWall);

  // Right wall
  const rightWall = new Graphics();
  rightWall.rect(CELL_SIZE * 3 - 2, 0, 2, CELL_SIZE * 3);
  rightWall.fill(0x444455);
  container.addChild(rightWall);

  // Back wall (top)
  const backWall = new Graphics();
  backWall.rect(0, 0, CELL_SIZE * 3, 2);
  backWall.fill(0x444455);
  container.addChild(backWall);

  return { container };
}
