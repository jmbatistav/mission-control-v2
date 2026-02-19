"use client";

import * as THREE from "three";

interface CubicleModelProps {
  position: [number, number, number];
  color: string;
  isActive: boolean;
  hasAgent: boolean;
  isManager?: boolean;
}

export default function CubicleModel({
  position,
  color,
  isActive,
  hasAgent,
  isManager = false,
}: CubicleModelProps) {
  const scale = isManager ? 1.4 : 1;
  const wallHeight = isManager ? 1.4 : 1.0;

  return (
    <group position={position} scale={[scale, scale, scale]}>
      {/* Cubicle walls — L-shape partition */}
      {/* Back wall */}
      <mesh position={[0, wallHeight / 2, -0.5]} castShadow receiveShadow>
        <boxGeometry args={[2, wallHeight, 0.06]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
      {/* Side wall */}
      <mesh position={[-1, wallHeight / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, wallHeight, 1]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>

      {/* Desk surface */}
      <mesh position={[0, 0.75, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.06, 0.8]} />
        <meshStandardMaterial color="#44403c" roughness={0.7} />
      </mesh>
      {/* Desk legs */}
      {[
        [-0.7, 0.375, -0.45],
        [0.7, 0.375, -0.45],
        [-0.7, 0.375, 0.15],
        [0.7, 0.375, 0.15],
      ].map((pos, i) => (
        <mesh key={`leg-${i}`} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.05, 0.75, 0.05]} />
          <meshStandardMaterial color="#292524" />
        </mesh>
      ))}

      {/* Monitor stand */}
      <mesh position={[0, 0.85, -0.3]} castShadow>
        <boxGeometry args={[0.05, 0.14, 0.05]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      {/* Monitor base */}
      <mesh position={[0, 0.78, -0.3]} castShadow>
        <boxGeometry args={[0.2, 0.02, 0.12]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
      {/* Monitor screen */}
      <mesh position={[0, 1.02, -0.35]} castShadow>
        <boxGeometry args={[0.7, 0.42, 0.03]} />
        <meshStandardMaterial
          color={isActive ? "#0a0a0a" : "#171717"}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      {/* Monitor screen glow face */}
      <mesh position={[0, 1.02, -0.33]}>
        <planeGeometry args={[0.62, 0.36]} />
        <meshStandardMaterial
          color={isActive ? color : "#1a1a2e"}
          emissive={isActive ? color : "#000000"}
          emissiveIntensity={isActive ? 0.6 : 0}
          roughness={0.2}
        />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.79, 0.05]}>
        <boxGeometry args={[0.4, 0.02, 0.15]} />
        <meshStandardMaterial color="#1c1917" roughness={0.6} />
      </mesh>

      {/* Chair seat */}
      <mesh position={[0, 0.45, 0.45]} castShadow>
        <boxGeometry args={[0.45, 0.06, 0.45]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      {/* Chair back */}
      <mesh position={[0, 0.72, 0.65]} castShadow>
        <boxGeometry args={[0.42, 0.5, 0.05]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>
      {/* Chair stem */}
      <mesh position={[0, 0.22, 0.45]}>
        <boxGeometry args={[0.06, 0.44, 0.06]} />
        <meshStandardMaterial color="#292524" />
      </mesh>

      {/* Subtle glow on floor if active */}
      {isActive && hasAgent && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <planeGeometry args={[2.2, 1.6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.15}
            transparent
            opacity={0.1}
          />
        </mesh>
      )}
    </group>
  );
}
