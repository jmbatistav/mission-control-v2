"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface BreakAreaProps {
  position: [number, number, number];
  hideLabels?: boolean;
  /** Whether any agent is currently at the break area */
  hasVisitor?: boolean;
}

/** Animated steam particles above the coffee machine */
function CoffeeSteam({ active }: { active: boolean }) {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!active) return;
    const t = clock.getElapsedTime();
    const refs = [ref1, ref2, ref3];
    refs.forEach((ref, i) => {
      if (!ref.current) return;
      const offset = i * 0.8;
      const cycle = ((t * 0.6 + offset) % 2) / 2; // 0-1 over 2 seconds
      ref.current.position.y = 1.4 + cycle * 0.5;
      ref.current.position.x = Math.sin(t * 0.8 + i) * 0.04;
      // Scale from 0.02 → 0.06 as it rises, then fade
      const scale = 0.02 + cycle * 0.04;
      ref.current.scale.setScalar(scale / 0.03);
      // Fade opacity
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.opacity = (1 - cycle) * 0.5;
    });
  });

  if (!active) return null;

  return (
    <group position={[0, 0, -1.2]}>
      {[ref1, ref2, ref3].map((ref, i) => (
        <mesh key={i} ref={ref} position={[0, 1.4 + i * 0.15, 0]}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshStandardMaterial
            color="#94a3b8"
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BreakArea({ position, hideLabels, hasVisitor }: BreakAreaProps) {
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
        {/* Indicator light — green when visitor, red otherwise */}
        <mesh position={[0.15, 0.9, 0.21]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial
            color={hasVisitor ? "#22c55e" : "#ef4444"}
            emissive={hasVisitor ? "#22c55e" : "#ef4444"}
            emissiveIntensity={hasVisitor ? 1.2 : 0.8}
          />
        </mesh>
      </group>

      {/* Steam animation when someone is at the break area */}
      <CoffeeSteam active={!!hasVisitor} />

      {/* Sign */}
      {hideLabels ? null : (
        <Html
          position={[0, 1.8, -1.2]}
          center
          distanceFactor={15}
          zIndexRange={[0, 0]}
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
            ☕ Break Area
          </div>
        </Html>
      )}
    </group>
  );
}
