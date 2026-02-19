"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const stages = [
  {
    label: "Ideas",
    emoji: "💡",
    color: "from-amber-500/20 to-amber-600/5 border-amber-500/20",
    textColor: "text-amber-400",
  },
  {
    label: "Specs",
    emoji: "📋",
    color: "from-blue-500/20 to-blue-600/5 border-blue-500/20",
    textColor: "text-blue-400",
  },
  {
    label: "In Progress",
    emoji: "🔨",
    color: "from-violet-500/20 to-violet-600/5 border-violet-500/20",
    textColor: "text-violet-400",
  },
  {
    label: "Testing",
    emoji: "🧪",
    color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
    textColor: "text-cyan-400",
  },
  {
    label: "Deployed",
    emoji: "🚀",
    color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
    textColor: "text-emerald-400",
  },
];

export default function PipelineStats() {
  const ideas = useQuery(api.ideas.list);
  const specs = useQuery(api.specs.list);
  const tasks = useQuery(api.tasks.list);

  const counts = [
    ideas?.length ?? 0,
    specs?.length ?? 0,
    tasks?.filter((t: any) => t.status === "in_progress").length ?? 0,
    tasks?.filter((t: any) => t.status === "testing").length ?? 0,
    tasks?.filter((t: any) => t.status === "deployed").length ?? 0,
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stages.map((stage, i) => (
        <div
          key={stage.label}
          className={`bg-gradient-to-br ${stage.color} border rounded-xl p-4 transition-colors`}
        >
          <div className="text-2xl mb-1">{stage.emoji}</div>
          <div className={`text-2xl font-bold ${stage.textColor}`}>
            {counts[i]}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">{stage.label}</div>
        </div>
      ))}
    </div>
  );
}
