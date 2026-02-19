"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Cubicle from "./Cubicle";

type FunctionName = "leadership" | "engineering" | "design" | "product" | "operations";

const departmentConfig: Record<FunctionName, { emoji: string; label: string; cols: string }> = {
  leadership: { emoji: "👑", label: "Leadership", cols: "grid-cols-1 sm:grid-cols-1 md:grid-cols-1" },
  engineering: { emoji: "⚡", label: "Engineering Bay", cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
  design: { emoji: "🎨", label: "Design Studio", cols: "grid-cols-1 sm:grid-cols-2" },
  product: { emoji: "📋", label: "Product Lab", cols: "grid-cols-1 sm:grid-cols-2" },
  operations: { emoji: "🛠️", label: "Ops Center", cols: "grid-cols-1 sm:grid-cols-2" },
};

const departmentOrder: FunctionName[] = ["leadership", "engineering", "design", "product", "operations"];

export default function Office({
  onSelect,
  selectedId,
}: {
  onSelect: (id: string) => void;
  selectedId: string | null;
}) {
  const members = useQuery(api.team.list) ?? [];

  // Group by function
  const grouped: Partial<Record<FunctionName, typeof members>> = {};
  for (const m of members) {
    const fn = m.function as FunctionName;
    if (!grouped[fn]) grouped[fn] = [];
    grouped[fn]!.push(m);
  }

  return (
    <div
      className="rounded-2xl border border-gray-700/50 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #030712 0%, #0a0f1a 50%, #030712 100%)",
        backgroundImage: `
          linear-gradient(180deg, #030712 0%, #0a0f1a 50%, #030712 100%),
          linear-gradient(rgba(30,41,59,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,41,59,0.12) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 32px 32px, 32px 32px",
      }}
    >
      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {departmentOrder.map((fn) => {
          const agents = grouped[fn];
          if (!agents || agents.length === 0) return null;
          const config = departmentConfig[fn];

          return (
            <section key={fn}>
              {/* Department header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">{config.emoji}</span>
                <h3 className="text-xs font-mono uppercase tracking-[3px] text-gray-500">
                  {config.label}
                </h3>
                <div className="flex-1 h-px bg-gray-800 ml-2" />
                <span className="text-[10px] text-gray-600 font-mono">{agents.length}</span>
              </div>

              {/* Cubicles grid */}
              <div className={`grid ${config.cols} gap-4`} style={{ maxWidth: fn === "leadership" ? 260 : undefined }}>
                {agents.map((member) => (
                  <Cubicle
                    key={member._id}
                    member={{
                      _id: member._id,
                      name: member.name,
                      avatar: member.avatar,
                      status: member.status,
                      color: member.color,
                      currentTask: member.currentTask,
                    }}
                    onClick={() => onSelect(member._id)}
                    isSelected={selectedId === member._id}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
