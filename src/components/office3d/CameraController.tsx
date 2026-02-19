"use client";

import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export interface CameraControllerHandle {
  focusOnAgent: (position: [number, number, number]) => void;
  resetCamera: () => void;
}

const DEFAULT_POSITION = new THREE.Vector3(15, 12, 15);
const DEFAULT_TARGET = new THREE.Vector3(4, 0, 0);

const CameraController = forwardRef<CameraControllerHandle>(function CameraController(_, ref) {
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const targetPosition = useRef<THREE.Vector3 | null>(null);
  const targetLookAt = useRef<THREE.Vector3 | null>(null);
  const isAnimating = useRef(false);

  useImperativeHandle(ref, () => ({
    focusOnAgent: (position: [number, number, number]) => {
      const agentPos = new THREE.Vector3(...position);
      // Camera position: offset from agent for nice viewing angle
      targetPosition.current = new THREE.Vector3(
        agentPos.x + 3,
        agentPos.y + 3,
        agentPos.z + 4
      );
      targetLookAt.current = agentPos.clone().add(new THREE.Vector3(0, 1, 0));
      isAnimating.current = true;
    },
    resetCamera: () => {
      targetPosition.current = DEFAULT_POSITION.clone();
      targetLookAt.current = DEFAULT_TARGET.clone();
      isAnimating.current = true;
    },
  }));

  useFrame(() => {
    if (!isAnimating.current || !targetPosition.current || !targetLookAt.current) return;
    if (!controlsRef.current) return;

    const speed = 0.05;

    // Lerp camera position
    camera.position.lerp(targetPosition.current, speed);

    // Lerp orbit controls target
    const controls = controlsRef.current;
    controls.target.lerp(targetLookAt.current, speed);
    controls.update();

    // Stop animating when close enough
    if (
      camera.position.distanceTo(targetPosition.current) < 0.05 &&
      controls.target.distanceTo(targetLookAt.current) < 0.05
    ) {
      isAnimating.current = false;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      maxPolarAngle={Math.PI / 2 - 0.05}
      minPolarAngle={0.2}
      minDistance={3}
      maxDistance={35}
      target={[4, 0, 0]}
    />
  );
});

export default CameraController;
