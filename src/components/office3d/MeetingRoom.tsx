"use client";

import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MeetingRoomProps {
  position: [number, number, number];
  /** Active meeting title (if any) */
  activeMeetingTitle?: string;
  /** Whether a meeting is in progress */
  isActive?: boolean;
}

export default function MeetingRoom({ position, activeMeetingTitle, isActive }: MeetingRoomProps) {
  const glowRef = useRef<THREE.Mesh>(null);

  const chairPositions: [number, number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    chairPositions.push([
      Math.cos(angle) * 1.8,
      0,
      Math.sin(angle) * 1.8,
    ]);
  }

  // Subtle pulsing glow when meeting is active
  useFrame(({ clock }) => {
    if (glowRef.current && isActive) {
      const t = clock.getElapsedTime();
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.15 + Math.sin(t * 2) * 0.05;
      mat.opacity = 0.12 + Math.sin(t * 2) * 0.03;
    }
  });

  return (
    <group position={position}>
      {/* Glass walls */}
      {/* Back wall */}
      <mesh position={[0, 1.0, -2.5]} castShadow>
        <boxGeometry args={[5, 2.0, 0.06]} />
        <meshStandardMaterial
          color={isActive ? "#1e4a6f" : "#1e3a5f"}
          transparent
          opacity={isActive ? 0.25 : 0.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      {/* Side wall */}
      <mesh position={[2.5, 1.0, 0]} castShadow>
        <boxGeometry args={[0.06, 2.0, 5]} />
        <meshStandardMaterial
          color={isActive ? "#1e4a6f" : "#1e3a5f"}
          transparent
          opacity={isActive ? 0.25 : 0.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Conference table */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.08, 32]} />
        <meshStandardMaterial color="#292524" roughness={0.5} metalness={0.3} />
      </mesh>
      {/* Table leg */}
      <mesh position={[0, 0.375, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.75, 16]} />
        <meshStandardMaterial color="#1c1917" metalness={0.6} />
      </mesh>

      {/* Chairs around table */}
      {chairPositions.map((pos, i) => {
        const angle = Math.atan2(pos[2], pos[0]) + Math.PI;
        return (
          <group key={i} position={pos} rotation={[0, angle, 0]}>
            {/* Seat */}
            <mesh position={[0, 0.45, 0]} castShadow>
              <boxGeometry args={[0.4, 0.05, 0.4]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
            {/* Back */}
            <mesh position={[0, 0.7, -0.18]} castShadow>
              <boxGeometry args={[0.38, 0.45, 0.04]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
            {/* Leg */}
            <mesh position={[0, 0.22, 0]}>
              <cylinderGeometry args={[0.03, 0.03, 0.44, 8]} />
              <meshStandardMaterial color="#292524" />
            </mesh>
          </group>
        );
      })}

      {/* Floor glow when active */}
      {isActive && (
        <mesh
          ref={glowRef}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, 0]}
        >
          <circleGeometry args={[3, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.15}
            transparent
            opacity={0.12}
          />
        </mesh>
      )}

      {/* Sign — shows meeting title when active */}
      <Html position={[0, 2.3, -2.4]} center distanceFactor={15}>
        <div
          style={{
            background: isActive
              ? "rgba(30, 58, 138, 0.9)"
              : "rgba(15, 23, 42, 0.85)",
            borderRadius: "6px",
            padding: "4px 12px",
            border: isActive
              ? "1px solid rgba(59, 130, 246, 0.5)"
              : "1px solid rgba(51, 65, 85, 0.5)",
            fontSize: "11px",
            fontWeight: 600,
            color: isActive ? "#93c5fd" : "#94a3b8",
            fontFamily: "system-ui, -apple-system, sans-serif",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          {isActive && activeMeetingTitle
            ? `🔴 ${activeMeetingTitle}`
            : "🏛️ Meeting Room"}
        </div>
      </Html>
    </group>
  );
}
