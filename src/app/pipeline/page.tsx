"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import StatusBadge from "@/components/shared/StatusBadge";
import PriorityIndicator from "@/components/shared/PriorityIndicator";
import AssigneeAvatar from "@/components/shared/AssigneeAvatar";

const stages = [
  { key: "ideas", label: "💡 Ideas", statuses: ["draft", "approved"] },
  { key: "specs", label: "📋 Specs", statuses: ["draft", "review", "approved"] },
  { key: "tasks", label: "✅ Tasks", statuses: ["backlog", "in_progress"] },
  { key: "testing", label: "🧪 Testing", statuses: ["testing"] },
  { key: "done", label: "🚀 Shipped", statuses: ["done", "deployed", "implemented"] },
];

export default function PipelinePage() {
  const ideas = useQuery(api.ideas.list) ?? [];
  const specs = useQuery(api.specs.list) ?? [];
  const tasks = useQuery(api.tasks.list) ?? [];

  const getItems = (stageKey: string) => {
    switch (stageKey) {
      case "ideas":
        return ideas.filter((i) => ["draft", "approved"].includes(i.status)).map((i) => ({
          id: i._id, title: i.title, status: i.status, priority: i.priority,
          assignee: i.createdBy, type: "idea" as const,
        }));
      case "specs":
        return specs.filter((s) => ["draft", "review", "approved"].includes(s.status)).map((s) => ({
          id: s._id, title: s.title, status: s.status, priority: undefined,
          assignee: s.createdBy, type: "spec" as const,
        }));
      case "tasks":
        return tasks.filter((t) => ["backlog", "in_progress"].includes(t.status)).map((t) => ({
          id: t._id, title: t.title, status: t.status, priority: t.priority,
          assignee: t.assignee, type: "task" as const,
        }));
      case "testing":
        return tasks.filter((t) => t.status === "testing").map((t) => ({
          id: t._id, title: t.title, status: t.status, priority: t.priority,
          assignee: t.assignee, type: "task" as const,
        }));
      case "done":
        return [
          ...ideas.filter((i) => i.status === "implemented").map((i) => ({
            id: i._id, title: i.title, status: i.status, priority: i.priority,
            assignee: i.createdBy, type: "idea" as const,
          })),
          ...tasks.filter((t) => ["done", "deployed"].includes(t.status)).map((t) => ({
            id: t._id, title: t.title, status: t.status, priority: t.priority,
            assignee: t.assignee, type: "task" as const,
          })),
        ];
      default:
        return [];
    }
  };

  const totalActive = ideas.length + specs.length + tasks.length;

  return (
    <div className="max-w-full mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">⚡ Pipeline</h1>
        <p className="text-sm text-gray-500 mt-1">{totalActive} items flowing through the pipeline</p>
      </div>

      {/* Pipeline Flow */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage, idx) => {
          const items = getItems(stage.key);
          return (
            <div key={stage.key} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-64">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <h3 className="text-sm font-semibold text-gray-300">{stage.label}</h3>
                  <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">{items.length}</span>
                </div>
                <div className="space-y-2 min-h-[200px] bg-gray-900/50 border border-gray-800 rounded-xl p-3">
                  {items.map((item) => (
                    <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-lg p-3 hover:border-gray-700 transition-colors">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">{item.type}</span>
                        <StatusBadge status={item.status} />
                      </div>
                      <h4 className="text-sm font-medium text-gray-200 mb-2">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        {item.priority && <PriorityIndicator priority={item.priority} showLabel={false} />}
                        <AssigneeAvatar name={item.assignee} size="sm" />
                      </div>
                    </div>
                  ))}
                  {items.length === 0 && (
                    <div className="text-center text-xs text-gray-600 py-8">Empty</div>
                  )}
                </div>
              </div>
              {idx < stages.length - 1 && (
                <div className="flex items-center self-center text-gray-700 text-xl mt-8">→</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
