"use client";

import { Html } from "@react-three/drei";

interface BreakAreaProps {
  position: [number, number, number];
}

export default function BreakArea({ position }: BreakAreaProps) {
  return (
    <group position={position}>
      {/* Small coffee table */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 16]} />
        <meshStandardMaterial color="#44403c" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.4, 8]} />
        <meshStandardMaterial color="#292524" />
      </mesh>

      {/* Lounge chair 1 */}
      <group position={[-0.9, 0, 0.3]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.6, 0.12, 0.6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.5, -0.25]} castShadow>
          <boxGeometry args={[0.58, 0.35, 0.08]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        {/* Armrests */}
        <mesh position={[-0.28, 0.42, 0]} castShadow>
          <boxGeometry args={[0.06, 0.15, 0.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0.28, 0.42, 0]} castShadow>
          <boxGeometry args={[0.06, 0.15, 0.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </group>

      {/* Lounge chair 2 */}
      <group position={[0.9, 0, 0.3]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[0.6, 0.12, 0.6]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.5, -0.25]} castShadow>
          <boxGeometry args={[0.58, 0.35, 0.08]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        <mesh position={[-0.28, 0.42, 0]} castShadow>
          <boxGeometry args={[0.06, 0.15, 0.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0.28, 0.42, 0]} castShadow>
          <boxGeometry args={[0.06, 0.15, 0.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </group>

      {/* Coffee machine */}
      <group position={[0, 0, -1.2]}>
        {/* Base unit */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.5, 1.0, 0.4]} />
          <meshStandardMaterial color="#1c1917" roughness={0.5} metalness={0.4} />
        </mesh>
        {/* Top unit */}
        <mesh position={[0, 1.15, 0]} castShadow>
          <boxGeometry args={[0.45, 0.3, 0.35]} />
          <meshStandardMaterial color="#292524" roughness={0.4} metalness={0.5} />
        </mesh>
        {/* Red indicator light */}
        <mesh position={[0.15, 0.9, 0.21]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#ef4444"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Sign */}
      <Html position={[0, 1.8, -1.2]} center distanceFactor={15}>
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
          ☕ Break Area
        </div>
      </Html>
    </group>
  );
}
