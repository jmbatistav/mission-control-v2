/* ─────────────────────────────────────────────
   SpriteGenerator.ts — Programmatic 8-bit sprite generation
   All sprites are drawn pixel-by-pixel on offscreen canvases.
   ─────────────────────────────────────────────*/

import { Texture } from "pixi.js";
import { hexToRGB } from "./GridSystem";

/* ─── Helpers ─── */

function px(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

function rect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function rgbStr(r: number, g: number, b: number): string {
  return `rgb(${r},${g},${b})`;
}

function darken(r: number, g: number, b: number, factor = 0.6): string {
  return rgbStr(Math.floor(r * factor), Math.floor(g * factor), Math.floor(b * factor));
}

function lighten(r: number, g: number, b: number, factor = 1.3): string {
  return rgbStr(Math.min(255, Math.floor(r * factor)), Math.min(255, Math.floor(g * factor)), Math.min(255, Math.floor(b * factor)));
}

const SKIN = "#F5D0A9";
const SKIN_DARK = "#D4A574";
const HAIR = "#4A3728";
const GRAY = "#808080";
const DARK_GRAY = "#505050";

/* ─── Agent Sprite (16x24) ─── */

type AnimType = "idle" | "walking" | "typing" | "sitting" | "thinking" | "meeting" | "offline";

export function generateAgentCanvas(colorHex: number, animation: AnimType, frame: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 24;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  const { r, g, b } = hexToRGB(colorHex);
  const bodyColor = rgbStr(r, g, b);
  const bodyDark = darken(r, g, b);
  const bodyLight = lighten(r, g, b);

  if (animation === "offline") {
    drawOfflineAgent(ctx);
    return canvas;
  }

  // Head (centered, 6x6 at position 5,1)
  rect(ctx, 5, 1, 6, 6, SKIN);
  // Eyes
  px(ctx, 6, 3, "#333");
  px(ctx, 9, 3, "#333");
  // Hair (top of head)
  rect(ctx, 5, 0, 6, 2, HAIR);
  px(ctx, 4, 1, HAIR);
  px(ctx, 11, 1, HAIR);

  // Body (centered, 8x8 at position 4,7)
  rect(ctx, 4, 7, 8, 8, bodyColor);
  // Collar
  rect(ctx, 6, 7, 4, 1, bodyLight);
  // Side shading
  rect(ctx, 4, 7, 1, 8, bodyDark);
  rect(ctx, 11, 7, 1, 8, bodyDark);

  switch (animation) {
    case "idle":
      drawIdleLegs(ctx, frame);
      drawIdleArms(ctx, bodyColor, bodyDark, frame);
      if (frame === 1) {
        // Subtle "breathing" — body shifts 1px
        rect(ctx, 4, 8, 8, 7, bodyColor);
      }
      break;
    case "walking":
      drawWalkingLegs(ctx, frame);
      drawWalkingArms(ctx, bodyColor, bodyDark, frame);
      break;
    case "typing":
      drawSittingLegs(ctx);
      drawTypingArms(ctx, bodyColor, bodyDark, frame);
      break;
    case "sitting":
      drawSittingLegs(ctx);
      drawIdleArms(ctx, bodyColor, bodyDark, 0);
      break;
    case "thinking":
      drawIdleLegs(ctx, 0);
      drawThinkingArms(ctx, bodyColor, bodyDark, frame);
      if (frame === 1) {
        // Thought bubble
        px(ctx, 13, 2, "#fff");
        rect(ctx, 12, 0, 3, 2, "#fff");
        px(ctx, 12, 3, "#ccc");
      }
      break;
    case "meeting":
      drawSittingLegs(ctx);
      drawMeetingArms(ctx, bodyColor, bodyDark, frame);
      break;
  }

  return canvas;
}

function drawIdleLegs(ctx: CanvasRenderingContext2D, frame: number) {
  const y = frame === 1 ? 15 : 15;
  // Left leg
  rect(ctx, 5, y, 3, 5, "#2C3E50");
  // Right leg
  rect(ctx, 8, y, 3, 5, "#2C3E50");
  // Shoes
  rect(ctx, 5, 20, 3, 2, "#1a1a1a");
  rect(ctx, 8, 20, 3, 2, "#1a1a1a");
  // Leg shading
  rect(ctx, 5, y, 1, 5, "#1C2E40");
}

function drawWalkingLegs(ctx: CanvasRenderingContext2D, frame: number) {
  switch (frame % 4) {
    case 0: // Left forward
      rect(ctx, 4, 15, 3, 6, "#2C3E50");
      rect(ctx, 9, 15, 3, 5, "#2C3E50");
      rect(ctx, 4, 21, 3, 2, "#1a1a1a");
      rect(ctx, 9, 20, 3, 2, "#1a1a1a");
      break;
    case 1: // Stand
      drawIdleLegs(ctx, 0);
      break;
    case 2: // Right forward
      rect(ctx, 5, 15, 3, 5, "#2C3E50");
      rect(ctx, 8, 15, 3, 6, "#2C3E50");
      rect(ctx, 5, 20, 3, 2, "#1a1a1a");
      rect(ctx, 8, 21, 3, 2, "#1a1a1a");
      break;
    case 3: // Stand
      drawIdleLegs(ctx, 0);
      break;
  }
}

function drawSittingLegs(ctx: CanvasRenderingContext2D) {
  // Bent legs (sitting position, shorter)
  rect(ctx, 4, 15, 4, 3, "#2C3E50");
  rect(ctx, 8, 15, 4, 3, "#2C3E50");
  // Feet forward
  rect(ctx, 3, 18, 3, 2, "#1a1a1a");
  rect(ctx, 10, 18, 3, 2, "#1a1a1a");
}

function drawIdleArms(ctx: CanvasRenderingContext2D, bodyColor: string, bodyDark: string, _frame: number) {
  // Arms at sides
  rect(ctx, 2, 8, 2, 6, bodyColor);
  rect(ctx, 12, 8, 2, 6, bodyColor);
  // Hands
  rect(ctx, 2, 14, 2, 1, SKIN);
  rect(ctx, 12, 14, 2, 1, SKIN);
  // Shading
  px(ctx, 2, 8, bodyDark);
  px(ctx, 13, 8, bodyDark);
}

function drawWalkingArms(ctx: CanvasRenderingContext2D, bodyColor: string, bodyDark: string, frame: number) {
  switch (frame % 4) {
    case 0:
      // Left arm forward, right back
      rect(ctx, 2, 7, 2, 6, bodyColor);
      rect(ctx, 12, 9, 2, 6, bodyColor);
      rect(ctx, 2, 13, 2, 1, SKIN);
      rect(ctx, 12, 15, 2, 1, SKIN);
      break;
    case 2:
      // Right arm forward, left back
      rect(ctx, 2, 9, 2, 6, bodyColor);
      rect(ctx, 12, 7, 2, 6, bodyColor);
      rect(ctx, 2, 15, 2, 1, SKIN);
      rect(ctx, 12, 13, 2, 1, SKIN);
      break;
    default:
      drawIdleArms(ctx, bodyColor, bodyDark, 0);
  }
}

function drawTypingArms(ctx: CanvasRenderingContext2D, bodyColor: string, _bodyDark: string, frame: number) {
  // Arms extended forward (toward desk)
  if (frame === 0) {
    rect(ctx, 2, 8, 2, 4, bodyColor);
    rect(ctx, 12, 8, 2, 4, bodyColor);
    // Hands on keyboard
    rect(ctx, 1, 12, 2, 1, SKIN);
    rect(ctx, 13, 12, 2, 1, SKIN);
  } else {
    rect(ctx, 2, 8, 2, 4, bodyColor);
    rect(ctx, 12, 8, 2, 4, bodyColor);
    rect(ctx, 2, 12, 2, 1, SKIN);
    rect(ctx, 12, 12, 2, 1, SKIN);
  }
}

function drawThinkingArms(ctx: CanvasRenderingContext2D, bodyColor: string, _bodyDark: string, frame: number) {
  // Left arm at side
  rect(ctx, 2, 8, 2, 6, bodyColor);
  rect(ctx, 2, 14, 2, 1, SKIN);
  // Right arm: hand on chin
  rect(ctx, 12, 8, 2, 3, bodyColor);
  if (frame === 0) {
    rect(ctx, 11, 5, 2, 3, SKIN); // hand near chin
  } else {
    rect(ctx, 12, 5, 2, 3, SKIN);
  }
}

function drawMeetingArms(ctx: CanvasRenderingContext2D, bodyColor: string, _bodyDark: string, frame: number) {
  // Arms on table (extended slightly)
  rect(ctx, 2, 8, 2, 5, bodyColor);
  rect(ctx, 12, 8, 2, 5, bodyColor);
  // Hands on table
  if (frame === 0) {
    rect(ctx, 1, 13, 3, 1, SKIN);
    rect(ctx, 12, 13, 3, 1, SKIN);
  } else {
    rect(ctx, 2, 13, 2, 1, SKIN);
    rect(ctx, 12, 13, 2, 1, SKIN);
  }
}

function drawOfflineAgent(ctx: CanvasRenderingContext2D) {
  // Grayed out version
  const g = "#666";
  const gd = "#444";
  const gSkin = "#999";

  // Head (slightly slumped)
  rect(ctx, 5, 3, 6, 6, gSkin);
  px(ctx, 6, 6, "#555"); // closed eyes
  rect(ctx, 7, 6, 2, 1, "#555");
  px(ctx, 9, 6, "#555");
  rect(ctx, 5, 2, 6, 2, gd);

  // Body
  rect(ctx, 4, 9, 8, 8, g);
  rect(ctx, 4, 9, 1, 8, gd);

  // Legs
  rect(ctx, 5, 17, 3, 4, gd);
  rect(ctx, 8, 17, 3, 4, gd);
  rect(ctx, 5, 21, 3, 2, "#333");
  rect(ctx, 8, 21, 3, 2, "#333");

  // Arms hanging
  rect(ctx, 2, 10, 2, 6, g);
  rect(ctx, 12, 10, 2, 6, g);
}

/* ─── Furniture Sprites ─── */

export function generateDeskCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Desk surface (wood color)
  rect(ctx, 0, 4, 16, 8, "#8B6914");
  rect(ctx, 0, 4, 16, 1, "#A07B28"); // top edge highlight
  rect(ctx, 0, 11, 16, 1, "#6B5010"); // bottom edge shadow

  // Monitor
  rect(ctx, 5, 0, 6, 5, "#2a2a3e");
  rect(ctx, 6, 1, 4, 3, "#4a90d9"); // screen
  rect(ctx, 7, 5, 2, 1, "#555");    // stand

  // Keyboard
  rect(ctx, 4, 7, 8, 2, "#444");
  rect(ctx, 5, 7, 6, 1, "#666"); // keys

  // Desk legs
  rect(ctx, 1, 12, 2, 4, "#6B5010");
  rect(ctx, 13, 12, 2, 4, "#6B5010");

  return canvas;
}

