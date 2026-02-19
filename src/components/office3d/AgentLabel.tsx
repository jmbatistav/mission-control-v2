"use client";

import { Html } from "@react-three/drei";

interface AgentLabelProps {
  name: string;
  avatar: string;
  status: "active" | "idle" | "offline";
  color: string;
  position: [number, number, number];
  hidden?: boolean;
}

const statusColors: Record<string, string> = {
  active: "#10b981",
  idle: "#f59e0b",
  offline: "#6b7280",
};

export default function AgentLabel({ name, avatar, status, color, position, hidden }: AgentLabelProps) {
  if (hidden) return null;
  return (
    <Html
      position={[position[0], position[1] + 2.0, position[2]]}
      center
      distanceFactor={12}
      style={{ pointerEvents: "none" }}
      zIndexRange={[0, 0]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
          userSelect: "none",
        }}
      >
        {/* Emoji badge */}
        <div
          style={{
            fontSize: "20px",
            lineHeight: 1,
            filter: status === "offline" ? "grayscale(0.6)" : "none",
          }}
        >
          {avatar}
        </div>

        {/* Name + status */}
        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            borderRadius: "6px",
            padding: "3px 8px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: `1px solid ${status === "active" ? color : "rgba(51, 65, 85, 0.5)"}`,
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: statusColors[status],
              boxShadow: status === "active" ? `0 0 6px ${statusColors[status]}` : "none",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: status === "offline" ? "#6b7280" : "#e2e8f0",
              fontFamily: "system-ui, -apple-system, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        </div>
      </div>
    </Html>
  );
}
