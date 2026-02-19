/* ─────────────────────────────────────────────
   Office2D.tsx — Main PixiJS canvas container
   Imperative PixiJS API for performance and control.
   ─────────────────────────────────────────────*/

"use client";

import { useRef, useEffect, useCallback } from "react";
import { Application, Container, Sprite, Graphics, Text, TextStyle } from "pixi.js";
import {
  CELL_SIZE,
  OFFICE_COLS,
  OFFICE_ROWS,
  ZONES,
  CUBICLE_POSITIONS,
  getColorHex,
} from "./GridSystem";
import {
  getAgentTexture,
  getDeskTexture,
  getChairTexture,
  getMeetingTableTexture,
  getCoffeeMachineTexture,
  getSofaTexture,
  getFloorTileTexture,
} from "./SpriteGenerator";
import { Camera2D } from "./Camera2D";
import { AgentAnimController, type AnimState } from "./AgentAnimationController";
import { AgentMovement } from "./AgentMovement2D";
import type { AgentPhysicalState2D } from "./OfficeStateManager";

/* ─── Types ─── */

interface Office2DProps {
  agentStates: AgentPhysicalState2D[];
  onAgentClick: (agentId: string) => void;
  selectedId: string | null;
}

interface AgentRuntime {
  sprite: Sprite;
  movement: AgentMovement;
  anim: AgentAnimController;
  state: AgentPhysicalState2D;
  lastPath: string; // serialized path for change detection
  selectionGlow: Graphics;
}

/* ─── Component ─── */

