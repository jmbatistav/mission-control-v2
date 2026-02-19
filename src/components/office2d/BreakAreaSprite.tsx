/* ─────────────────────────────────────────────
   BreakAreaSprite.tsx — Break area with sofa + coffee machine
   Helper used by Office2D.tsx
   ─────────────────────────────────────────────*/

"use client";

import { Container, Sprite, Graphics } from "pixi.js";
import { CELL_SIZE, ZONES } from "./GridSystem";
import { getSofaTexture, getCoffeeMachineTexture } from "./SpriteGenerator";

export function createBreakArea(): Container {
  const zone = ZONES.breakArea;
  const container = new Container();
  container.x = zone.x * CELL_SIZE;
  container.y = zone.y * CELL_SIZE;

  // Floor tint
  const floor = new Graphics();
  floor.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  floor.fill({ color: 0x2a1a10, alpha: 0.3 });
  container.addChild(floor);

  // Sofa
  const sofa = new Sprite(getSofaTexture());
  sofa.x = CELL_SIZE;
  sofa.y = CELL_SIZE * 2;
  sofa.width = CELL_SIZE * 2.5;
  sofa.height = CELL_SIZE;
  container.addChild(sofa);

  // Coffee machine
  const coffee = new Sprite(getCoffeeMachineTexture(0));
  coffee.x = CELL_SIZE * 4;
  coffee.y = 8;
  coffee.width = CELL_SIZE * 0.75;
  coffee.height = CELL_SIZE;
  container.addChild(coffee);

  // Small table
  const table = new Graphics();
  table.roundRect(CELL_SIZE * 1.5, CELL_SIZE, CELL_SIZE * 1.5, CELL_SIZE * 0.8, 4);
  table.fill(0x5D4E37);
  container.addChild(table);

  // Border
  const border = new Graphics();
  border.rect(0, 0, zone.w * CELL_SIZE, zone.h * CELL_SIZE);
  border.stroke({ width: 2, color: 0xaa5533 });
  container.addChild(border);

  return container;
}
