/* ─────────────────────────────────────────────
   ManagerOffice.tsx — Larger cubicle for leadership
   Helper used by Office2D.tsx
   ─────────────────────────────────────────────*/

"use client";

import { Container, Sprite, Graphics } from "pixi.js";
import { CELL_SIZE, ZONES } from "./GridSystem";
import { getDeskTexture, getChairTexture } from "./SpriteGenerator";

export function createManagerOffice(): Container {
  const zone = ZONES.manager;
  const container = new Container();
  container.x = zone.x * CELL_SIZE;
  container.y = zone.y * CELL_SIZE;

  // Floor tint (slightly different to indicate seniority)
  const floor = new Graphics();
  floor.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  floor.fill({ color: 0x1a1a30, alpha: 0.5 });
  container.addChild(floor);

  // Larger desk
  const desk = new Sprite(getDeskTexture());
  desk.x = CELL_SIZE * 0.5;
  desk.y = 0;
  desk.width = CELL_SIZE * 2;
  desk.height = CELL_SIZE;
  container.addChild(desk);

  // Executive chair
  const chair = new Sprite(getChairTexture());
  chair.x = CELL_SIZE + 6;
  chair.y = CELL_SIZE;
  chair.width = CELL_SIZE * 0.85;
  chair.height = CELL_SIZE * 1.1;
  container.addChild(chair);

  // Nameplate (decorative line)
  const plate = new Graphics();
  plate.roundRect(CELL_SIZE * 0.2, CELL_SIZE * 2.5, CELL_SIZE * 2.6, 6, 2);
  plate.fill(0x6366f1);
  container.addChild(plate);

  // Border with accent color
  const border = new Graphics();
  border.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  border.stroke({ width: 2, color: 0x6366f1 });
  container.addChild(border);

  return container;
}
