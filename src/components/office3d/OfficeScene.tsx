"use client";

import { useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import OfficeFloor from "./OfficeFloor";
import MeetingRoom from "./MeetingRoom";
import BreakArea from "./BreakArea";
import ManagerArea from "./ManagerArea";
import DepartmentZone from "./DepartmentZone";
import CameraController, { CameraControllerHandle } from "./CameraController";

interface Agent {
  _id: string;
  name: string;
  role: string;
  function: string;
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

// Layout positions for departments (top-down)
const departmentLayout: Record<string, { position: [number, number, number]; emoji: string; label: string }> = {
  engineering: { position: [-1, 0, 0], emoji: "⚡", label: "Engineering Bay" },
  design:      { position: [-1, 0, 5], emoji: "🎨", label: "Design Studio" },
  product:     { position: [2, 0, 5], emoji: "📋", label: "Product Lab" },
  operations:  { position: [-1, 0, 10], emoji: "🛠️", label: "Ops Center" },
};

interface OfficeSceneProps {
  agents: Agent[];
  onAgentClick: (id: string) => void;
  selectedId?: string | null;
}

export default function OfficeScene({ agents, onAgentClick, selectedId }: OfficeSceneProps) {
  const cameraRef = useRef<CameraControllerHandle>(null);

  // Group agents by function
  const grouped: Record<string, Agent[]> = {};
  for (const agent of agents) {
    const fn = agent.function;
    if (!grouped[fn]) grouped[fn] = [];
    grouped[fn].push(agent);
  }

  const leadershipAgents = grouped["leadership"] || [];
  const leader = leadershipAgents[0];

  const handleAgentClick = useCallback(
    (id: string) => {
      const agent = agents.find((a) => a._id === id);
      if (agent) {
        // Find agent's position based on department layout
        const fn = agent.function;
        if (fn === "leadership") {
          cameraRef.current?.focusOnAgent([-6, 0, -4]);
        } else {
          const dept = departmentLayout[fn];
          if (dept) {
            const deptAgents = grouped[fn] || [];
            const index = deptAgents.findIndex((a) => a._id === id);
            const pos: [number, number, number] = [
              dept.position[0] + index * 3,
              0,
              dept.position[2],
            ];
            cameraRef.current?.focusOnAgent(pos);
          }
        }
      }
      onAgentClick(id);
    },
    [agents, grouped, onAgentClick]
  );

  return (
    <Canvas
      camera={{ position: [15, 12, 15], fov: 50 }}
      shadows
      style={{ background: "#030712" }}
      gl={{ antialias: true, alpha: false }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#94a3b8" />
      <directionalLight
        position={[10, 15, 10]}
        intensity={0.8}
        color="#e2e8f0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      {/* Subtle fill light from opposite side */}
      <directionalLight
        position={[-8, 8, -8]}
        intensity={0.15}
        color="#3b82f6"
      />

      {/* Environment for mood */}
      <Environment preset="night" />

      {/* Camera controls */}
      <CameraController ref={cameraRef} />

      {/* Floor */}
      <OfficeFloor />

      {/* Manager area - top left */}
      <ManagerArea
        position={[-6, 0, -4]}
        agent={leader}
        resolvedColor={leader ? (colorMap[leader.color] || "#6b7280") : "#6b7280"}
        onAgentClick={handleAgentClick}
        hideLabels={!!selectedId}
      />

      {/* Meeting room - top right */}
      <MeetingRoom position={[8, 0, -4]} />

      {/* Department zones */}
      {Object.entries(departmentLayout).map(([fn, config]) => {
        const deptAgents = grouped[fn] || [];
        if (deptAgents.length === 0) return null;
        return (
          <DepartmentZone
            key={fn}
            name={config.label}
            emoji={config.emoji}
            agents={deptAgents}
            basePosition={config.position}
            onAgentClick={handleAgentClick}
            hideLabels={!!selectedId}
          />
        );
      })}

      {/* Break area - bottom right */}
      <BreakArea position={[8, 0, 10]} />

      {/* Fog for depth */}
      <fog attach="fog" args={["#030712", 20, 45]} />
    </Canvas>
  );
}
