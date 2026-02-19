"use client";

import StatusBadge from "../shared/StatusBadge";
import AssigneeAvatar from "../shared/AssigneeAvatar";
import type { Id } from "../../../convex/_generated/dataModel";

interface Spec {
  _id: Id<"specs">;
  title: string;
  status: string;
  version: number;
  createdBy: string;
  createdAt: number;
}

export default function SpecCard({
  spec,
  ideaTitle,
  onClick,
}: {
  spec: Spec;
  ideaTitle?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 border border-gray-800 rounded-xl p-4 cursor-pointer hover:border-gray-700 hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-100 line-clamp-1 flex-1">
          {spec.title}
        </h3>
        <span className="text-xs text-gray-500 ml-2 shrink-0">
          v{spec.version}
        </span>
      </div>
      {ideaTitle && (
        <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
          <span>💡</span>
          <span className="truncate">{ideaTitle}</span>
        </p>
      )}
      <div className="flex items-center justify-between">
        <StatusBadge status={spec.status} />
        <AssigneeAvatar name={spec.createdBy} size="sm" />
      </div>
    </div>
  );
}
