"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Animation state type
   ─────────────────────────────────────────────*/
export type AgentAnimState =
  | "working"
  | "idle"
  | "offline"
  | "walking"
  | "sitting_down"
  | "standing_up"
  | "in_meeting";

interface AgentFigureProps {
  /** Legacy compat: maps to animState internally */
  status?: "active" | "idle" | "offline";
  /** New: explicit animation state (overrides status if provided) */
  animState?: AgentAnimState;
  color: string;
  position: [number, number, number];
  /** Y-rotation override (used when moving) */
  rotationY?: number;
  /** Direction of meeting center for head-turn (world space angle) */
  meetingCenterAngle?: number;
  onClick?: () => void;
}

/* ─────────────────────────────────────────────
   Pose target types (for smooth blending)
   ─────────────────────────────────────────────*/
interface PartPose {
  px: number; py: number; pz: number;
  rx: number; ry: number; rz: number;
}

function lerpPose(current: PartPose, target: PartPose, alpha: number): PartPose {
  return {
    px: THREE.MathUtils.lerp(current.px, target.px, alpha),
    py: THREE.MathUtils.lerp(current.py, target.py, alpha),
    pz: THREE.MathUtils.lerp(current.pz, target.pz, alpha),
    rx: THREE.MathUtils.lerp(current.rx, target.rx, alpha),
    ry: THREE.MathUtils.lerp(current.ry, target.ry, alpha),
    rz: THREE.MathUtils.lerp(current.rz, target.rz, alpha),
  };
}

function applyPose(mesh: THREE.Mesh | THREE.Group, pose: PartPose) {
  mesh.position.set(pose.px, pose.py, pose.pz);
  mesh.rotation.set(pose.rx, pose.ry, pose.rz);
}

const BLEND_SPEED = 8; // higher = faster transition

