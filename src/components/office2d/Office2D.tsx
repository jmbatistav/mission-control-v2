/* ─────────────────────────────────────────────
   Office2D.tsx — Main PixiJS canvas container
   Imperative PixiJS API for performance and control.
   ─────────────────────────────────────────────*/

"use client";

import { useRef, useEffect, useCallback } from "react";
import type { AgentPhysicalState2D } from "./OfficeStateManager";

/* ─── Types ─── */

interface Office2DProps {
  agentStates: AgentPhysicalState2D[];
  onAgentClick: (agentId: string) => void;
  selectedId: string | null;
}

/* ─── Component ─── */

export default function Office2D({ agentStates, onAgentClick, selectedId }: Office2DProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<OfficeEngine | null>(null);
  const statesRef = useRef<AgentPhysicalState2D[]>([]);
  const selectedIdRef = useRef<string | null>(null);
  const onAgentClickRef = useRef(onAgentClick);

  statesRef.current = agentStates;
  selectedIdRef.current = selectedId;
  onAgentClickRef.current = onAgentClick;

  /* ─── Initialize PixiJS (async, SSR-safe) ─── */
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    let destroyed = false;
    let engine: OfficeEngine | null = null;

    const init = async () => {
      // Dynamic import to avoid SSR issues
      const pixi = await import("pixi.js");
      const gridMod = await import("./GridSystem");
      const spriteMod = await import("./SpriteGenerator");
      const cameraMod = await import("./Camera2D");
      const animMod = await import("./AgentAnimationController");
      const moveMod = await import("./AgentMovement2D");

      if (destroyed) return;

      const {
        Application, Container, Sprite, Graphics, Text, TextStyle,
      } = pixi;

      const {
        CELL_SIZE, OFFICE_COLS, OFFICE_ROWS, ZONES, CUBICLE_POSITIONS, getColorHex,
      } = gridMod;

      const {
        getAgentTexture, getDeskTexture, getChairTexture,
        getMeetingTableTexture, getCoffeeMachineTexture,
        getSofaTexture, getFloorTileTexture,
      } = spriteMod;

      const { Camera2D } = cameraMod;
      const { AgentAnimController } = animMod;
      const { AgentMovement } = moveMod;

      const app = new Application();
      await app.init({
        width: container.clientWidth || 800,
        height: container.clientHeight || 600,
        backgroundColor: 0x1a1a2e,
        resolution: 1,
        antialias: false,
      });

      if (destroyed) {
        app.destroy(true);
        return;
      }

      container.appendChild(app.canvas);

      // World container
      const world = new Container();
      app.stage.addChild(world);

      // Camera
      const camera = new Camera2D(world, app.canvas.width, app.canvas.height);

      // ─── Draw floor ───
      const floorContainer = new Container();
      world.addChild(floorContainer);

      const floorTex = getFloorTileTexture();
      for (let y = 0; y < OFFICE_ROWS; y++) {
        for (let x = 0; x < OFFICE_COLS; x++) {
          const tile = new Sprite(floorTex);
          tile.x = x * CELL_SIZE;
          tile.y = y * CELL_SIZE;
          tile.width = CELL_SIZE;
          tile.height = CELL_SIZE;
          floorContainer.addChild(tile);
        }
      }

      // ─── Zone outlines + labels ───
      const zoneGfx = new Graphics();
      world.addChild(zoneGfx);

      for (const [, zone] of Object.entries(ZONES)) {
        zoneGfx.rect(
          zone.x * CELL_SIZE, zone.y * CELL_SIZE,
          zone.w * CELL_SIZE, zone.h * CELL_SIZE
        );
        zoneGfx.stroke({ width: 1, color: 0x333355 });

        const label = new Text({
          text: zone.label,
          style: new TextStyle({ fontSize: 10, fill: 0x555577, fontFamily: "monospace" }),
        });
        label.x = zone.x * CELL_SIZE + 4;
        label.y = zone.y * CELL_SIZE + 2;
        world.addChild(label);
      }

      // ─── Office border ───
      const wallGfx = new Graphics();
      wallGfx.rect(0, 0, OFFICE_COLS * CELL_SIZE, OFFICE_ROWS * CELL_SIZE);
      wallGfx.stroke({ width: 2, color: 0x444466 });
      world.addChild(wallGfx);

      // ─── Furniture ───
      const furnitureContainer = new Container();
      world.addChild(furnitureContainer);

      const deskTex = getDeskTexture();
      const chairTex = getChairTexture();

      for (const dept of Object.values(CUBICLE_POSITIONS)) {
        for (const cub of dept) {
          const desk = new Sprite(deskTex);
          desk.x = cub.gridX * CELL_SIZE + CELL_SIZE * 0.5;
          desk.y = cub.gridY * CELL_SIZE;
          desk.width = CELL_SIZE * 2;
          desk.height = CELL_SIZE;
          furnitureContainer.addChild(desk);

          const chair = new Sprite(chairTex);
          chair.x = (cub.gridX + 1) * CELL_SIZE + 6;
          chair.y = (cub.gridY + 1) * CELL_SIZE;
          chair.width = CELL_SIZE * 0.75;
          chair.height = CELL_SIZE;
          furnitureContainer.addChild(chair);

          const wallLeft = new Graphics();
          wallLeft.rect(cub.gridX * CELL_SIZE, cub.gridY * CELL_SIZE, 2, CELL_SIZE * 3);
          wallLeft.fill(0x444455);
          furnitureContainer.addChild(wallLeft);

          const wallRight = new Graphics();
          wallRight.rect((cub.gridX + 3) * CELL_SIZE - 2, cub.gridY * CELL_SIZE, 2, CELL_SIZE * 3);
          wallRight.fill(0x444455);
          furnitureContainer.addChild(wallRight);
        }
      }

      // Meeting room
      const meetingZone = ZONES.meetingRoom;
      const tableTex = getMeetingTableTexture();
      const table = new Sprite(tableTex);
      table.x = (meetingZone.x + 1) * CELL_SIZE;
      table.y = (meetingZone.y + 1) * CELL_SIZE + 8;
      table.width = CELL_SIZE * 3;
      table.height = CELL_SIZE * 1.5;
      furnitureContainer.addChild(table);

      const mrWall = new Graphics();
      mrWall.rect(meetingZone.x * CELL_SIZE, meetingZone.y * CELL_SIZE, meetingZone.w * CELL_SIZE, meetingZone.h * CELL_SIZE);
      mrWall.stroke({ width: 2, color: 0x3355aa });
      world.addChild(mrWall);

      // Break area
      const breakZone = ZONES.breakArea;
      const sofaTex = getSofaTexture();
      const sofa = new Sprite(sofaTex);
      sofa.x = (breakZone.x + 1) * CELL_SIZE;
      sofa.y = (breakZone.y + 2) * CELL_SIZE;
      sofa.width = CELL_SIZE * 2.5;
      sofa.height = CELL_SIZE;
      furnitureContainer.addChild(sofa);

      const coffeeTex = getCoffeeMachineTexture(0);
      const coffee = new Sprite(coffeeTex);
      coffee.x = (breakZone.x + 4) * CELL_SIZE;
      coffee.y = breakZone.y * CELL_SIZE + 8;
      coffee.width = CELL_SIZE * 0.75;
      coffee.height = CELL_SIZE;
      furnitureContainer.addChild(coffee);

      const baWall = new Graphics();
      baWall.rect(breakZone.x * CELL_SIZE, breakZone.y * CELL_SIZE, breakZone.w * CELL_SIZE, breakZone.h * CELL_SIZE);
      baWall.stroke({ width: 2, color: 0xaa5533 });
      world.addChild(baWall);

      // ─── Agent container ───
      const agentContainer = new Container();
      world.addChild(agentContainer);

      // ─── Agent runtime map ───
      const STATUS_COLORS: Record<string, number> = {
        active: 0x10b981,
        idle: 0xf59e0b,
        offline: 0x6b7280,
      };

      const labelStyle = new TextStyle({
        fontSize: 9,
        fill: 0xe2e8f0,
        fontFamily: "monospace",
        align: "center",
      });

      const statusLabelStyle = new TextStyle({
        fontSize: 7,
        fill: 0x94a3b8,
        fontFamily: "monospace",
        align: "center",
      });

      interface AgentRuntime {
        sprite: InstanceType<typeof Sprite>;
        movement: InstanceType<typeof AgentMovement>;
        anim: InstanceType<typeof AgentAnimController>;
        state: AgentPhysicalState2D;
        lastPath: string;
        selectionGlow: InstanceType<typeof Graphics>;
        nameLabel: InstanceType<typeof Container>;
      }

      const runtimes = new Map<string, AgentRuntime>();

      // ─── Event listeners ───
      const canvas = app.canvas;

      const onPointerDown = (e: PointerEvent) => camera.onDragStart(e.clientX, e.clientY);
      const onPointerMove = (e: PointerEvent) => camera.onDragMove(e.clientX, e.clientY);
      const onPointerUp = () => camera.onDragEnd();
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        camera.onZoom(e.deltaY, e.clientX, e.clientY);
      };
      const onKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
          case "ArrowLeft": camera.onKeyPan(1, 0); break;
          case "ArrowRight": camera.onKeyPan(-1, 0); break;
          case "ArrowUp": camera.onKeyPan(0, 1); break;
          case "ArrowDown": camera.onKeyPan(0, -1); break;
        }
      };
      const onClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const worldPos = camera.screenToWorld(e.clientX - rect.left, e.clientY - rect.top);
        let clickedId: string | null = null;
        let minDist = CELL_SIZE * 1.5;
        for (const [id, rt] of runtimes) {
          const dx = worldPos.x - rt.movement.pixelX;
          const dy = worldPos.y - rt.movement.pixelY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) { minDist = dist; clickedId = id; }
        }
        if (clickedId) onAgentClickRef.current(clickedId);
      };

      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", onPointerUp);
      canvas.addEventListener("pointerleave", onPointerUp);
      canvas.addEventListener("wheel", onWheel, { passive: false });
      canvas.addEventListener("click", onClick);
      window.addEventListener("keydown", onKeyDown);

      const onResize = () => {
        if (destroyed || !container) return;
        app.renderer.resize(container.clientWidth || 800, container.clientHeight || 600);
        camera.resize(container.clientWidth || 800, container.clientHeight || 600);
      };
      window.addEventListener("resize", onResize);

      // ─── Sync function (called from external useEffect) ───
      const syncAgents = (states: AgentPhysicalState2D[], selId: string | null) => {
        const currentIds = new Set(states.map((s) => s.agentId));

        // Remove old
        for (const [id, rt] of runtimes) {
          if (!currentIds.has(id)) {
            agentContainer.removeChild(rt.sprite);
            agentContainer.removeChild(rt.selectionGlow);
            agentContainer.removeChild(rt.nameLabel);
            runtimes.delete(id);
          }
        }

        // Add or update
        for (const state of states) {
          let rt = runtimes.get(state.agentId);
          if (!rt) {
            const colorHex = getColorHex(state.color);
            const tex = getAgentTexture(colorHex, state.animState, 0);
            const sprite = new Sprite(tex);
            sprite.width = CELL_SIZE;
            sprite.height = CELL_SIZE * 1.5;
            sprite.anchor.set(0.5, 0.5);

            const movement = new AgentMovement(state.homeX, state.homeY);
            const anim = new AgentAnimController();
            anim.setState(state.animState);

            const glow = new Graphics();
            glow.roundRect(0, 0, CELL_SIZE + 8, CELL_SIZE * 1.5 + 8, 4);
            glow.fill({ color: 0x06b6d4, alpha: 0.3 });
            glow.visible = false;
            agentContainer.addChild(glow);
            agentContainer.addChild(sprite);

            // Name label container (emoji + name + status dot)
            const nameLabel = new Container();

            // Background pill
            const labelBg = new Graphics();
            labelBg.roundRect(-30, -8, 60, 22, 4);
            labelBg.fill({ color: 0x0f172a, alpha: 0.85 });
            labelBg.stroke({ width: 0.5, color: 0x334155 });
            nameLabel.addChild(labelBg);

            // Status dot
            const statusDot = new Graphics();
            statusDot.circle(0, 0, 3);
            statusDot.fill(STATUS_COLORS[state.status] ?? 0x6b7280);
            statusDot.x = -22;
            statusDot.y = 3;
            nameLabel.addChild(statusDot);

            // Emoji text
            const emojiText = new Text({
              text: state.avatar,
              style: new TextStyle({ fontSize: 10 }),
            });
            emojiText.anchor.set(0.5, 0.5);
            emojiText.x = -14;
            emojiText.y = 3;
            nameLabel.addChild(emojiText);

            // Name text
            const nameText = new Text({
              text: state.agentName,
              style: labelStyle,
            });
            nameText.anchor.set(0, 0.5);
            nameText.x = -6;
            nameText.y = 3;
            nameLabel.addChild(nameText);

            // Adjust pill width to fit name
            const textW = nameText.width;
            labelBg.clear();
            const pillW = Math.max(60, textW + 38);
            labelBg.roundRect(-pillW / 2, -8, pillW, 22, 4);
            labelBg.fill({ color: 0x0f172a, alpha: 0.85 });
            labelBg.stroke({ width: 0.5, color: 0x334155 });
            // Reposition elements centered
            statusDot.x = -pillW / 2 + 8;
            emojiText.x = -pillW / 2 + 18;
            nameText.x = -pillW / 2 + 28;

            agentContainer.addChild(nameLabel);

            sprite.x = movement.pixelX;
            sprite.y = movement.pixelY;

            rt = { sprite, movement, anim, state, lastPath: "", selectionGlow: glow, nameLabel };
            runtimes.set(state.agentId, rt);
          }

          rt.state = state;
          rt.anim.setState(state.animState);

          if (state.path) {
            const pathStr = JSON.stringify(state.path);
            if (pathStr !== rt.lastPath) {
              rt.lastPath = pathStr;
              rt.movement.setPath(state.path);
            }
          } else if (state.animState !== "walking" && !rt.movement.isMoving) {
            if (rt.movement.gridX !== state.targetX || rt.movement.gridY !== state.targetY) {
              rt.movement.teleport(state.targetX, state.targetY);
            }
          }

          // Follow selected
          if (state.agentId === selId) {
            camera.followPosition(rt.movement.pixelX, rt.movement.pixelY);
          }
        }

        if (!selId) camera.stopFollow();
      };

      // ─── Game loop ───
      const tickerFn = (ticker: { deltaMS: number }) => {
        camera.update(ticker.deltaMS);
        for (const [, rt] of runtimes) {
          rt.anim.update(ticker.deltaMS);
          const stillMoving = rt.movement.update(ticker.deltaMS);
          rt.sprite.x = rt.movement.pixelX;
          rt.sprite.y = rt.movement.pixelY;

          const colorHex = getColorHex(rt.state.color);
          rt.sprite.texture = getAgentTexture(colorHex, rt.anim.state, rt.anim.frameIndex);

          const isSelected = rt.state.agentId === selectedIdRef.current;
          rt.selectionGlow.visible = isSelected;
          if (isSelected) {
            rt.selectionGlow.x = rt.movement.pixelX - 4;
            rt.selectionGlow.y = rt.movement.pixelY - 4;
          }

          // Position name label above sprite
          rt.nameLabel.x = rt.movement.pixelX;
          rt.nameLabel.y = rt.movement.pixelY - CELL_SIZE * 0.9;

          if (!stillMoving && rt.anim.state === "walking") {
            rt.anim.setState(rt.state.animState !== "walking" ? rt.state.animState : "idle");
          }
        }
      };
      app.ticker.add(tickerFn);

      // Store engine ref
      engine = { syncAgents, app };
      engineRef.current = engine;

      // Do initial sync
      syncAgents(statesRef.current, selectedIdRef.current);

      // Cleanup reference
      (engine as any)._cleanup = () => {
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", onPointerUp);
        canvas.removeEventListener("pointerleave", onPointerUp);
        canvas.removeEventListener("wheel", onWheel);
        canvas.removeEventListener("click", onClick);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("resize", onResize);
        app.ticker.remove(tickerFn);
      };
    };

    init().catch(console.error);

    return () => {
      destroyed = true;
      if (engine) {
        (engine as any)._cleanup?.();
        engine.app.destroy(true, { children: true });
      }
      engineRef.current = null;
      // Remove any canvas left behind
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Sync agent states when they change ─── */
  useEffect(() => {
    engineRef.current?.syncAgents(agentStates, selectedId);
  }, [agentStates, selectedId]);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        overflow: "hidden",
      }}
    />
  );
}

/* ─── Engine interface ─── */
interface OfficeEngine {
  syncAgents: (states: AgentPhysicalState2D[], selectedId: string | null) => void;
  app: any;
}
