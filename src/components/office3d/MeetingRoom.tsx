"use client";

import { Html } from "@react-three/drei";

interface MeetingRoomProps {
  position: [number, number, number];
}

export default function MeetingRoom({ position }: MeetingRoomProps) {
  const chairPositions: [number, number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    chairPositions.push([
      Math.cos(angle) * 1.8,
      0,
      Math.sin(angle) * 1.8,
    ]);
  }

  return (
    <group position={position}>
      {/* Glass walls */}
      {/* Back wall */}
      <mesh position={[0, 1.0, -2.5]} castShadow>
        <boxGeometry args={[5, 2.0, 0.06]} />
        <meshStandardMaterial
          color="#1e3a5f"
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      {/* Side wall */}
      <mesh position={[2.5, 1.0, 0]} castShadow>
        <boxGeometry args={[0.06, 2.0, 5]} />
        <meshStandardMaterial
          color="#1e3a5f"
          transparent
          opacity={0.2}
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

      {/* Sign */}
      <Html position={[0, 2.3, -2.4]} center distanceFactor={15}>
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
          🏛️ Meeting Room
        </div>
      </Html>
    </group>
  );
}
