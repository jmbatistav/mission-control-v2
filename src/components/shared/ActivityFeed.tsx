"use client";

import AssigneeAvatar from "./AssigneeAvatar";

interface ActivityEntry {
  _id: string;
  entityType: string;
  entityId: string;
  action: string;
  details?: string;
  actor: string;
  createdAt: number;
}

function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const actionIcons: Record<string, string> = {
  created: "✨",
  updated: "✏️",
  status_changed: "🔄",
  deleted: "🗑️",
  assigned: "👤",
};

export default function ActivityFeed({
  activities,
}: {
  activities: ActivityEntry[];
}) {
  if (activities.length === 0) {
    return (
      <p className="text-sm text-gray-500 py-4 text-center">
        No activity yet
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {activities.map((entry) => (
        <div key={entry._id} className="flex items-start gap-3">
          <AssigneeAvatar name={entry.actor} size="sm" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs">
                {actionIcons[entry.action] || "📌"}
              </span>
              <span className="text-sm text-gray-300 font-medium">
                {entry.actor}
              </span>
              <span className="text-xs text-gray-500">
                {timeAgo(entry.createdAt)}
              </span>
            </div>
            {entry.details && (
              <p className="text-xs text-gray-400 mt-0.5 truncate">
                {entry.details}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
