/* ─────────────────────────────────────────────
   AgentSprite.tsx — Agent sprite creation helper
   Used by Office2D.tsx to create individual agent sprites
   ─────────────────────────────────────────────*/

"use client";

import { Sprite, Graphics, Container } from "pixi.js";
import { CELL_SIZE, getColorHex } from "./GridSystem";
import { getAgentTexture } from "./SpriteGenerator";
import type { AnimState } from "./AgentAnimationController";

export interface AgentSpriteData {
  container: Container;
  sprite: Sprite;
  glow: Graphics;
  nameTag: Graphics;
}

/**
 * Create a PixiJS sprite group for an agent.
 * Returns a container with the sprite, selection glow, and name indicator.
 */
export function createAgentSprite(
  colorName: string,
  animState: AnimState,
  frame: number
): AgentSpriteData {
  const container = new Container();

  const colorHex = getColorHex(colorName);
  const tex = getAgentTexture(colorHex, animState, frame);

  // Main sprite
  const sprite = new Sprite(tex);
  sprite.width = CELL_SIZE;
  sprite.height = CELL_SIZE * 1.5;
  sprite.anchor.set(0.5, 0.5);
  sprite.cursor = "pointer";

  // Selection glow
  const glow = new Graphics();
  glow.roundRect(-CELL_SIZE / 2 - 4, -CELL_SIZE * 0.75 - 4, CELL_SIZE + 8, CELL_SIZE * 1.5 + 8, 4);
  glow.fill({ color: 0x06b6d4, alpha: 0.3 });
  glow.visible = false;

  // Name dot indicator (colored dot above head)
  const nameTag = new Graphics();
  nameTag.circle(0, -CELL_SIZE * 0.75 - 8, 3);
  nameTag.fill(colorHex);

  container.addChild(glow);
  container.addChild(sprite);
  container.addChild(nameTag);

  return { container, sprite, glow, nameTag };
}

/**
 * Update an existing agent sprite's texture based on animation state.
 */
export function updateAgentSprite(
  sprite: Sprite,
  colorName: string,
  animState: AnimState,
  frame: number
) {
  const colorHex = getColorHex(colorName);
  sprite.texture = getAgentTexture(colorHex, animState, frame);
}
