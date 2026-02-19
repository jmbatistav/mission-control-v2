"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import StatusBadge from "@/components/shared/StatusBadge";
import PriorityIndicator from "@/components/shared/PriorityIndicator";
import AssigneeAvatar from "@/components/shared/AssigneeAvatar";

type PipelineItem = {
  id: string;
  title: string;
  status: string;
  priority?: string;
  assignee: string;
  type: "idea" | "spec" | "task";
};

const stages = [
  { key: "ideas", label: "💡 Ideas" },
  { key: "specs", label: "📋 Specs" },
  { key: "tasks", label: "✅ Tasks" },
  { key: "testing", label: "🧪 Testing" },
  { key: "done", label: "🚀 Shipped" },
];

export default function PipelinePage() {
  const ideas = useQuery(api.ideas.list) ?? [];
  const specs = useQuery(api.specs.list) ?? [];
  const tasks = useQuery(api.tasks.list) ?? [];

  const getItems = (stageKey: string): PipelineItem[] => {
    switch (stageKey) {
      case "ideas":
        return (ideas as any[])
          .filter((i: any) => ["draft", "approved"].includes(i.status))
          .map((i: any): PipelineItem => ({
            id: i._id, title: i.title, status: i.status, priority: i.priority,
            assignee: i.createdBy, type: "idea",
          }));
      case "specs":
        return (specs as any[])
          .filter((s: any) => ["draft", "review", "approved"].includes(s.status))
          .map((s: any): PipelineItem => ({
            id: s._id, title: s.title, status: s.status,
            assignee: s.createdBy, type: "spec",
          }));
      case "tasks":
        return (tasks as any[])
          .filter((t: any) => ["backlog", "in_progress"].includes(t.status))
          .map((t: any): PipelineItem => ({
            id: t._id, title: t.title, status: t.status, priority: t.priority,
            assignee: t.assignee, type: "task",
          }));
      case "testing":
        return (tasks as any[])
          .filter((t: any) => t.status === "testing")
          .map((t: any): PipelineItem => ({
            id: t._id, title: t.title, status: t.status, priority: t.priority,
            assignee: t.assignee, type: "task",
          }));
      case "done":
        return [
          ...(ideas as any[])
            .filter((i: any) => i.status === "implemented")
            .map((i: any): PipelineItem => ({
              id: i._id, title: i.title, status: i.status, priority: i.priority,
              assignee: i.createdBy, type: "idea",
            })),
          ...(tasks as any[])
            .filter((t: any) => ["done", "deployed"].includes(t.status))
            .map((t: any): PipelineItem => ({
              id: t._id, title: t.title, status: t.status, priority: t.priority,
              assignee: t.assignee, type: "task",
            })),
        ];
      default:
        return [];
    }
  };

  const totalActive = ideas.length + specs.length + tasks.length;

  return (
    <div className="p-6 lg:p-8 max-w-full mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">⚡ Pipeline</h1>
        <p className="text-sm text-gray-500 mt-1">
          {totalActive} items flowing through the pipeline
        </p>
      </div>

      {/* Pipeline Flow */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage, idx) => {
          const items = getItems(stage.key);
          return (
            <div key={stage.key} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-64">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <h3 className="text-sm font-semibold text-gray-300">
                    {stage.label}
                  </h3>
                  <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                </div>
                <div className="space-y-2 min-h-[200px] bg-gray-900/50 border border-gray-700/50 rounded-xl p-3">
                  {items.map((item: PipelineItem) => (
                    <div
                      key={item.id}
                      className="bg-gray-900 border border-gray-700/50 rounded-lg p-3 hover:border-gray-600 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                          {item.type}
                        </span>
                        <StatusBadge status={item.status} />
                      </div>
                      <h4 className="text-sm font-medium text-gray-200 mb-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        {item.priority && (
                          <PriorityIndicator
                            priority={item.priority}
                            showLabel={false}
                          />
                        )}
                        <AssigneeAvatar name={item.assignee} size="sm" />
                      </div>
                    </div>
                  ))}
                  {items.length === 0 && (
                    <div className="text-center text-xs text-gray-600 py-8">
                      Empty
                    </div>
                  )}
                </div>
              </div>
              {idx < stages.length - 1 && (
                <div className="flex items-center self-center text-gray-700 text-xl mt-8">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
