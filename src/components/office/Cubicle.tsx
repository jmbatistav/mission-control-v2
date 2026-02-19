"use client";

import AgentAvatar from "./AgentAvatar";
import AgentBadge from "./AgentBadge";
import Desk from "./Desk";

type Status = "active" | "idle" | "offline";

const colorMap: Record<string, string> = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  amber: "#f59e0b",
  emerald: "#10b981",
  pink: "#ec4899",
  violet: "#8b5cf6",
  orange: "#f97316",
  indigo: "#6366f1",
  teal: "#14b8a6",
};

interface CubicleMember {
  _id: string;
  name: string;
  avatar: string;
  status: string;
  color: string;
  currentTask?: string;
}

export default function Cubicle({
  member,
  onClick,
  isSelected,
}: {
  member: CubicleMember;
  onClick: () => void;
  isSelected: boolean;
}) {
  const status = member.status as Status;
  const accent = colorMap[member.color] ?? "#9ca3af";

  return (
    <button
      onClick={onClick}
      className={`
        group relative flex flex-col items-center
        rounded-xl border transition-all duration-200
        cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-500
        ${isSelected
          ? "border-cyan-500/60 bg-gray-800/80 shadow-lg shadow-cyan-500/10"
          : "border-gray-700/50 bg-gray-900/80 hover:border-gray-600/70 hover:bg-gray-800/60"
        }
        hover:shadow-md hover:-translate-y-0.5
      `}
      style={{
        width: "100%",
        minHeight: 200,
        padding: "12px 8px 8px",
      }}
    >
      {/* Badge floating above */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <AgentBadge name={member.name} avatar={member.avatar} status={status} />
      </div>

      {/* Cubicle interior with subtle isometric perspective */}
      <div
        className="relative flex flex-col items-center justify-end flex-1 w-full pt-4"
        style={{ perspective: "400px" }}
      >
        {/* Cubicle back wall hint */}
        <div
          className="absolute top-2 left-1 right-1 bottom-1/2 rounded-t-md opacity-30 border-x border-t border-gray-700/30"
          style={{
            background: `linear-gradient(180deg, ${accent}08 0%, transparent 100%)`,
          }}
        />

        {/* Agent sitting */}
        <div className="relative z-10 -mb-2">
          <AgentAvatar status={status} />
        </div>

        {/* Desk */}
        <div className="relative z-10">
          <Desk status={status} color={member.color} />
        </div>
      </div>

      {/* Current task tooltip on hover */}
      {member.currentTask && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="mt-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-w-[200px]">
            <p className="text-[10px] text-gray-400 leading-tight">
              📌 {member.currentTask.length > 50 ? member.currentTask.slice(0, 50) + "…" : member.currentTask}
            </p>
          </div>
        </div>
      )}

      {/* Active glow ring */}
      {status === "active" && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none animate-pulse"
          style={{
            boxShadow: `inset 0 0 20px 2px ${accent}08, 0 0 8px 1px ${accent}05`,
          }}
        />
      )}
    </button>
  );
}
