"use client";

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-gray-600 mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-300 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-6 text-center max-w-sm">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
