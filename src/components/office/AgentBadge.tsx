"use client";

type Status = "active" | "idle" | "offline";

const statusDotClass: Record<Status, string> = {
  active: "bg-emerald-500 animate-pulse",
  idle: "bg-amber-500",
  offline: "bg-gray-600",
};

export default function AgentBadge({
  name,
  avatar,
  status,
}: {
  name: string;
  avatar: string;
  status: Status;
}) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-800/90 border border-gray-700/50 shadow-sm">
      <span className="text-sm leading-none">{avatar}</span>
      <span className="text-[11px] font-semibold text-white truncate max-w-[80px]">
        {name}
      </span>
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDotClass[status]}`}
      />
    </div>
  );
}
