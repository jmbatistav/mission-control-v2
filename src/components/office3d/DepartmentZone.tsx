"use client";

import { Html } from "@react-three/drei";
import CubicleModel from "./CubicleModel";
import AgentFigure from "./AgentFigure";
import AgentLabel from "./AgentLabel";

interface Agent {
  _id: string;
  name: string;
  avatar: string;
  status: string;
  color: string;
  currentTask?: string;
}

const colorMap: Record<string, string> = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  amber: "#f59e0b",
  emerald: "#10b981",
  pink: "#ec4899",
  violet: "#8b5cf6",
  orange: "#f97316",
  indigo: "#6366f1",
  teal: "#14b8a6",
};

interface DepartmentZoneProps {
  name: string;
  emoji: string;
  agents: Agent[];
  basePosition: [number, number, number];
  onAgentClick?: (id: string) => void;
  hideLabels?: boolean;
  /** Set of agent IDs currently walking/in-meeting (render separately) */
  mobileAgentIds?: Set<string>;
}

export default function DepartmentZone({
  name,
  emoji,
  agents,
  basePosition,
  onAgentClick,
  hideLabels,
  mobileAgentIds,
}: DepartmentZoneProps) {
  const spacing = 3;

  return (
    <group position={basePosition}>
      {/* Department label */}
      <Html
        position={[(agents.length - 1) * spacing * 0.5, 2.5, 0]}
        center
        distanceFactor={15}
      >
        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            borderRadius: "6px",
            padding: "4px 12px",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            fontSize: "11px",
            fontWeight: 600,
            color: "#94a3b8",
            fontFamily: "system-ui, -apple-system, sans-serif",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {emoji} {name}
        </div>
      </Html>

      {/* Subtle floor color difference */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[(agents.length - 1) * spacing * 0.5, 0.005, 0]}
      >
        <planeGeometry args={[agents.length * spacing + 1, 3.5]} />
        <meshStandardMaterial
          color="#0f172a"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Cubicles + agents in a row */}
      {agents.map((agent, i) => {
        const resolvedColor = colorMap[agent.color] || "#6b7280";
        const cubiclePos: [number, number, number] = [i * spacing, 0, 0];
        const isMobile = mobileAgentIds?.has(agent._id) ?? false;

        return (
          <group key={agent._id}>
            <CubicleModel
              position={cubiclePos}
              color={resolvedColor}
              isActive={agent.status === "active" && !isMobile}
              hasAgent={!isMobile}
            />
            {/* Only render agent figure at cubicle if not currently mobile */}
            {!isMobile && (
              <>
                <AgentFigure
                  status={agent.status as "active" | "idle" | "offline"}
                  color={resolvedColor}
                  position={[cubiclePos[0], 0, cubiclePos[2] + 0.45]}
                  onClick={() => onAgentClick?.(agent._id)}
                />
                <AgentLabel
                  name={agent.name}
                  avatar={agent.avatar}
                  status={agent.status as "active" | "idle" | "offline"}
                  color={resolvedColor}
                  position={[cubiclePos[0], 0, cubiclePos[2] + 0.45]}
                  hidden={hideLabels}
                />
              </>
            )}
          </group>
        );
      })}
    </group>
  );
}