export function generateChairCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 12;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Seat
  rect(ctx, 1, 8, 10, 3, "#444");
  rect(ctx, 1, 8, 10, 1, "#555"); // highlight

  // Backrest
  rect(ctx, 2, 2, 8, 6, "#333");
  rect(ctx, 3, 3, 6, 4, "#444"); // padding

  // Legs (5 star base)
  rect(ctx, 5, 11, 2, 3, "#666"); // center post
  rect(ctx, 1, 13, 3, 1, "#555"); // left wheel
  rect(ctx, 8, 13, 3, 1, "#555"); // right wheel

  return canvas;
}

export function generateMeetingTableCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Table top (oval-ish)
  rect(ctx, 2, 3, 28, 10, "#5D4E37");
  rect(ctx, 4, 2, 24, 1, "#5D4E37");
  rect(ctx, 4, 13, 24, 1, "#5D4E37");
  // Highlight
  rect(ctx, 4, 4, 24, 1, "#7D6E57");
  // Shadow
  rect(ctx, 4, 12, 24, 1, "#4D3E27");

  // Legs
  rect(ctx, 5, 13, 2, 3, "#4D3E27");
  rect(ctx, 25, 13, 2, 3, "#4D3E27");

  return canvas;
}

export function generateCoffeeMachineCanvas(frame: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 12;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Machine body
  rect(ctx, 1, 4, 10, 10, "#555");
  rect(ctx, 2, 5, 8, 8, "#444");
  // Display
  rect(ctx, 3, 5, 6, 3, "#2a5a2a");
  // Cup slot
  rect(ctx, 4, 10, 4, 3, "#333");
  // Cup
  rect(ctx, 5, 11, 2, 2, "#ddd");

  // Steam
  if (frame === 0) {
    px(ctx, 5, 3, "#aaa");
    px(ctx, 6, 2, "#999");
    px(ctx, 5, 1, "#888");
  } else {
    px(ctx, 6, 3, "#aaa");
    px(ctx, 5, 2, "#999");
    px(ctx, 6, 1, "#888");
  }

  // Top
  rect(ctx, 1, 3, 10, 1, "#666");

  return canvas;
}

