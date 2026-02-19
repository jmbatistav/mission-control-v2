"use client";

type Status = "active" | "idle" | "offline";

const colorMap: Record<string, string> = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  amber: "#f59e0b",
  emerald: "#10b981",
  pink: "#ec4899",
  violet: "#8b5cf6",
  orange: "#f97316",
  indigo: "#6366f1",
  teal: "#14b8a6",
};

export default function Desk({
  status,
  color,
}: {
  status: Status;
  color: string;
}) {
  const isWorking = status === "active";
  const isOffline = status === "offline";
  const accent = colorMap[color] ?? "#9ca3af";

  return (
    <div className="relative" style={{ width: 120, height: 70 }}>
      {/* Desk surface */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-md border border-gray-600"
        style={{
          height: 28,
          background: "linear-gradient(180deg, #44403c 0%, #3a3733 100%)",
        }}
      >
        {/* Desk front panel */}
        <div
          className="absolute bottom-0 left-2 right-2 rounded-b-sm bg-gray-700/60 border-t border-gray-600/40"
          style={{ height: 10 }}
        >
          {/* Drawer knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1.5 rounded-full bg-gray-500" />
        </div>
      </div>

      {/* Monitor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Monitor stand */}
        <div className="w-1.5 h-3 bg-gray-600" />
        {/* Monitor base */}
        <div className="w-6 h-1 rounded-full bg-gray-600 -mt-px" />
        {/* Screen */}
        <div
          className="absolute -top-[30px] w-[52px] h-[30px] rounded-sm border border-gray-600 overflow-hidden flex items-center justify-center"
          style={{
            background: isOffline ? "#030712" : "#0c1222",
            boxShadow: isWorking ? `0 0 12px 2px ${accent}30, 0 0 4px 1px ${accent}20` : "none",
          }}
        >
          {isWorking ? (
            /* Code lines on screen */
            <div className="flex flex-col gap-[2px] px-1.5 py-1 w-full">
              <div className="h-[2px] rounded-full" style={{ background: accent, width: "70%", opacity: 0.8 }} />
              <div className="h-[2px] rounded-full bg-gray-600" style={{ width: "50%", opacity: 0.5 }} />
              <div className="h-[2px] rounded-full" style={{ background: accent, width: "85%", opacity: 0.6 }} />
              <div className="h-[2px] rounded-full bg-gray-600" style={{ width: "40%", opacity: 0.4 }} />
              <div className="h-[2px] rounded-full" style={{ background: accent, width: "60%", opacity: 0.7 }} />
              {/* Blinking cursor */}
              <div
                className="h-[3px] w-[2px] animate-pulse rounded-sm"
                style={{ background: accent }}
              />
            </div>
          ) : status === "idle" ? (
            /* Screensaver dot */
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ background: accent, opacity: 0.3 }}
            />
          ) : null}
        </div>
        {/* Power LED */}
        <div
          className={`absolute -top-[2px] w-1 h-1 rounded-full ${isWorking ? "animate-pulse" : ""}`}
          style={{ background: isWorking ? "#10b981" : isOffline ? "#374151" : "#f59e0b" }}
        />
      </div>

      {/* Keyboard */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 mt-1" style={{ transform: "translateX(-50%) translateY(-1px)" }}>
        <div
          className="rounded-[2px] border border-gray-600"
          style={{ width: 30, height: 10, background: "#1f2937", marginTop: 2 }}
        >
          {isWorking && (
            <div className="flex flex-wrap gap-[1px] p-[1px]">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-[3px] h-[2px] rounded-[0.5px] bg-gray-500"
                  style={{
                    opacity: i % 2 === 0 ? 0.8 : 0.4,
                    animation: isWorking ? `key-press-${i % 3} 0.6s ease-in-out infinite ${i * 0.1}s` : "none",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mouse */}
      <div
        className="absolute bottom-7 rounded-full bg-gray-700 border border-gray-600"
        style={{ width: 7, height: 10, right: 18, transform: "translateY(-1px)" }}
      />

      {/* Coffee mug */}
      <div className="absolute bottom-7 left-3" style={{ transform: "translateY(-1px)" }}>
        <div className="relative">
          <div className="w-[8px] h-[10px] rounded-b-sm bg-gray-500 border border-gray-400" />
          {/* Mug handle */}
          <div className="absolute top-[1px] -right-[3px] w-[4px] h-[5px] rounded-r-full border-r border-t border-b border-gray-400" />
          {/* Steam */}
          {isWorking && (
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-[1px]">
              <div className="w-[1px] h-[4px] bg-gray-400/30 animate-pulse rounded" />
              <div className="w-[1px] h-[3px] bg-gray-400/20 animate-pulse rounded" style={{ animationDelay: "0.3s" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
