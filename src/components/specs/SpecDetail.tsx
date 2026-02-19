"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import StatusBadge from "../shared/StatusBadge";
import AssigneeAvatar from "../shared/AssigneeAvatar";
import ActivityFeed from "../shared/ActivityFeed";
import FileUpload from "../shared/FileUpload";
import FileList from "../shared/FileList";
import MarkdownRenderer from "../shared/MarkdownRenderer";
import { useActiveUser } from "@/lib/useActiveUser";

const SPEC_STATUSES = ["draft", "review", "approved", "changes_requested"] as const;

export default function SpecDetail({
  specId,
  onClose,
  onEdit,
}: {
  specId: Id<"specs">;
  onClose: () => void;
  onEdit: () => void;
}) {
  const spec = useQuery(api.specs.getById, { id: specId });
  const idea = useQuery(
    api.ideas.getById,
    spec ? { id: spec.ideaId } : "skip"
  );
  const tasks = useQuery(
    api.tasks.listBySpec,
    spec ? { specId: spec._id } : "skip"
  );
  const activity = useQuery(api.activity.listByEntity, {
    entityType: "spec",
    entityId: specId,
  });
  const updateStatus = useMutation(api.specs.updateStatus);
  const removeSpec = useMutation(api.specs.remove);
  const [activeUser] = useActiveUser();

  if (!spec) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-100">{spec.title}</h2>
            {idea && (
              <p className="text-xs text-gray-500 mt-1">
                💡 Linked to: {idea.title}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              Edit
            </button>
            <button
              onClick={async () => {
                await removeSpec({ id: specId });
                onClose();
              }}
              className="px-3 py-1.5 text-xs font-medium text-red-400 hover:text-red-300 border border-red-900/50 hover:border-red-800 rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <StatusBadge status={spec.status} />
          <span className="text-xs text-gray-500">v{spec.version}</span>
          <AssigneeAvatar name={spec.createdBy} size="sm" />
          <span className="text-xs text-gray-500">by {spec.createdBy}</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Content
        </h4>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
          <MarkdownRenderer content={spec.content} />
        </div>
      </div>

      {/* Status Actions */}
      <div>
        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Change Status
        </h4>
        <div className="flex flex-wrap gap-2">
          {SPEC_STATUSES.filter((s) => s !== spec.status).map((status) => (
            <button
              key={status}
              onClick={() =>
                updateStatus({ id: specId, status, actor: activeUser })
              }
              className="px-3 py-1.5 text-xs font-medium border border-gray-700 hover:border-gray-600 rounded-lg text-gray-400 hover:text-gray-200 transition-colors capitalize"
            >
              {status.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Linked Tasks */}
      {tasks && tasks.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Linked Tasks
          </h4>
          <div className="space-y-2">
            {tasks.map((task: any) => (
              <div
                key={task._id}
                className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg"
              >
                <span className="text-sm text-gray-300">{task.title}</span>
                <StatusBadge status={task.status} />
                <AssigneeAvatar name={task.assignee} size="sm" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files */}
      <FileList entityType="spec" entityId={specId} />
      <FileUpload
        entityType="spec"
        entityId={specId}
        uploadedBy={activeUser}
      />

      {/* Activity */}
      {activity && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Activity
          </h4>
          <ActivityFeed activities={activity} />
        </div>
      )}
    </div>
  );
}
