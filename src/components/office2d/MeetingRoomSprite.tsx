/* ─────────────────────────────────────────────
   MeetingRoomSprite.tsx — Meeting room zone with table + chairs
   Helper used by Office2D.tsx
   ─────────────────────────────────────────────*/

"use client";

import { Container, Sprite, Graphics } from "pixi.js";
import { CELL_SIZE, ZONES } from "./GridSystem";
import { getMeetingTableTexture, getChairTexture } from "./SpriteGenerator";

export function createMeetingRoom(): Container {
  const zone = ZONES.meetingRoom;
  const container = new Container();
  container.x = zone.x * CELL_SIZE;
  container.y = zone.y * CELL_SIZE;

  // Floor tint
  const floor = new Graphics();
  floor.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  floor.fill({ color: 0x1a2040, alpha: 0.5 });
  container.addChild(floor);

  // Table (centered)
  const table = new Sprite(getMeetingTableTexture());
  table.x = CELL_SIZE;
  table.y = CELL_SIZE + 8;
  table.width = CELL_SIZE * 3;
  table.height = CELL_SIZE * 1.5;
  container.addChild(table);

  // Chairs around table
  const chairPositions = [
    { x: 0.5, y: 0.5 },
    { x: 2, y: 0.5 },
    { x: 3.5, y: 0.5 },
    { x: 0.5, y: 2.5 },
    { x: 2, y: 2.5 },
    { x: 3.5, y: 2.5 },
  ];

  for (const pos of chairPositions) {
    const chair = new Sprite(getChairTexture());
    chair.x = pos.x * CELL_SIZE;
    chair.y = pos.y * CELL_SIZE;
    chair.width = CELL_SIZE * 0.6;
    chair.height = CELL_SIZE * 0.8;
    container.addChild(chair);
  }

  // Border
  const border = new Graphics();
  border.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  border.stroke({ width: 2, color: 0x3355aa });
  container.addChild(border);

  return container;
}
