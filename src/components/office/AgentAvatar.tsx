"use client";

type Status = "active" | "idle" | "offline";

export default function AgentAvatar({ status }: { status: Status }) {
  const isWorking = status === "active";
  const isIdle = status === "idle";
  const isOffline = status === "offline";

  return (
    <div className="relative flex items-end justify-center" style={{ width: 56, height: 64 }}>
      {/* Chair */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width: 40, height: 18 }}
      >
        {/* Chair back */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-t-md bg-gray-700 border border-gray-600"
          style={{ width: 28, height: 10 }}
        />
        {/* Chair seat */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-sm bg-gray-700 border border-gray-600" style={{ width: 32, height: 6 }} />
        {/* Chair leg */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-600" style={{ width: 3, height: 4 }} />
        {/* Wheels */}
        <div className="absolute -bottom-1 left-1 w-2 h-2 rounded-full bg-gray-600" />
        <div className="absolute -bottom-1 right-1 w-2 h-2 rounded-full bg-gray-600" />
      </div>

      {/* Body */}
      <div
        className={`relative z-10 flex flex-col items-center transition-opacity duration-300 ${isOffline ? "opacity-40" : "opacity-100"}`}
        style={{ marginBottom: 8 }}
      >
        {/* Head */}
        <div className="relative">
          <div
            className="rounded-full bg-amber-300 border-2 border-amber-400"
            style={{ width: 22, height: 22 }}
          >
            {/* Eyes */}
            {isOffline ? (
              <>
                <div className="absolute top-2 left-1.5 w-3 h-0.5 rounded bg-gray-800" />
                <div className="absolute top-2 right-1.5 w-3 h-0.5 rounded bg-gray-800" />
              </>
            ) : (
              <>
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-800" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-800" />
              </>
            )}
            {/* Mouth */}
            {isWorking ? (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded bg-gray-800" />
            ) : isIdle ? (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b-full border-b-2 border-x-2 border-gray-800 border-t-0" />
            ) : null}
          </div>
          {/* Zzz for offline */}
          {isOffline && (
            <div className="absolute -top-3 -right-3 text-[10px] text-gray-500 font-bold animate-pulse">
              z<span className="text-[8px] ml-0.5 opacity-60">z</span>
            </div>
          )}
        </div>

        {/* Torso */}
        <div
          className="rounded-b-md bg-gray-700 border border-gray-600 -mt-1"
          style={{ width: 24, height: 16 }}
        />

        {/* Arms */}
        <div className="absolute top-6 flex justify-between" style={{ width: 44 }}>
          {/* Left arm */}
          <div
            className={`bg-amber-300 rounded-full ${isWorking ? "animate-[typing-left_0.4s_ease-in-out_infinite_alternate]" : ""}`}
            style={{ width: 6, height: 14, borderRadius: 3, transform: isWorking ? undefined : "rotate(15deg)" }}
          />
          {/* Right arm */}
          <div
            className={`bg-amber-300 rounded-full ${isWorking ? "animate-[typing-right_0.4s_ease-in-out_infinite_alternate-reverse]" : ""}`}
            style={{ width: 6, height: 14, borderRadius: 3, transform: isWorking ? undefined : "rotate(-15deg)" }}
          />
        </div>
      </div>

      {/* Typing keyframes injected via style tag */}
      <style jsx>{`
        @keyframes typing-left {
          0% { transform: rotate(20deg) translateY(0px); }
          100% { transform: rotate(10deg) translateY(-2px); }
        }
        @keyframes typing-right {
          0% { transform: rotate(-20deg) translateY(0px); }
          100% { transform: rotate(-10deg) translateY(-2px); }
        }
      `}</style>
    </div>
  );
}
