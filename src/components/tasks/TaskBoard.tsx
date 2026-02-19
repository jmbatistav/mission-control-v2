"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import TaskColumn from "./TaskColumn";
import type { Id } from "../../../convex/_generated/dataModel";

const COLUMNS = [
  "backlog",
  "in_progress",
  "testing",
  "done",
  "deployed",
] as const;

export default function TaskBoard({
  onTaskClick,
}: {
  onTaskClick: (id: Id<"tasks">) => void;
}) {
  const tasks = useQuery(api.tasks.list);

  if (!tasks) {
    return (
      <div className="flex gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col) => (
          <div
            key={col}
            className="min-w-[260px] max-w-[300px] flex-1 h-64 bg-gray-900/30 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  const grouped = COLUMNS.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((t) => t.status === status);
      return acc;
    },
    {} as Record<string, typeof tasks>
  );

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {COLUMNS.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={grouped[status] || []}
          onTaskClick={onTaskClick}
        />
      ))}
    </div>
  );
}
