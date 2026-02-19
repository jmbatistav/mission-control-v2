"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import StatusBadge from "../shared/StatusBadge";
import PriorityIndicator from "../shared/PriorityIndicator";
import AssigneeAvatar from "../shared/AssigneeAvatar";
import ActivityFeed from "../shared/ActivityFeed";
import FileUpload from "../shared/FileUpload";
import FileList from "../shared/FileList";
import { useActiveUser } from "@/lib/useActiveUser";

const IDEA_STATUSES = ["draft", "approved", "rejected", "implemented"] as const;

export default function IdeaDetail({
  ideaId,
  onClose,
  onEdit,
}: {
  ideaId: Id<"ideas">;
  onClose: () => void;
  onEdit: () => void;
}) {
  const idea = useQuery(api.ideas.getById, { id: ideaId });
  const specs = useQuery(api.specs.listByIdea, { ideaId });
  const activity = useQuery(api.activity.listByEntity, {
    entityType: "idea",
    entityId: ideaId,
  });
  const updateStatus = useMutation(api.ideas.updateStatus);
  const removeIdea = useMutation(api.ideas.remove);
  const [activeUser] = useActiveUser();

  if (!idea) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold text-gray-100">{idea.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              Edit
            </button>
            <button
              onClick={async () => {
                await removeIdea({ id: ideaId, actor: activeUser });
                onClose();
              }}
              className="px-3 py-1.5 text-xs font-medium text-red-400 hover:text-red-300 border border-red-900/50 hover:border-red-800 rounded-lg transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <StatusBadge status={idea.status} />
          <PriorityIndicator priority={idea.priority} />
          <AssigneeAvatar name={idea.createdBy} size="sm" />
          <span className="text-xs text-gray-500">by {idea.createdBy}</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Description
        </h4>
        <p className="text-sm text-gray-300 whitespace-pre-wrap">
          {idea.description}
        </p>
      </div>

      {/* Tags */}
      {idea.tags && idea.tags.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1">
            {idea.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status Actions */}
      <div>
        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          Change Status
        </h4>
        <div className="flex flex-wrap gap-2">
          {IDEA_STATUSES.filter((s) => s !== idea.status).map((status) => (
            <button
              key={status}
              onClick={() =>
                updateStatus({ id: ideaId, status, actor: activeUser })
              }
              className="px-3 py-1.5 text-xs font-medium border border-gray-700 hover:border-gray-600 rounded-lg text-gray-400 hover:text-gray-200 transition-colors capitalize"
            >
              {status.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Linked Specs */}
      {specs && specs.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
            Linked Specs
          </h4>
          <div className="space-y-2">
            {specs.map((spec: any) => (
              <div
                key={spec._id}
                className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg"
              >
                <span className="text-sm text-gray-300">{spec.title}</span>
                <StatusBadge status={spec.status} />
                <span className="text-xs text-gray-500">v{spec.version}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files */}
      <FileList entityType="idea" entityId={ideaId} />
      <FileUpload
        entityType="idea"
        entityId={ideaId}
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
