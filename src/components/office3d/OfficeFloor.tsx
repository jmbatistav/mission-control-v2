"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function OfficeFloor() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Main floor */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#111827" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Grid helper for subtle lines */}
      <gridHelper
        args={[40, 40, "#1e293b", "#1e293b"]}
        position={[0, 0, 0]}
      />

      {/* Subtle secondary grid */}
      <gridHelper
        args={[40, 80, "#0f172a", "#0f172a"]}
        position={[0, 0.001, 0]}
      />
    </group>
  );
}