export function generateSofaCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 24;
  canvas.height = 12;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Sofa body
  rect(ctx, 0, 4, 24, 6, "#6B3A5D");
  // Back cushion
  rect(ctx, 0, 2, 24, 3, "#7D4A6F");
  // Seat cushions
  rect(ctx, 2, 5, 9, 4, "#8B5A7D");
  rect(ctx, 13, 5, 9, 4, "#8B5A7D");
  // Armrests
  rect(ctx, 0, 3, 2, 7, "#5B2A4D");
  rect(ctx, 22, 3, 2, 7, "#5B2A4D");
  // Legs
  rect(ctx, 2, 10, 2, 2, "#333");
  rect(ctx, 20, 10, 2, 2, "#333");

  return canvas;
}

export function generateFloorTileCanvas(): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Dark base
  rect(ctx, 0, 0, 16, 16, "#1e1e32");
  // Subtle checkerboard
  rect(ctx, 0, 0, 8, 8, "#1f1f34");
  rect(ctx, 8, 8, 8, 8, "#1f1f34");
  // Dot pattern
  for (let y = 0; y < 16; y += 4) {
    for (let x = 0; x < 16; x += 4) {
      px(ctx, x, y, "#252540");
    }
  }

  return canvas;
}

export function generateCubicleWallCanvas(width: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = 2;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  rect(ctx, 0, 0, width, 1, "#555");
  rect(ctx, 0, 1, width, 1, "#3a3a3a");

  return canvas;
}

