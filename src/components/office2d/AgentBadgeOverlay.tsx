/* ─────────────────────────────────────────────
   AgentBadgeOverlay.tsx — HTML overlay for name/emoji/status
   Positioned absolutely over the PixiJS canvas.
   ─────────────────────────────────────────────*/

"use client";

import { useEffect, useRef, useState } from "react";
import { CELL_SIZE, getColorHex, hexToRGB } from "./GridSystem";
import type { AgentPhysicalState2D } from "./OfficeStateManager";

interface BadgeOverlayProps {
  agentStates: AgentPhysicalState2D[];
  canvasRef: React.RefObject<HTMLDivElement | null>;
  selectedId: string | null;
  onAgentClick: (id: string) => void;
}

interface BadgePosition {
  id: string;
  x: number;
  y: number;
  name: string;
  avatar: string;
  status: string;
  color: string;
  label?: string;
}

export default function AgentBadgeOverlay({
  agentStates,
  canvasRef,
  selectedId,
  onAgentClick,
}: BadgeOverlayProps) {
  const [badges, setBadges] = useState<BadgePosition[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let running = true;

    const updateBadges = () => {
      if (!running) return;

      const container = canvasRef.current;
      if (!container) {
        frameRef.current = requestAnimationFrame(updateBadges);
        return;
      }

      // Get the canvas element
      const canvas = container.querySelector("canvas");
      if (!canvas) {
        frameRef.current = requestAnimationFrame(updateBadges);
        return;
      }

      // Read transform from the pixi world container (via CSS or stored state)
      // We parse the PixiJS stage child's transform
      // Since we can't easily access PixiJS internals from React, we'll compute
      // approximate positions based on agent state grid coords + camera offset
      // The canvas is at (0,0) relative to canvasRef div

      const newBadges: BadgePosition[] = agentStates.map((state) => {
        // These will be updated by the Office2D tick via a shared callback
        return {
          id: state.agentId,
          x: state.targetX * CELL_SIZE,
          y: state.targetY * CELL_SIZE - CELL_SIZE,
          name: state.agentName,
          avatar: state.avatar,
          status: state.status,
          color: state.color,
          label: state.autonomousLabel,
        };
      });

      setBadges(newBadges);
      frameRef.current = requestAnimationFrame(updateBadges);
    };

    frameRef.current = requestAnimationFrame(updateBadges);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
    };
  }, [agentStates, canvasRef]);

  // We render badges as a static overlay; the PixiJS canvas handles actual positions
  // Badges are rendered as a simple list in the status area instead
  return null;
}
