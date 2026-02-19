"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import TaskBoard from "@/components/tasks/TaskBoard";
import TaskForm from "@/components/tasks/TaskForm";
import Modal from "@/components/shared/Modal";
import StatusBadge from "@/components/shared/StatusBadge";
import PriorityIndicator from "@/components/shared/PriorityIndicator";
import AssigneeAvatar from "@/components/shared/AssigneeAvatar";
import ActivityFeed from "@/components/shared/ActivityFeed";
import FileUpload from "@/components/shared/FileUpload";
import FileList from "@/components/shared/FileList";
import { useActiveUser } from "@/lib/useActiveUser";

const TASK_STATUSES = [
  "backlog",
  "in_progress",
  "testing",
  "done",
  "deployed",
] as const;

export default function TasksPage() {
  const [showCreate, setShowCreate] = useState(false);
  const [selectedId, setSelectedId] = useState<Id<"tasks"> | null>(null);
  const [editingId, setEditingId] = useState<Id<"tasks"> | null>(null);
  const [activeUser] = useActiveUser();

  const selectedTask = useQuery(
    api.tasks.getById,
    selectedId ? { id: selectedId } : "skip"
  );
  const taskActivity = useQuery(
    api.activity.listByEntity,
    selectedId
      ? { entityType: "task" as const, entityId: selectedId }
      : "skip"
  );
  const updateStatus = useMutation(api.tasks.updateStatus);
  const removeTask = useMutation(api.tasks.remove);

  const tasks = useQuery(api.tasks.list);
  const editingTask = tasks?.find((t: { _id: string }) => t._id === editingId);

  return (
    <div className="p-6 lg:p-8 max-w-full mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">✅ Tasks</h1>
          <p className="text-sm text-gray-500 mt-1">
            Kanban board — move tasks through the pipeline
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          + New Task
        </button>
      </div>

      {/* Board */}
      <TaskBoard onTaskClick={(id) => setSelectedId(id)} />

      {/* Create Modal */}
      <Modal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Task"
      >
        <TaskForm onClose={() => setShowCreate(false)} />
      </Modal>

      {/* Detail Modal */}
      <Modal
        isOpen={selectedId !== null && editingId === null}
        onClose={() => setSelectedId(null)}
        title="Task Details"
        size="lg"
      >
        {selectedId && selectedTask && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-gray-100">
                  {selectedTask.title}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditingId(selectedId);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      await removeTask({
                        id: selectedId,
                        actor: activeUser,
                      });
                      setSelectedId(null);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-red-400 hover:text-red-300 border border-red-900/50 hover:border-red-800 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <StatusBadge status={selectedTask.status} />
                <PriorityIndicator priority={selectedTask.priority} />
                <AssigneeAvatar name={selectedTask.assignee} size="sm" />
                <span className="text-xs text-gray-500">
                  {selectedTask.assignee}
                </span>
              </div>
            </div>

            {/* Description */}
            {selectedTask.description && (
              <div>
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Description
                </h4>
                <p className="text-sm text-gray-300 whitespace-pre-wrap">
                  {selectedTask.description}
                </p>
              </div>
            )}

            {/* Labels */}
            {selectedTask.labels && selectedTask.labels.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {selectedTask.labels.map((label: string) => (
                  <span
                    key={label}
                    className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}

            {/* Status Actions */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Change Status
              </h4>
              <div className="flex flex-wrap gap-2">
                {TASK_STATUSES.filter(
                  (s) => s !== selectedTask.status
                ).map((status) => (
                  <button
                    key={status}
                    onClick={() =>
                      updateStatus({
                        id: selectedId,
                        status,
                        actor: activeUser,
                      })
                    }
                    className="px-3 py-1.5 text-xs font-medium border border-gray-700 hover:border-gray-600 rounded-lg text-gray-400 hover:text-gray-200 transition-colors capitalize"
                  >
                    {status.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Files */}
            <FileList entityType="task" entityId={selectedId} />
            <FileUpload
              entityType="task"
              entityId={selectedId}
              uploadedBy={activeUser}
            />

            {/* Activity */}
            {taskActivity && (
              <div>
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Activity
                </h4>
                <ActivityFeed activities={taskActivity} />
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={editingId !== null}
        onClose={() => setEditingId(null)}
        title="Edit Task"
      >
        {editingId && editingTask && (
          <TaskForm
            task={editingTask}
            onClose={() => setEditingId(null)}
          />
        )}
      </Modal>
    </div>
  );
}