/* ─────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────*/
export default function AgentFigure({
  status,
  animState: animStateProp,
  color,
  position,
  rotationY,
  meetingCenterAngle,
  onClick,
}: AgentFigureProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);

  // Smooth-blended poses for each body part
  const headPose = useRef<PartPose>({ px: 0, py: 1.55, pz: 0, rx: 0, ry: 0, rz: 0 });
  const bodyPose = useRef<PartPose>({ px: 0, py: 1.2, pz: 0, rx: 0, ry: 0, rz: 0 });
  const lArmPose = useRef<PartPose>({ px: -0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 });
  const rArmPose = useRef<PartPose>({ px: 0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 });
  const lLegPose = useRef<PartPose>({ px: -0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 });
  const rLegPose = useRef<PartPose>({ px: 0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 });

  // Transition timer for sit/stand
  const transitionTimer = useRef(0);
  const prevAnimState = useRef<AgentAnimState>("idle");

  // Resolve animState from either prop or legacy status
  const resolvedState: AgentAnimState = animStateProp ?? (
    status === "active" ? "working" :
    status === "offline" ? "offline" : "idle"
  );

  const isOffline = resolvedState === "offline";
  const isActive = resolvedState === "working";
  const bodyColor = isOffline ? "#374151" : "#1e293b";
  const skinColor = isOffline ? "#4b5563" : color;

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    const blend = Math.min(1, BLEND_SPEED * delta);

    // Track transitions for sit/stand
    if (resolvedState !== prevAnimState.current) {
      if (resolvedState === "sitting_down" || resolvedState === "standing_up") {
        transitionTimer.current = 0;
      }
      prevAnimState.current = resolvedState;
    }
    if (resolvedState === "sitting_down" || resolvedState === "standing_up") {
      transitionTimer.current += delta;
    }

    /* ── Compute target poses per state ── */
    let targetHead: PartPose;
    let targetBody: PartPose;
    let targetLArm: PartPose;
    let targetRArm: PartPose;
    let targetLLeg: PartPose;
    let targetRLeg: PartPose;

    switch (resolvedState) {
      case "working": {
        // Seated at desk, typing
        const headBob = Math.sin(t * 2) * 0.015;
        const typeL = Math.sin(t * 6) * 0.05;
        const typeR = Math.sin(t * 6 + 1) * 0.05;
        targetHead = { px: 0, py: 1.55 + headBob, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.1, pz: -0.05, rx: -0.8 + typeL, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1, pz: -0.05, rx: -0.8 + typeR, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        break;
      }

      case "idle": {
        const headTurn = Math.sin(t * 0.5) * 0.3;
        targetHead = { px: 0, py: 1.55, pz: 0, rx: 0, ry: headTurn, rz: 0 };
        targetBody = { px: 0, py: 1.2, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        break;
      }

      case "offline": {
        targetHead = { px: 0, py: 1.5, pz: 0, rx: 0.3, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2, pz: 0, rx: -0.1, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.05, pz: 0.05, rx: 0.2, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.05, pz: 0.05, rx: 0.2, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        break;
      }

      case "walking": {
        // Walking cycle
        const walkFreq = 6;
        const legSwing = Math.sin(t * walkFreq) * 0.5;
        const armSwing = Math.sin(t * walkFreq) * 0.35;
        const bodyBob = Math.abs(Math.sin(t * walkFreq)) * 0.04;

        targetHead = { px: 0, py: 1.55 + bodyBob, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2 + bodyBob, pz: 0, rx: 0, ry: 0, rz: 0 };
        // Arms swing opposite to legs
        targetLArm = { px: -0.25, py: 1.1 + bodyBob, pz: 0, rx: armSwing, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1 + bodyBob, pz: 0, rx: -armSwing, ry: 0, rz: 0 };
        // Legs alternate
        targetLLeg = { px: -0.1, py: 0.7, pz: 0, rx: legSwing, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7, pz: 0, rx: -legSwing, ry: 0, rz: 0 };
        break;
      }

      case "sitting_down": {
        // 0.5s transition: body lowers, legs bend
        const progress = Math.min(transitionTimer.current / 0.5, 1);
        const ease = progress * (2 - progress); // ease-out
        const lower = ease * 0.35;
        const legBend = ease * 1.2;

        targetHead = { px: 0, py: 1.55 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.1 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7 - lower * 0.5, pz: 0, rx: -legBend, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7 - lower * 0.5, pz: 0, rx: -legBend, ry: 0, rz: 0 };
        break;
      }

      case "standing_up": {
        const progress = Math.min(transitionTimer.current / 0.5, 1);
        const ease = progress * (2 - progress);
        const lower = (1 - ease) * 0.35;
        const legBend = (1 - ease) * 1.2;

        targetHead = { px: 0, py: 1.55 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.1 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1 - lower, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7 - lower * 0.5, pz: 0, rx: -legBend, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7 - lower * 0.5, pz: 0, rx: -legBend, ry: 0, rz: 0 };
        break;
      }

      case "in_meeting": {
        // Seated (lowered), occasional head turn toward meeting center
        const headTurn = meetingCenterAngle != null
          ? Math.sin(t * 0.3) * 0.15 + meetingCenterAngle * 0.2
          : Math.sin(t * 0.4) * 0.25;

        targetHead = { px: 0, py: 1.55 - 0.35, pz: 0, rx: 0, ry: headTurn, rz: 0 };
        targetBody = { px: 0, py: 1.2 - 0.35, pz: 0, rx: 0, ry: 0, rz: 0 };
        // Hands on table (arms extended slightly forward)
        targetLArm = { px: -0.25, py: 1.1 - 0.35, pz: -0.12, rx: -0.6, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1 - 0.35, pz: -0.12, rx: -0.6, ry: 0, rz: 0 };
        // Legs bent (seated)
        targetLLeg = { px: -0.1, py: 0.7 - 0.18, pz: 0, rx: -1.2, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7 - 0.18, pz: 0, rx: -1.2, ry: 0, rz: 0 };
        break;
      }

      default: {
        // fallback = idle
        targetHead = { px: 0, py: 1.55, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetBody = { px: 0, py: 1.2, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLArm = { px: -0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRArm = { px: 0.25, py: 1.1, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetLLeg = { px: -0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
        targetRLeg = { px: 0.1, py: 0.7, pz: 0, rx: 0, ry: 0, rz: 0 };
      }
    }

    // Blend toward targets
    headPose.current = lerpPose(headPose.current, targetHead, blend);
    bodyPose.current = lerpPose(bodyPose.current, targetBody, blend);
    lArmPose.current = lerpPose(lArmPose.current, targetLArm, blend);
    rArmPose.current = lerpPose(rArmPose.current, targetRArm, blend);
    lLegPose.current = lerpPose(lLegPose.current, targetLLeg, blend);
    rLegPose.current = lerpPose(rLegPose.current, targetRLeg, blend);

    // Apply
    if (headRef.current) applyPose(headRef.current, headPose.current);
    if (bodyRef.current) applyPose(bodyRef.current, bodyPose.current);
    if (leftArmRef.current) applyPose(leftArmRef.current, lArmPose.current);
    if (rightArmRef.current) applyPose(rightArmRef.current, rArmPose.current);
    if (leftLegRef.current) applyPose(leftLegRef.current, lLegPose.current);
    if (rightLegRef.current) applyPose(rightLegRef.current, rLegPose.current);

    // Group-level rotation (facing direction when walking)
    if (groupRef.current && resolvedState === "offline") {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -0.1, blend);
    } else if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, blend);
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={[0, rotationY ?? 0, 0]}
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
      <mesh ref={bodyRef} position={[0, 1.2, 0]} castShadow>
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

      {/* Left leg */}
      <mesh ref={leftLegRef} position={[-0.1, 0.7, 0]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* Right leg */}
      <mesh ref={rightLegRef} position={[0.1, 0.7, 0]} castShadow>
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
