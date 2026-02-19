"use client";

import TaskCard from "./TaskCard";
import type { Id } from "../../../convex/_generated/dataModel";

const statusConfig: Record<string, { label: string; color: string }> = {
  backlog: { label: "Backlog", color: "bg-gray-500" },
  in_progress: { label: "In Progress", color: "bg-blue-500" },
  testing: { label: "Testing", color: "bg-amber-500" },
  done: { label: "Done", color: "bg-emerald-500" },
  deployed: { label: "Deployed", color: "bg-purple-500" },
};

interface Task {
  _id: Id<"tasks">;
  title: string;
  description?: string;
  status: "backlog" | "in_progress" | "testing" | "done" | "deployed";
  assignee: string;
  priority: string;
  labels?: string[];
}

export default function TaskColumn({
  status,
  tasks,
  onTaskClick,
}: {
  status: string;
  tasks: Task[];
  onTaskClick: (id: Id<"tasks">) => void;
}) {
  const config = statusConfig[status] || {
    label: status,
    color: "bg-gray-500",
  };

  return (
    <div className="flex flex-col min-w-[260px] max-w-[300px] flex-1">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className={`w-2 h-2 rounded-full ${config.color}`} />
        <h3 className="text-sm font-semibold text-gray-300">{config.label}</h3>
        <span className="text-xs text-gray-600 ml-auto">{tasks.length}</span>
      </div>
      <div className="space-y-2 flex-1">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onClick={() => onTaskClick(task._id)}
          />
        ))}
      </div>
    </div>
  );
}
