"use client";

import { Html } from "@react-three/drei";
import type { AgentPhysicalState } from "./AgentStateManager";

/* ─────────────────────────────────────────────
   Chat Bubble Indicator
   Shown when two agents are near each other (visiting)
   ─────────────────────────────────────────────*/

interface ChatBubbleProps {
  position: [number, number, number];
  hidden?: boolean;
}

function ChatBubble({ position, hidden }: ChatBubbleProps) {
  if (hidden) return null;
  return (
    <Html
      position={position}
      center
      distanceFactor={12}
      style={{ pointerEvents: "none" }}
      zIndexRange={[0, 0]}
    >
      <div
        style={{
          fontSize: "16px",
          animation: "float 2s ease-in-out infinite",
          userSelect: "none",
        }}
      >
        💬
      </div>
    </Html>
  );
}

/* ─────────────────────────────────────────────
   Autonomous Behavior Indicators
   Renders visual indicators for autonomous actions:
   - Chat bubbles between visiting agents
   - Break labels at break area
   ─────────────────────────────────────────────*/

interface AutonomousIndicatorsProps {
  agentStates: AgentPhysicalState[];
  hideLabels?: boolean;
}

export function AutonomousIndicators({
  agentStates,
  hideLabels,
}: AutonomousIndicatorsProps) {
  // Find visiting pairs: agents who have a visitingAgentId and are in "visiting" state
  const visitingAgents = agentStates.filter(
    (s) => s.visitingAgentId && s.autonomousLabel === "chatting"
  );

  // Find agents at break
  const breakAgents = agentStates.filter(
    (s) => s.autonomousLabel?.startsWith("☕")
  );

  return (
    <group>
      {/* Chat bubbles for visiting agents */}
      {visitingAgents.map((visitor) => {
        const target = agentStates.find((s) => s.agentId === visitor.visitingAgentId);
        if (!target) return null;

        // Position the bubble between the visitor and the target
        const midX = (visitor.homePosition.x + target.homePosition.x) / 2;
        const midZ = (visitor.homePosition.z + target.homePosition.z) / 2;

        return (
          <ChatBubble
            key={`chat-${visitor.agentId}`}
            position={[midX, 2.5, midZ]}
            hidden={hideLabels}
          />
        );
      })}

      {/* Break area labels */}
      {breakAgents.map((agent) => (
        <Html
          key={`break-${agent.agentId}`}
          position={[8, 2.2, 10.5]}
          center
          distanceFactor={12}
          style={{ pointerEvents: "none" }}
          zIndexRange={[0, 0]}
        >
          {!hideLabels && (
            <div
              style={{
                background: "rgba(15, 23, 42, 0.85)",
                borderRadius: "6px",
                padding: "3px 10px",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                fontSize: "11px",
                fontWeight: 600,
                color: "#fbbf24",
                fontFamily: "system-ui, -apple-system, sans-serif",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {agent.autonomousLabel}
            </div>
          )}
        </Html>
      ))}
    </group>
  );
}