export default function Office2D({ agentStates, onAgentClick, selectedId }: Office2DProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const cameraRef = useRef<Camera2D | null>(null);
  const worldRef = useRef<Container | null>(null);
  const agentRuntimesRef = useRef<Map<string, AgentRuntime>>(new Map());
  const agentContainerRef = useRef<Container | null>(null);
  const badgeCallbackRef = useRef<((badges: { id: string; x: number; y: number; name: string; avatar: string; status: string; label?: string }[]) => void) | null>(null);

  // Store latest agent states for tick access
  const statesRef = useRef<AgentPhysicalState2D[]>([]);
  statesRef.current = agentStates;

  const selectedIdRef = useRef<string | null>(null);
  selectedIdRef.current = selectedId;

  /* ─── Initialize PixiJS ─── */
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const app = new Application();
    let destroyed = false;

    const init = async () => {
      await app.init({
        width: container.clientWidth,
        height: container.clientHeight,
        backgroundColor: 0x1a1a2e,
        resolution: 1,
        antialias: false,
      });

      if (destroyed) return;

      container.appendChild(app.canvas);
      appRef.current = app;

      // World container (camera applies transforms to this)
      const world = new Container();
      app.stage.addChild(world);
      worldRef.current = world;

      // Camera
      const camera = new Camera2D(world, app.canvas.width, app.canvas.height);
      cameraRef.current = camera;

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

      // ─── Draw zone outlines and labels ───
      const zoneGfx = new Graphics();
      world.addChild(zoneGfx);

      for (const [, zone] of Object.entries(ZONES)) {
        zoneGfx.rect(
          zone.x * CELL_SIZE,
          zone.y * CELL_SIZE,
          zone.w * CELL_SIZE,
          zone.h * CELL_SIZE
        );
        zoneGfx.stroke({ width: 1, color: 0x333355 });

        const label = new Text({
          text: zone.label,
          style: new TextStyle({
            fontSize: 10,
            fill: 0x555577,
            fontFamily: "monospace",
          }),
        });
        label.x = zone.x * CELL_SIZE + 4;
        label.y = zone.y * CELL_SIZE + 2;
        world.addChild(label);
      }

      // ─── Draw walls (office border) ───
      const wallGfx = new Graphics();
      wallGfx.rect(0, 0, OFFICE_COLS * CELL_SIZE, OFFICE_ROWS * CELL_SIZE);
      wallGfx.stroke({ width: 2, color: 0x444466 });
      world.addChild(wallGfx);

      // ─── Draw cubicles (desks + chairs) ───
      const furnitureContainer = new Container();
      world.addChild(furnitureContainer);

      const deskTex = getDeskTexture();
      const chairTex = getChairTexture();

      for (const dept of Object.values(CUBICLE_POSITIONS)) {
        for (const cub of dept) {
          // Desk at top row of cubicle
          const desk = new Sprite(deskTex);
          desk.x = cub.gridX * CELL_SIZE + CELL_SIZE * 0.5;
          desk.y = cub.gridY * CELL_SIZE;
          desk.width = CELL_SIZE * 2;
          desk.height = CELL_SIZE;
          furnitureContainer.addChild(desk);

          // Chair at middle of cubicle
          const chair = new Sprite(chairTex);
          chair.x = (cub.gridX + 1) * CELL_SIZE + 6;
          chair.y = (cub.gridY + 1) * CELL_SIZE;
          chair.width = CELL_SIZE * 0.75;
          chair.height = CELL_SIZE;
          furnitureContainer.addChild(chair);

          // Cubicle walls (sides)
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

      // ─── Meeting room furniture ───
      const meetingZone = ZONES.meetingRoom;
      const tableTex = getMeetingTableTexture();
      const table = new Sprite(tableTex);
      table.x = (meetingZone.x + 1) * CELL_SIZE;
      table.y = (meetingZone.y + 1) * CELL_SIZE + 8;
      table.width = CELL_SIZE * 3;
      table.height = CELL_SIZE * 1.5;
      furnitureContainer.addChild(table);

      // Meeting room walls
      const mrWall = new Graphics();
      mrWall.rect(
        meetingZone.x * CELL_SIZE,
        meetingZone.y * CELL_SIZE,
        meetingZone.w * CELL_SIZE,
        meetingZone.h * CELL_SIZE
      );
      mrWall.stroke({ width: 2, color: 0x3355aa });
      world.addChild(mrWall);

      // ─── Break area furniture ───
      const breakZone = ZONES.breakArea;

      // Sofa
      const sofaTex = getSofaTexture();
      const sofa = new Sprite(sofaTex);
      sofa.x = (breakZone.x + 1) * CELL_SIZE;
      sofa.y = (breakZone.y + 2) * CELL_SIZE;
      sofa.width = CELL_SIZE * 2.5;
      sofa.height = CELL_SIZE;
      furnitureContainer.addChild(sofa);

      // Coffee machine
      const coffeeTex = getCoffeeMachineTexture(0);
      const coffee = new Sprite(coffeeTex);
      coffee.x = (breakZone.x + 4) * CELL_SIZE;
      coffee.y = breakZone.y * CELL_SIZE + 8;
      coffee.width = CELL_SIZE * 0.75;
      coffee.height = CELL_SIZE;
      furnitureContainer.addChild(coffee);

      // Break area border
      const baWall = new Graphics();
      baWall.rect(
        breakZone.x * CELL_SIZE,
        breakZone.y * CELL_SIZE,
        breakZone.w * CELL_SIZE,
        breakZone.h * CELL_SIZE
      );
      baWall.stroke({ width: 2, color: 0xaa5533 });
      world.addChild(baWall);

      // ─── Agent container ───
      const agentContainer = new Container();
      world.addChild(agentContainer);
      agentContainerRef.current = agentContainer;

      // ─── Event listeners ───
      const canvas = app.canvas;

      const onPointerDown = (e: PointerEvent) => {
        camera.onDragStart(e.clientX, e.clientY);
      };
      const onPointerMove = (e: PointerEvent) => {
        camera.onDragMove(e.clientX, e.clientY);
      };
      const onPointerUp = () => {
        camera.onDragEnd();
      };
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

      canvas.addEventListener("pointerdown", onPointerDown);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerup", onPointerUp);
      canvas.addEventListener("pointerleave", onPointerUp);
      canvas.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);

      // ─── Click detection for agents ───
      canvas.addEventListener("click", (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        const worldPos = camera.screenToWorld(sx, sy);

        // Check if click is on any agent
        let clickedId: string | null = null;
        let minDist = CELL_SIZE * 1.5;

        for (const [id, runtime] of agentRuntimesRef.current) {
          const dx = worldPos.x - runtime.movement.pixelX;
          const dy = worldPos.y - runtime.movement.pixelY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            clickedId = id;
          }
        }

        if (clickedId) {
          onAgentClick(clickedId);
        }
      });

      // ─── Resize handler ───
      const onResize = () => {
        if (!container || destroyed) return;
        app.renderer.resize(container.clientWidth, container.clientHeight);
        camera.resize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", onResize);

      // ─── Game loop (ticker) ───
      app.ticker.add((ticker) => {
        const dt = ticker.deltaMS;

        // Update camera
        camera.update(dt);

        // Update agents
        for (const [, runtime] of agentRuntimesRef.current) {
          // Update animation
          runtime.anim.update(dt);

          // Update movement
          const stillMoving = runtime.movement.update(dt);

          // Update sprite position
          runtime.sprite.x = runtime.movement.pixelX;
          runtime.sprite.y = runtime.movement.pixelY;

          // Update sprite texture
          const colorHex = getColorHex(runtime.state.color);
          const animState = runtime.anim.state;
          const frame = runtime.anim.frameIndex;
          runtime.sprite.texture = getAgentTexture(colorHex, animState, frame);

          // Update selection glow
          const isSelected = runtime.state.agentId === selectedIdRef.current;
          runtime.selectionGlow.visible = isSelected;
          if (isSelected) {
            runtime.selectionGlow.x = runtime.movement.pixelX - 4;
            runtime.selectionGlow.y = runtime.movement.pixelY - 4;
          }

          // If walking is done and anim is still walking, transition
          if (!stillMoving && runtime.anim.state === "walking") {
            // Revert to appropriate idle state
            const s = runtime.state;
            if (s.animState !== "walking") {
              runtime.anim.setState(s.animState);
            } else {
              runtime.anim.setState("idle");
            }
          }
        }
      });

      // Cleanup
      return () => {
        canvas.removeEventListener("pointerdown", onPointerDown);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerup", onPointerUp);
        canvas.removeEventListener("pointerleave", onPointerUp);
        canvas.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("resize", onResize);
      };
    };

    init();

    return () => {
      destroyed = true;
      app.destroy(true, { children: true });
      appRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Sync agent states to sprites ─── */
  useEffect(() => {
    const agentContainer = agentContainerRef.current;
    if (!agentContainer) return;

    const runtimes = agentRuntimesRef.current;
    const currentIds = new Set(agentStates.map((s) => s.agentId));

    // Remove agents that no longer exist
    for (const [id, runtime] of runtimes) {
      if (!currentIds.has(id)) {
        agentContainer.removeChild(runtime.sprite);
        agentContainer.removeChild(runtime.selectionGlow);
        runtimes.delete(id);
      }
    }

    // Add or update agents
    for (const state of agentStates) {
      let runtime = runtimes.get(state.agentId);

      if (!runtime) {
        // Create new agent sprite
        const colorHex = getColorHex(state.color);
        const tex = getAgentTexture(colorHex, state.animState, 0);
        const sprite = new Sprite(tex);
        sprite.width = CELL_SIZE;
        sprite.height = CELL_SIZE * 1.5; // 16x24 aspect ratio
        sprite.anchor.set(0.5, 0.5);
        sprite.cursor = "pointer";

        const movement = new AgentMovement(state.homeX, state.homeY);
        const anim = new AgentAnimController();
        anim.setState(state.animState);

        // Selection glow
        const glow = new Graphics();
        glow.roundRect(0, 0, CELL_SIZE + 8, CELL_SIZE * 1.5 + 8, 4);
        glow.fill({ color: 0x06b6d4, alpha: 0.3 });
        glow.visible = false;
        agentContainer.addChild(glow);

        sprite.x = movement.pixelX;
        sprite.y = movement.pixelY;
        agentContainer.addChild(sprite);

        runtime = {
          sprite,
          movement,
          anim,
          state,
          lastPath: "",
          selectionGlow: glow,
        };
        runtimes.set(state.agentId, runtime);
      }

      // Update state
      runtime.state = state;

      // Update animation state
      runtime.anim.setState(state.animState);

      // Update path if changed
      if (state.path) {
        const pathStr = JSON.stringify(state.path);
        if (pathStr !== runtime.lastPath) {
          runtime.lastPath = pathStr;
          runtime.movement.setPath(state.path);
        }
      } else if (state.animState !== "walking") {
        // If not walking, ensure position is correct
        if (!runtime.movement.isMoving) {
          const targetX = state.targetX;
          const targetY = state.targetY;
          if (runtime.movement.gridX !== targetX || runtime.movement.gridY !== targetY) {
            runtime.movement.teleport(targetX, targetY);
          }
        }
      }

      // Follow selected agent
      if (state.agentId === selectedId && cameraRef.current) {
        cameraRef.current.followPosition(runtime.movement.pixelX, runtime.movement.pixelY);
      }
    }

    // Stop follow if no selection
    if (!selectedId && cameraRef.current) {
      cameraRef.current.stopFollow();
    }
  }, [agentStates, selectedId]);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated" as const,
        overflow: "hidden",
      }}
    />
  );
}
