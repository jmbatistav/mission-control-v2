"use client";

const avatarConfig: Record<string, { bg: string; text: string; initial: string }> = {
  Kar: { bg: "bg-violet-600", text: "text-violet-100", initial: "K" },
  Joma: { bg: "bg-cyan-600", text: "text-cyan-100", initial: "J" },
};

export default function AssigneeAvatar({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const config = avatarConfig[name] || { bg: "bg-gray-600", text: "text-gray-100", initial: "?" };
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${config.bg} ${config.text} rounded-full flex items-center justify-center font-semibold`}
      title={name}
    >
      {config.initial}
    </div>
  );
}
