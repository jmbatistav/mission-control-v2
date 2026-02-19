"use client";

const priorityConfig: Record<string, { color: string; label: string }> = {
  low: { color: "bg-gray-500", label: "Low" },
  medium: { color: "bg-blue-500", label: "Medium" },
  high: { color: "bg-orange-500", label: "High" },
  urgent: { color: "bg-red-500", label: "Urgent" },
};

export default function PriorityIndicator({
  priority,
  showLabel = true,
}: {
  priority: string;
  showLabel?: boolean;
}) {
  const config = priorityConfig[priority] || priorityConfig.low;
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${config.color}`} />
      {showLabel && (
        <span className="text-xs text-gray-400">{config.label}</span>
      )}
    </div>
  );
}
