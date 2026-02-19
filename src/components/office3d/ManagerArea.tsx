"use client";

import CubicleModel from "./CubicleModel";
import AgentFigure from "./AgentFigure";
import AgentLabel from "./AgentLabel";
import { Html } from "@react-three/drei";

interface Agent {
  _id: string;
  name: string;
  avatar: string;
  status: string;
  color: string;
  currentTask?: string;
}

interface ManagerAreaProps {
  position: [number, number, number];
  agent?: Agent;
  resolvedColor: string;
  onAgentClick?: (id: string) => void;
  hideLabels?: boolean;
  /** Whether agent figure should be hidden (currently walking/in meeting) */
  hideFigure?: boolean;
}

export default function ManagerArea({ position, agent, resolvedColor, onAgentClick, hideLabels, hideFigure }: ManagerAreaProps) {
  return (
    <group position={position}>
      {/* Label */}
      <Html position={[0, 2.5, 0]} center distanceFactor={15}>
        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            borderRadius: "6px",
            padding: "4px 12px",
            border: "1px solid rgba(234, 179, 8, 0.3)",
            fontSize: "11px",
            fontWeight: 600,
            color: "#eab308",
            fontFamily: "system-ui, -apple-system, sans-serif",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          👑 Leadership
        </div>
      </Html>

      <CubicleModel
        position={[0, 0, 0]}
        color={resolvedColor}
        isActive={agent?.status === "active" && !hideFigure}
        hasAgent={!!agent && !hideFigure}
        isManager
      />

      {agent && !hideFigure && (
        <>
          <AgentFigure
            status={agent.status as "active" | "idle" | "offline"}
            color={resolvedColor}
            position={[0, 0, 0.45]}
            onClick={() => onAgentClick?.(agent._id)}
          />
          <AgentLabel
            name={agent.name}
            avatar={agent.avatar}
            status={agent.status as "active" | "idle" | "offline"}
            color={resolvedColor}
            position={[0, 0, 0.45]}
            hidden={hideLabels}
          />
        </>
      )}
    </group>
  );
}
