"use client";

const statusColors: Record<string, string> = {
  // Ideas
  draft: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  approved: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  implemented: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  // Specs
  review: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  changes_requested: "bg-red-500/20 text-red-400 border-red-500/30",
  // Tasks
  backlog: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  in_progress: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  testing: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  done: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  deployed: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const statusLabels: Record<string, string> = {
  draft: "Draft",
  approved: "Approved",
  rejected: "Rejected",
  implemented: "Implemented",
  review: "Review",
  changes_requested: "Changes Requested",
  backlog: "Backlog",
  in_progress: "In Progress",
  testing: "Testing",
  done: "Done",
  deployed: "Deployed",
};

export default function StatusBadge({ status }: { status: string }) {
  const colors = statusColors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  const label = statusLabels[status] || status;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors}`}
    >
      {label}
    </span>
  );
}
