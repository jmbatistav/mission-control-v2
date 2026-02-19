"use client";

export default function QuickActions({
  onNewIdea,
  onNewSpec,
  onNewTask,
}: {
  onNewIdea: () => void;
  onNewSpec: () => void;
  onNewTask: () => void;
}) {
  const actions = [
    {
      label: "New Idea",
      emoji: "💡",
      onClick: onNewIdea,
      color: "hover:border-amber-500/50 hover:bg-amber-500/5",
    },
    {
      label: "New Spec",
      emoji: "📋",
      onClick: onNewSpec,
      color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    },
    {
      label: "New Task",
      emoji: "✅",
      onClick: onNewTask,
      color: "hover:border-emerald-500/50 hover:bg-emerald-500/5",
    },
  ];

  return (
    <div className="flex gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className={`flex items-center gap-2 px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-sm font-medium text-gray-300 transition-all ${action.color}`}
        >
          <span>{action.emoji}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}
