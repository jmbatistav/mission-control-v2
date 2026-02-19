"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import type { Id } from "../../../convex/_generated/dataModel";

type Status = "active" | "idle" | "offline";

const statusInfo: Record<Status, { label: string; color: string }> = {
  active: { label: "Working", color: "#10b981" },
  idle: { label: "Idle", color: "#f59e0b" },
  offline: { label: "Offline", color: "#6b7280" },
};

/* ─── Isometric Cubicle ─── */
function Cubicle({
  member,
  position,
  onClick,
}: {
  member: any;
  position: { x: number; y: number };
  onClick: () => void;
}) {
  const isWorking = member.status === "active";
  const isIdle = member.status === "idle";
  const isOffline = member.status === "offline";

  // Typing animation state
  const [typingFrame, setTypingFrame] = useState(0);
  const [headBob, setHeadBob] = useState(0);
  const [screenLine, setScreenLine] = useState(0);

  useEffect(() => {
    if (!isWorking) return;
    const typing = setInterval(() => {
      setTypingFrame((f) => (f + 1) % 4);
      setHeadBob((h) => (h + 1) % 6);
      setScreenLine((s) => (s + 1) % 8);
    }, 400);
    return () => clearInterval(typing);
  }, [isWorking]);

  useEffect(() => {
    if (!isIdle) return;
    const idle = setInterval(() => {
      setHeadBob((h) => (h + 1) % 10);
    }, 2000);
    return () => clearInterval(idle);
  }, [isIdle]);

  const colorAccent = member.color === "cyan" ? "#06b6d4" : member.color === "blue" ? "#3b82f6" : member.color === "amber" ? "#f59e0b" : member.color === "emerald" ? "#10b981" : member.color === "pink" ? "#ec4899" : member.color === "violet" ? "#8b5cf6" : member.color === "orange" ? "#f97316" : member.color === "indigo" ? "#6366f1" : member.color === "teal" ? "#14b8a6" : "#9ca3af";

  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="group"
    >
      {/* Cubicle floor shadow */}
      <path d="M0,40 L80,0 L160,40 L80,80 Z" fill="rgba(0,0,0,0.2)" />

      {/* Cubicle floor */}
      <path d="M0,38 L80,-2 L160,38 L80,78 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />

      {/* Back wall left */}
      <path d="M0,38 L80,-2 L80,-52 L0,-12 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />

      {/* Back wall right */}
      <path d="M80,-2 L160,38 L160,-12 L80,-52 Z" fill="#1a2332" stroke="#334155" strokeWidth="0.5" />

      {/* Wall decorations - poster/whiteboard on left wall */}
      <path d="M15,0 L50,-18 L50,-38 L15,-20 Z" fill="#0f172a" stroke="#475569" strokeWidth="0.3" />
      {isWorking && (
        <>
          <line x1="20" y1="-8" x2="45" y2="-20" stroke={colorAccent} strokeWidth="0.5" opacity="0.5" />
          <line x1="20" y1="-4" x2="40" y2="-14" stroke={colorAccent} strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="0" x2="35" y2="-8" stroke={colorAccent} strokeWidth="0.5" opacity="0.4" />
        </>
      )}

      {/* Shelf on right wall */}
      <path d="M110,-5 L145,-23 L145,-26 L110,-8 Z" fill="#374151" stroke="#475569" strokeWidth="0.3" />
      {/* Items on shelf */}
      <circle cx="120" cy="-8" r="2" fill={colorAccent} opacity="0.6" />
      <rect x="130" y="-12" width="4" height="5" rx="0.5" fill="#4b5563" transform="skewY(-27)" />

      {/* Desk - isometric box */}
      {/* Desk top */}
      <path d="M25,35 L80,8 L135,35 L80,62 Z" fill="#44403c" stroke="#57534e" strokeWidth="0.5" />
      {/* Desk front left */}
      <path d="M25,35 L80,62 L80,72 L25,45 Z" fill="#3a3733" stroke="#57534e" strokeWidth="0.3" />
      {/* Desk front right */}
      <path d="M80,62 L135,35 L135,45 L80,72 Z" fill="#332f2b" stroke="#57534e" strokeWidth="0.3" />
      {/* Desk drawer */}
      <path d="M90,62 L120,47 L120,53 L90,68 Z" fill="#2c2926" stroke="#57534e" strokeWidth="0.3" />
      <circle cx="105" cy="55" r="1" fill="#78716c" />

      {/* Monitor - isometric */}
      {/* Monitor stand */}
      <path d="M75,28 L85,23 L85,30 L75,35 Z" fill="#1f2937" />
      {/* Monitor base */}
      <path d="M70,35 L80,30 L90,35 L80,40 Z" fill="#374151" />
      {/* Monitor screen frame */}
      <path d="M55,10 L80,-2 L105,10 L80,22 Z" fill="#111827" stroke="#374151" strokeWidth="1" />
      {/* Screen content */}
      {isWorking ? (
        <g>
          {/* Active screen with code */}
          <path d="M58,10 L80,0 L102,10 L80,20 Z" fill="#0c1222" />
          {/* Code lines that animate */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1={62 + i * 1.5}
              y1={6 + i * 2 - (i > screenLine ? 0 : 0.5)}
              x2={62 + i * 1.5 + (i === screenLine ? 18 : 12 + (i % 3) * 4)}
              y2={6 + i * 2 - (i > screenLine ? 0 : 0.5) - ((i === screenLine ? 18 : 12 + (i % 3) * 4) * 0.5)}
              stroke={i === screenLine ? colorAccent : i % 2 === 0 ? "#4b5563" : "#374151"}
              strokeWidth="1"
              opacity={i === screenLine ? 0.9 : 0.5}
            />
          ))}
          {/* Cursor blink */}
          <rect
            x={62 + screenLine * 1.5 + 19}
            y={5 + screenLine * 2 - 9}
            width="1.5"
            height="3"
            fill={colorAccent}
            opacity={typingFrame % 2 === 0 ? 1 : 0.2}
          />
          {/* Screen glow */}
          <path d="M58,10 L80,0 L102,10 L80,20 Z" fill={colorAccent} opacity="0.03" />
        </g>
      ) : isIdle ? (
        <g>
          {/* Screensaver */}
          <path d="M58,10 L80,0 L102,10 L80,20 Z" fill="#0c1222" />
          <circle
            cx={75 + Math.sin(headBob * 0.6) * 5}
            cy={10 + Math.cos(headBob * 0.4) * 3}
            r="3"
            fill={colorAccent}
            opacity="0.15"
          />
        </g>
      ) : (
        /* Off screen */
        <path d="M58,10 L80,0 L102,10 L80,20 Z" fill="#030712" />
      )}
      {/* Monitor power LED */}
      <circle cx="80" cy="21" r="0.8" fill={statusInfo[member.status as Status].color} opacity={isWorking ? 1 : 0.5} />

      {/* Keyboard */}
      <path
        d="M65,32 L80,25 L95,32 L80,39 Z"
        fill="#1f2937"
        stroke="#374151"
        strokeWidth="0.3"
      />
      {/* Keys animation */}
      {isWorking && (
        <g>
          <rect x={72 + typingFrame * 2} y={29 - typingFrame} width="2" height="1" fill="#4b5563" rx="0.2" transform={`skewY(-30) skewX(0)`} opacity={0.8} />
        </g>
      )}

      {/* Mouse */}
      <ellipse cx="100" cy="30" rx="3" ry="2" fill="#1f2937" stroke="#374151" strokeWidth="0.3" transform="rotate(-30, 100, 30)" />

      {/* Coffee mug */}
      <g transform="translate(40, 25)">
        <path d="M0,0 L3,-1.5 L6,0 L3,1.5 Z" fill="#78716c" />
        <path d="M0,0 L3,1.5 L3,5 L0,3.5 Z" fill="#57534e" />
        <path d="M3,1.5 L6,0 L6,3.5 L3,5 Z" fill="#44403c" />
        {/* Steam */}
        {isWorking && (
          <>
            <path d={`M2,-2 Q3,${-4 - (typingFrame % 2)} 2,-6`} stroke="white" strokeWidth="0.3" opacity="0.15" fill="none" />
            <path d={`M4,-2 Q3,${-5 - ((typingFrame + 1) % 2)} 4,-7`} stroke="white" strokeWidth="0.3" opacity="0.1" fill="none" />
          </>
        )}
      </g>

      {/* Personal item - plant or figurine based on agent */}
      <g transform="translate(115, 20)">
        <path d="M0,0 L4,-2 L8,0 L4,2 Z" fill="#44403c" />
        <circle cx="4" cy="-3" r="2.5" fill="#166534" opacity="0.7" />
        <circle cx="3" cy="-4.5" r="1.5" fill="#15803d" opacity="0.6" />
        <line x1="4" y1="0" x2="4" y2="-2" stroke="#4d7c0f" strokeWidth="0.5" />
      </g>

      {/* Chair - isometric */}
      <g transform={`translate(70, ${42 + (isWorking ? Math.sin(headBob * 1.2) * 0.3 : 0)})`}>
        {/* Chair seat */}
        <path d="M0,0 L15,-7.5 L30,0 L15,7.5 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.3" />
        {/* Chair back */}
        <path d="M0,0 L15,-7.5 L15,-18 L0,-10.5 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.3" />
        {/* Chair wheels */}
        <circle cx="5" cy="4" r="1.2" fill="#374151" />
        <circle cx="25" cy="4" r="1.2" fill="#374151" />
        <circle cx="15" cy="8" r="1.2" fill="#374151" />
      </g>

      {/* Agent body - sitting at desk */}
      <g transform={`translate(73, ${isWorking ? 14 + Math.sin(headBob * 0.8) * 0.5 : isIdle ? 14 + (headBob === 0 ? -1 : 0) : 16})`}>
        {/* Body/torso */}
        <path d="M0,12 L12,6 L24,12 L12,18 Z" fill="#1e293b" />
        <path d="M0,12 L12,18 L12,26 L0,20 Z" fill="#0f172a" />
        <path d="M12,18 L24,12 L24,20 L12,26 Z" fill="#111827" />

        {/* Head */}
        <circle cx="12" cy="4" r="7" fill="#fbbf24" opacity="0.9" />
        {/* Face features */}
        <circle cx="9" cy="3" r="1" fill="#0f172a" />
        <circle cx="15" cy="3" r="1" fill="#0f172a" />
        {isWorking ? (
          /* Focused expression */
          <line x1="9" y1="7" x2="15" y2="7" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round" />
        ) : isIdle ? (
          /* Relaxed smile */
          <path d="M9,6.5 Q12,9 15,6.5" stroke="#0f172a" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        ) : (
          /* Sleeping */
          <>
            <line x1="8" y1="3" x2="11" y2="3" stroke="#0f172a" strokeWidth="1" strokeLinecap="round" />
            <line x1="13" y1="3" x2="16" y2="3" stroke="#0f172a" strokeWidth="1" strokeLinecap="round" />
            <text x="20" y="-2" fontSize="6" fill="white" opacity="0.3">z</text>
            <text x="24" y="-6" fontSize="4" fill="white" opacity="0.2">z</text>
          </>
        )}

        {/* Arms reaching to keyboard */}
        {isWorking && (
          <>
            <line x1="3" y1="14" x2={-5 + (typingFrame % 2) * 2} y2="22" stroke="#fbbf24" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
            <line x1="21" y1="14" x2={29 - ((typingFrame + 1) % 2) * 2} y2="22" stroke="#fbbf24" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
          </>
        )}
        {isIdle && (
          <>
            <line x1="3" y1="14" x2="-2" y2="22" stroke="#fbbf24" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
            <line x1="21" y1="14" x2="26" y2="22" stroke="#fbbf24" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
          </>
        )}
      </g>

      {/* Agent emoji overlay on head */}
      <text
        x="84"
        y={isWorking ? 20 + Math.sin(headBob * 0.8) * 0.5 : isIdle ? 20 + (headBob === 0 ? -1 : 0) : 22}
        fontSize="12"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {member.avatar}
      </text>

      {/* Name plate on cubicle wall */}
      <g transform="translate(25, -15)">
        <path d="M0,0 L30,-15 L60,0 L30,15 Z" fill="#0f172a" stroke={colorAccent} strokeWidth="0.5" opacity="0.9" />
        <text x="30" y="2" fontSize="6" fill="white" textAnchor="middle" dominantBaseline="middle" fontWeight="bold" fontFamily="monospace">
          {member.name}
        </text>
      </g>

      {/* Status indicator */}
      <circle cx="80" cy="-20" r="4" fill={statusInfo[member.status as Status].color} opacity={isWorking ? 1 : 0.6}>
        {isWorking && (
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="80" cy="-20" r="6" fill="none" stroke={statusInfo[member.status as Status].color} strokeWidth="0.5" opacity={isWorking ? 0.4 : 0}>
        {isWorking && (
          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Current task bubble (on hover via CSS) */}
      {member.currentTask && (
        <g className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ transition: "opacity 0.3s" }}>
          <rect x="20" y="-55" width="120" height="25" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="0.5" />
          <text x="80" y="-46" fontSize="5" fill="#94a3b8" textAnchor="middle" dominantBaseline="middle">
            📌 {member.currentTask.slice(0, 35)}{member.currentTask.length > 35 ? "..." : ""}
          </text>
          {/* Arrow */}
          <path d="M78,-30 L80,-26 L82,-30" fill="#1e293b" />
        </g>
      )}

      {/* Ambient desk lamp glow */}
      {isWorking && (
        <ellipse cx="80" cy="35" rx="40" ry="15" fill={colorAccent} opacity="0.02">
          <animate attributeName="opacity" values="0.02;0.04;0.02" dur="3s" repeatCount="indefinite" />
        </ellipse>
      )}
    </g>
  );
}