/* ─── Texture Cache ─── */

const textureCache = new Map<string, Texture>();

export function getTexture(key: string, canvas: HTMLCanvasElement): Texture {
  let tex = textureCache.get(key);
  if (tex) return tex;
  tex = Texture.from(canvas);
  tex.source.scaleMode = "nearest";
  textureCache.set(key, tex);
  return tex;
}

export function getAgentTexture(colorHex: number, animation: AnimType, frame: number): Texture {
  const key = `agent_${colorHex}_${animation}_${frame}`;
  let tex = textureCache.get(key);
  if (tex) return tex;
  const canvas = generateAgentCanvas(colorHex, animation, frame);
  tex = Texture.from(canvas);
  tex.source.scaleMode = "nearest";
  textureCache.set(key, tex);
  return tex;
}

export function getDeskTexture(): Texture {
  return getTexture("desk", generateDeskCanvas());
}

export function getChairTexture(): Texture {
  return getTexture("chair", generateChairCanvas());
}

export function getMeetingTableTexture(): Texture {
  return getTexture("meetingTable", generateMeetingTableCanvas());
}

export function getCoffeeMachineTexture(frame: number): Texture {
  return getTexture(`coffee_${frame}`, generateCoffeeMachineCanvas(frame));
}

export function getSofaTexture(): Texture {
  return getTexture("sofa", generateSofaCanvas());
}

export function getFloorTileTexture(): Texture {
  return getTexture("floor", generateFloorTileCanvas());
}
