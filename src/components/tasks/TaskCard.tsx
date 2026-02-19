"use client";

import PriorityIndicator from "../shared/PriorityIndicator";
import AssigneeAvatar from "../shared/AssigneeAvatar";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useActiveUser } from "@/lib/useActiveUser";
import type { Id } from "../../../convex/_generated/dataModel";

const STATUS_ORDER = ["backlog", "in_progress", "testing", "done", "deployed"] as const;
type TaskStatus = (typeof STATUS_ORDER)[number];

interface Task {
  _id: Id<"tasks">;
  title: string;
  description?: string;
  status: TaskStatus;
  assignee: string;
  priority: string;
  labels?: string[];
}

export default function TaskCard({
  task,
  onClick,
}: {
  task: Task;
  onClick: () => void;
}) {
  const updateStatus = useMutation(api.tasks.updateStatus);
  const [activeUser] = useActiveUser();

  const currentIndex = STATUS_ORDER.indexOf(task.status);
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < STATUS_ORDER.length - 1;

  function moveLeft(e: React.MouseEvent) {
    e.stopPropagation();
    if (canMoveLeft) {
      updateStatus({
        id: task._id,
        status: STATUS_ORDER[currentIndex - 1],
        actor: activeUser,
      });
    }
  }

  function moveRight(e: React.MouseEvent) {
    e.stopPropagation();
    if (canMoveRight) {
      updateStatus({
        id: task._id,
        status: STATUS_ORDER[currentIndex + 1],
        actor: activeUser,
      });
    }
  }

  return (
    <div
      onClick={onClick}
      className="bg-gray-900 border border-gray-700/50 rounded-xl p-3 cursor-pointer hover:border-gray-600 hover:scale-[1.02] transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-medium text-gray-100 line-clamp-2 flex-1">
          {task.title}
        </h4>
        <PriorityIndicator priority={task.priority} showLabel={false} />
      </div>

      {task.labels && task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {task.labels.map((label) => (
            <span
              key={label}
              className="px-1.5 py-0.5 bg-gray-800 text-gray-500 text-[10px] rounded"
            >
              {label}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <AssigneeAvatar name={task.assignee} size="sm" />
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {canMoveLeft && (
            <button
              onClick={moveLeft}
              className="p-1 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded transition-colors"
              title="Move left"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {canMoveRight && (
            <button
              onClick={moveRight}
              className="p-1 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded transition-colors"
              title="Move right"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