/* ─── Office Decorations ─── */
function WaterCooler({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M0,0 L10,-5 L20,0 L10,5 Z" fill="#1e3a5f" />
      <path d="M0,0 L10,5 L10,15 L0,10 Z" fill="#1e3a5f" stroke="#2563eb" strokeWidth="0.3" />
      <path d="M10,5 L20,0 L20,10 L10,15 Z" fill="#172e4a" stroke="#2563eb" strokeWidth="0.3" />
      <path d="M3,-5 L10,-8.5 L17,-5 L10,-1.5 Z" fill="#60a5fa" opacity="0.4" />
      <text x="10" y="-12" fontSize="8" textAnchor="middle">🚰</text>
    </g>
  );
}

function Plant({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${size})`}>
      <path d="M0,0 L8,-4 L16,0 L8,4 Z" fill="#44403c" />
      <path d="M0,0 L8,4 L8,8 L0,4 Z" fill="#3a3733" />
      <path d="M8,4 L16,0 L16,4 L8,8 Z" fill="#332f2b" />
      <circle cx="8" cy="-4" r="5" fill="#166534" opacity="0.7" />
      <circle cx="6" cy="-7" r="3.5" fill="#15803d" opacity="0.6" />
      <circle cx="11" cy="-6" r="3" fill="#166534" opacity="0.5" />
    </g>
  );
}

function FloorTile({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <path
      d={`M${x},${y} L${x + w / 2},${y - h / 2} L${x + w},${y} L${x + w / 2},${y + h / 2} Z`}
      fill="none"
      stroke="#1e293b"
      strokeWidth="0.3"
      opacity="0.3"
    />
  );
}

/* ─── Main Page ─── */
export default function OfficePage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);
  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  // Layout positions for cubicles in isometric grid
  const getPosition = (index: number, func: string) => {
    const positions: Record<string, { x: number; y: number }[]> = {
      leadership: [{ x: 380, y: 20 }],
      engineering: [
        { x: 150, y: 140 },
        { x: 350, y: 140 },
        { x: 550, y: 140 },
      ],
      design: [{ x: 150, y: 280 }],
      product: [
        { x: 350, y: 280 },
        { x: 550, y: 280 },
      ],
      operations: [
        { x: 150, y: 420 },
        { x: 350, y: 420 },
      ],
    };
    const funcPositions = positions[func] || [];
    return funcPositions[index] || { x: 100 + index * 200, y: 400 };
  };

  const grouped: Record<string, any[]> = {};
  for (const m of members) {
    if (!grouped[m.function]) grouped[m.function] = [];
    grouped[m.function].push(m);
  }

  const activeCount = members.filter((m) => m.status === "active").length;
  const idleCount = members.filter((m) => m.status === "idle").length;
  const offlineCount = members.filter((m) => m.status === "offline").length;

  if (members.length === 0) {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto flex flex-col items-center justify-center h-[70vh]">
        <div className="text-8xl mb-6 animate-bounce">🏢</div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">The office is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Initialize the team to open the office</p>
        <button onClick={() => seedTeam({})} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-colors">
          🚀 Open the Office
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">🏢 Digital Office</h1>
          <p className="text-sm text-gray-500 mt-1">Cleverwave HQ — Live View</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl px-5 py-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm"><span className="font-bold text-emerald-400">{activeCount}</span> <span className="text-gray-500">Working</span></span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-sm"><span className="font-bold text-amber-400">{idleCount}</span> <span className="text-gray-500">Idle</span></span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
            <span className="text-sm"><span className="font-bold text-gray-400">{offlineCount}</span> <span className="text-gray-500">Off</span></span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-gray-500">LIVE</span>
          </div>
        </div>
      </div>

      {/* Isometric Office */}
      <div className="bg-gradient-to-b from-gray-950 via-[#0a0f1a] to-gray-950 rounded-2xl border border-gray-700/50 overflow-hidden">
        <svg
          viewBox="0 0 900 580"
          className="w-full h-auto"
          style={{ minHeight: "500px" }}
        >
          <defs>
            {/* Floor grid pattern */}
            <pattern id="floorGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20,0 L40,10 L20,20 L0,10 Z" fill="none" stroke="#1e293b" strokeWidth="0.2" />
            </pattern>
            {/* Ambient light gradient */}
            <radialGradient id="ambientLight" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background floor */}
          <rect x="0" y="0" width="900" height="580" fill="#020617" />
          <rect x="0" y="0" width="900" height="580" fill="url(#ambientLight)" />

          {/* Floor grid lines */}
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 25} x2="900" y2={i * 25} stroke="#0f172a" strokeWidth="0.3" />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="580" stroke="#0f172a" strokeWidth="0.3" />
          ))}

          {/* Department labels */}
          <text x="450" y="15" fontSize="8" fill="#475569" textAnchor="middle" fontFamily="monospace" letterSpacing="3">👑 CTO OFFICE</text>
          <text x="350" y="130" fontSize="7" fill="#475569" textAnchor="middle" fontFamily="monospace" letterSpacing="3">⚡ ENGINEERING BAY</text>
          <text x="150" y="270" fontSize="7" fill="#475569" textAnchor="middle" fontFamily="monospace" letterSpacing="3">🎨 DESIGN</text>
          <text x="450" y="270" fontSize="7" fill="#475569" textAnchor="middle" fontFamily="monospace" letterSpacing="3">📋 PRODUCT</text>
          <text x="250" y="410" fontSize="7" fill="#475569" textAnchor="middle" fontFamily="monospace" letterSpacing="3">🛠️ OPS CENTER</text>

          {/* Department dividers */}
          <line x1="50" y1="120" x2="850" y2="120" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="50" y1="260" x2="850" y2="260" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4,4" />
          <line x1="50" y1="400" x2="850" y2="400" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4,4" />

          {/* Office decorations */}
          <WaterCooler x={750} y={300} />
          <Plant x={50} y={180} size={1.2} />
          <Plant x={800} y={180} />
          <Plant x={700} y={450} size={1.1} />
          <Plant x={50} y={450} />

          {/* Render all cubicles */}
          {Object.entries(grouped).map(([func, agents]) =>
            agents.map((member, i) => (
              <Cubicle
                key={member._id}
                member={member}
                position={getPosition(i, func)}
                onClick={() => setSelectedId(member._id)}
              />
            ))
          )}
        </svg>
      </div>

      {/* Agent Detail Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedId(null)} title="" size="md">
        {selectedMember && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center text-3xl shadow-lg border border-gray-700">
                {selectedMember.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{selectedMember.name}</h3>
                <p className="text-sm text-gray-400">{selectedMember.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${selectedMember.status === "active" ? "bg-emerald-500 animate-pulse" : selectedMember.status === "idle" ? "bg-amber-500" : "bg-gray-600"}`} />
                  <span className="text-xs text-gray-500">{statusInfo[selectedMember.status].label}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Specialty</p>
              <p className="text-sm text-gray-300">{selectedMember.specialty}</p>
            </div>
            {selectedMember.currentTask && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-xs text-blue-400 uppercase tracking-wider mb-1">Current Task</p>
                <p className="text-sm text-gray-200">{selectedMember.currentTask}</p>
              </div>
            )}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Responsibilities</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedMember.responsibilities.map((r: string) => (
                  <span key={r} className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">{r}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
              <span className="text-xs text-gray-500">Owned by <span className="text-gray-400">{selectedMember.owner}</span></span>
              {selectedMember.model && <span className="text-xs text-gray-600 font-mono">{selectedMember.model}</span>}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
