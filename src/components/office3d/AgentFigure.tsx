"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AgentFigureProps {
  status: "active" | "idle" | "offline";
  color: string;
  position: [number, number, number];
  onClick?: () => void;
}

export default function AgentFigure({ status, color, position, onClick }: AgentFigureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  const isOffline = status === "offline";
  const isActive = status === "active";
  const bodyColor = isOffline ? "#374151" : "#1e293b";
  const skinColor = isOffline ? "#4b5563" : color;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (headRef.current) {
      if (isActive) {
        // Subtle head bob while working
        headRef.current.position.y = 1.55 + Math.sin(t * 2) * 0.015;
        headRef.current.rotation.y = 0;
      } else if (status === "idle") {
        // Occasional head turn
        headRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
        headRef.current.position.y = 1.55;
      } else {
        // Offline: head drooped forward
        headRef.current.rotation.x = 0.3;
        headRef.current.position.y = 1.5;
      }
    }

    // Arms animation
    if (leftArmRef.current && rightArmRef.current) {
      if (isActive) {
        // Arms at keyboard — subtle typing motion
        leftArmRef.current.rotation.x = -0.8 + Math.sin(t * 6) * 0.05;
        rightArmRef.current.rotation.x = -0.8 + Math.sin(t * 6 + 1) * 0.05;
        leftArmRef.current.position.set(-0.25, 1.1, -0.05);
        rightArmRef.current.position.set(0.25, 1.1, -0.05);
      } else if (status === "idle") {
        // Arms at sides
        leftArmRef.current.rotation.x = 0;
        rightArmRef.current.rotation.x = 0;
        leftArmRef.current.position.set(-0.25, 1.1, 0);
        rightArmRef.current.position.set(0.25, 1.1, 0);
      } else {
        // Offline: arms hanging
        leftArmRef.current.rotation.x = 0.2;
        rightArmRef.current.rotation.x = 0.2;
        leftArmRef.current.position.set(-0.25, 1.05, 0.05);
        rightArmRef.current.position.set(0.25, 1.05, 0.05);
      }
    }

    // Offline: whole body leaning back
    if (groupRef.current) {
      groupRef.current.rotation.x = isOffline ? -0.1 : 0;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.55, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={skinColor}
          emissive={isActive ? color : "#000000"}
          emissiveIntensity={isActive ? 0.15 : 0}
          roughness={0.6}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.3, 0.45, 0.18]} />
        <meshStandardMaterial color={bodyColor} roughness={0.8} />
      </mesh>

      {/* Left arm */}
      <mesh ref={leftArmRef} position={[-0.25, 1.1, 0]} castShadow>
        <boxGeometry args={[0.08, 0.35, 0.08]} />
        <meshStandardMaterial color={bodyColor} roughness={0.8} />
      </mesh>

      {/* Right arm */}
      <mesh ref={rightArmRef} position={[0.25, 1.1, 0]} castShadow>
        <boxGeometry args={[0.08, 0.35, 0.08]} />
        <meshStandardMaterial color={bodyColor} roughness={0.8} />
      </mesh>

      {/* Legs (static, hidden behind desk usually) */}
      <mesh position={[-0.1, 0.7, 0]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0.1, 0.7, 0]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Invisible click area (larger hitbox) */}
      <mesh position={[0, 1.1, 0]} visible={false}>
        <boxGeometry args={[0.8, 1.4, 0.6]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}
