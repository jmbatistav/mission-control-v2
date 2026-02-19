"use client";

import StatusBadge from "../shared/StatusBadge";
import PriorityIndicator from "../shared/PriorityIndicator";
import AssigneeAvatar from "../shared/AssigneeAvatar";
import type { Id } from "../../../convex/_generated/dataModel";

interface Idea {
  _id: Id<"ideas">;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdBy: string;
  tags?: string[];
  createdAt: number;
}

export default function IdeaCard({
  idea,
  onClick,
}: {
  idea: Idea;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 border border-gray-700/50 rounded-xl p-4 cursor-pointer hover:border-gray-600 hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-100 line-clamp-1 flex-1">
          {idea.title}
        </h3>
        <AssigneeAvatar name={idea.createdBy} size="sm" />
      </div>
      <p className="text-xs text-gray-400 line-clamp-2 mb-3">
        {idea.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatusBadge status={idea.status} />
          <PriorityIndicator priority={idea.priority} showLabel={false} />
        </div>
      </div>
      {idea.tags && idea.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {idea.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
