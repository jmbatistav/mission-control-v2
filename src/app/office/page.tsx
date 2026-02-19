"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import type { Id } from "../../../convex/_generated/dataModel";

type Status = "active" | "idle" | "offline";
type TeamFunction = "engineering" | "design" | "product" | "operations" | "leadership";

const statusInfo: Record<Status, { dot: string; label: string; glow: string; deskLight: string }> = {
  active: { dot: "bg-emerald-500", label: "Working", glow: "shadow-emerald-500/30 shadow-lg", deskLight: "bg-emerald-500/20" },
  idle: { dot: "bg-amber-500", label: "Idle", glow: "shadow-amber-500/20 shadow-md", deskLight: "bg-amber-500/10" },
  offline: { dot: "bg-gray-600", label: "Offline", glow: "", deskLight: "bg-gray-800/50" },
};

const colorGradients: Record<string, { chair: string; monitor: string; accent: string }> = {
  cyan: { chair: "from-cyan-700 to-cyan-900", monitor: "border-cyan-500/40", accent: "bg-cyan-500" },
  blue: { chair: "from-blue-700 to-blue-900", monitor: "border-blue-500/40", accent: "bg-blue-500" },
  indigo: { chair: "from-indigo-700 to-indigo-900", monitor: "border-indigo-500/40", accent: "bg-indigo-500" },
  amber: { chair: "from-amber-700 to-amber-900", monitor: "border-amber-500/40", accent: "bg-amber-500" },
  orange: { chair: "from-orange-700 to-orange-900", monitor: "border-orange-500/40", accent: "bg-orange-500" },
  emerald: { chair: "from-emerald-700 to-emerald-900", monitor: "border-emerald-500/40", accent: "bg-emerald-500" },
  pink: { chair: "from-pink-700 to-pink-900", monitor: "border-pink-500/40", accent: "bg-pink-500" },
  violet: { chair: "from-violet-700 to-violet-900", monitor: "border-violet-500/40", accent: "bg-violet-500" },
  teal: { chair: "from-teal-700 to-teal-900", monitor: "border-teal-500/40", accent: "bg-teal-500" },
};

const funcLabels: Record<TeamFunction, string> = {
  leadership: "👑 Leadership",
  engineering: "⚡ Engineering",
  design: "🎨 Design",
  product: "📋 Product",
  operations: "🛠️ Operations",
};

/* ─── Desk / Workstation Component ─── */
function Workstation({
  member,
  onClick,
}: {
  member: {
    _id: Id<"teamMembers">;
    name: string;
    role: string;
    avatar: string;
    color: string;
    status: Status;
    function: TeamFunction;
    currentTask?: string;
    model?: string;
  };
  onClick: () => void;
}) {
  const si = statusInfo[member.status];
  const colors = colorGradients[member.color] || colorGradients.blue;
  const isWorking = member.status === "active";
  const isIdle = member.status === "idle";

  return (
    <button
      onClick={onClick}
      className={`relative group focus:outline-none transition-transform hover:scale-105 ${member.status === "offline" ? "opacity-50" : ""}`}
    >
      {/* Desk surface */}
      <div className="w-48 h-56 relative">
        {/* Ambient glow under desk when active */}
        {isWorking && (
          <div className="absolute -inset-2 bg-gradient-to-t from-transparent via-transparent to-transparent rounded-2xl animate-pulse opacity-30"
            style={{ background: `radial-gradient(ellipse at center bottom, ${member.color === "cyan" ? "#06b6d4" : member.color === "blue" ? "#3b82f6" : member.color === "amber" ? "#f59e0b" : member.color === "emerald" ? "#10b981" : member.color === "pink" ? "#ec4899" : member.color === "violet" ? "#8b5cf6" : member.color === "orange" ? "#f97316" : member.color === "indigo" ? "#6366f1" : member.color === "teal" ? "#14b8a6" : "#6b7280"}20, transparent 70%)` }}
          />
        )}

        {/* Desk */}
        <div className="absolute bottom-0 left-2 right-2 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg border border-gray-600/50 shadow-md">
          {/* Desk legs */}
          <div className="absolute -bottom-3 left-3 w-2 h-3 bg-gray-600 rounded-b" />
          <div className="absolute -bottom-3 right-3 w-2 h-3 bg-gray-600 rounded-b" />
          {/* Desk items */}
          <div className="absolute top-2 left-3 w-6 h-4 bg-gray-600/50 rounded-sm" title="Keyboard" />
          <div className="absolute top-3 right-3 w-3 h-3 bg-gray-600/30 rounded-full" title="Mouse" />
          {/* Coffee mug (only if active/idle) */}
          {member.status !== "offline" && (
            <div className="absolute top-1 right-10">
              <div className="w-3 h-4 bg-gray-500/40 rounded-b-sm rounded-t-lg border border-gray-500/30" />
              {isWorking && (
                <div className="absolute -top-2 left-0.5 text-[6px] opacity-60 animate-bounce">☕</div>
              )}
            </div>
          )}
        </div>

        {/* Monitor */}
        <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 w-28 h-20 bg-gray-900 rounded-lg border-2 ${colors.monitor} ${si.glow} overflow-hidden`}>
          {/* Monitor stand */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-4 bg-gray-700" />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-700 rounded-full" />

          {/* Screen content */}
          {member.status === "offline" ? (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-700 rounded-full" />
            </div>
          ) : isWorking ? (
            <div className="w-full h-full p-1.5 bg-gray-950">
              {/* Fake code lines */}
              <div className="space-y-1 animate-pulse">
                <div className={`h-1 ${colors.accent} opacity-40 rounded w-[70%]`} />
                <div className="h-1 bg-gray-600 opacity-30 rounded w-[90%]" />
                <div className={`h-1 ${colors.accent} opacity-30 rounded w-[50%]`} />
                <div className="h-1 bg-gray-600 opacity-30 rounded w-[80%]" />
                <div className={`h-1 ${colors.accent} opacity-40 rounded w-[60%]`} />
                <div className="h-1 bg-gray-600 opacity-20 rounded w-[45%]" />
                <div className={`h-1 ${colors.accent} opacity-30 rounded w-[75%]`} />
              </div>
              {/* Blinking cursor */}
              <div className="mt-1 flex items-center gap-0.5">
                <div className={`w-1 h-2 ${colors.accent} opacity-80 animate-[pulse_1s_ease-in-out_infinite]`} />
              </div>
            </div>
          ) : (
            <div className="w-full h-full p-1.5 bg-gray-950 flex items-center justify-center">
              {/* Screensaver / idle */}
              <div className={`w-4 h-4 ${colors.accent} opacity-20 rounded-full animate-ping`} />
            </div>
          )}

          {/* Monitor power LED */}
          <div className={`absolute bottom-0.5 right-1 w-1 h-1 rounded-full ${si.dot} ${isWorking ? "animate-pulse" : ""}`} />
        </div>

        {/* Chair */}
        <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-14 h-8 bg-gradient-to-b ${colors.chair} rounded-t-xl rounded-b-lg border border-gray-600/30 shadow-inner`} />

        {/* Agent Avatar (sitting in chair) */}
        <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${colors.chair} flex items-center justify-center text-xl border-2 border-gray-600/50 ${isWorking ? "animate-[bounce_3s_ease-in-out_infinite]" : ""} z-10`}>
          {member.avatar}
        </div>

        {/* Status indicator above head */}
        <div className="absolute bottom-[152px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className={`w-2.5 h-2.5 rounded-full ${si.dot} ${isWorking ? "animate-pulse" : ""} ring-2 ring-gray-950`} />
        </div>

        {/* Name plate on desk */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-gray-800/90 px-2 py-0.5 rounded text-[10px] font-medium text-gray-300 border border-gray-700/50 whitespace-nowrap z-20">
          {member.name}
        </div>
      </div>

      {/* Hover tooltip */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
        <div className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
          <p className="text-xs font-semibold text-gray-200">{member.name}</p>
          <p className="text-[10px] text-gray-400">{member.role}</p>
          {member.currentTask && (
            <p className="text-[10px] text-blue-400 mt-1 max-w-[180px] truncate">📌 {member.currentTask}</p>
          )}
          <div className="flex items-center gap-1 mt-1">
            <span className={`w-1.5 h-1.5 rounded-full ${si.dot}`} />
            <span className="text-[10px] text-gray-500">{si.label}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ─── Status Bar Component ─── */
function StatusBar({ members }: { members: any[] }) {
  const active = members.filter((m) => m.status === "active").length;
  const idle = members.filter((m) => m.status === "idle").length;
  const offline = members.filter((m) => m.status === "offline").length;

  return (
    <div className="flex items-center gap-6 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm text-gray-300"><span className="font-bold text-emerald-400">{active}</span> Working</span>
      </div>
      <div className="w-px h-4 bg-gray-700" />
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span className="text-sm text-gray-300"><span className="font-bold text-amber-400">{idle}</span> Idle</span>
      </div>
      <div className="w-px h-4 bg-gray-700" />
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        <span className="text-sm text-gray-300"><span className="font-bold text-gray-400">{offline}</span> Offline</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-gray-500">Office Live</span>
      </div>
    </div>
  );
}

/* ─── Office Floor ─── */
function OfficeZone({
  title,
  emoji,
  borderColor,
  children,
}: {
  title: string;
  emoji: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`border ${borderColor} rounded-2xl p-6 bg-gray-900/30 backdrop-blur-sm`}>
      {/* Zone sign */}
      <div className="flex items-center gap-2 mb-6">
        <div className={`px-3 py-1 rounded-lg bg-gray-800/80 border ${borderColor}`}>
          <span className="text-sm">{emoji}</span>
          <span className="text-xs font-semibold text-gray-300 ml-2">{title}</span>
        </div>
        <div className={`flex-1 h-px ${borderColor.replace("border-", "bg-").replace("/30", "/20")}`} />
      </div>
      {/* Desks */}
      <div className="flex flex-wrap gap-6 justify-center">
        {children}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function OfficePage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);

  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  const leadership = members.filter((m) => m.function === "leadership");
  const engineering = members.filter((m) => m.function === "engineering");
  const design = members.filter((m) => m.function === "design");
  const product = members.filter((m) => m.function === "product");
  const operations = members.filter((m) => m.function === "operations");

  if (members.length === 0) {
    return (
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-[70vh]">
        <div className="text-8xl mb-6 animate-bounce">🏢</div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">The office is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Initialize the team to populate the office</p>
        <button onClick={() => seedTeam({})} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors">
          🚀 Open the Office
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">🏢 Digital Office</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time view of your team at work</p>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar members={members} />

      {/* Office Floor Plan */}
      <div className="relative bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 rounded-2xl border border-gray-800 p-8 space-y-8 overflow-hidden">
        {/* Floor grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floor label */}
        <div className="relative text-center mb-4">
          <span className="text-xs text-gray-600 tracking-[0.3em] uppercase">Cleverwave HQ — Floor 1</span>
        </div>

        {/* Leadership - Center top (CTO office) */}
        {leadership.length > 0 && (
          <OfficeZone title="CTO Office" emoji="👑" borderColor="border-cyan-500/30">
            {leadership.map((m) => (
              <Workstation key={m._id} member={m as any} onClick={() => setSelectedId(m._id)} />
            ))}
          </OfficeZone>
        )}

        {/* Engineering Bay */}
        {engineering.length > 0 && (
          <OfficeZone title="Engineering Bay" emoji="⚡" borderColor="border-blue-500/30">
            {engineering.map((m) => (
              <Workstation key={m._id} member={m as any} onClick={() => setSelectedId(m._id)} />
            ))}
          </OfficeZone>
        )}

        {/* Bottom row: Design Studio + Product Lab + Ops Center */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {design.length > 0 && (
            <OfficeZone title="Design Studio" emoji="🎨" borderColor="border-pink-500/30">
              {design.map((m) => (
                <Workstation key={m._id} member={m as any} onClick={() => setSelectedId(m._id)} />
              ))}
            </OfficeZone>
          )}
          {product.length > 0 && (
            <OfficeZone title="Product Lab" emoji="📋" borderColor="border-violet-500/30">
              {product.map((m) => (
                <Workstation key={m._id} member={m as any} onClick={() => setSelectedId(m._id)} />
              ))}
            </OfficeZone>
          )}
          {operations.length > 0 && (
            <OfficeZone title="Ops Center" emoji="🛠️" borderColor="border-orange-500/30">
              {operations.map((m) => (
                <Workstation key={m._id} member={m as any} onClick={() => setSelectedId(m._id)} />
              ))}
            </OfficeZone>
          )}
        </div>

        {/* Water cooler / break area decoration */}
        <div className="relative flex justify-center gap-8 py-4">
          <div className="text-center opacity-40">
            <span className="text-2xl">🚰</span>
            <p className="text-[9px] text-gray-600 mt-1">Water Cooler</p>
          </div>
          <div className="text-center opacity-40">
            <span className="text-2xl">🪴</span>
            <p className="text-[9px] text-gray-600 mt-1">Plant</p>
          </div>
          <div className="text-center opacity-40">
            <span className="text-2xl">☕</span>
            <p className="text-[9px] text-gray-600 mt-1">Coffee Bar</p>
          </div>
          <div className="text-center opacity-40">
            <span className="text-2xl">🪴</span>
            <p className="text-[9px] text-gray-600 mt-1">Plant</p>
          </div>
        </div>
      </div>

      {/* Quick Status Strip */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Quick Status</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {members.map((m) => {
            const si = statusInfo[m.status];
            return (
              <button
                key={m._id}
                onClick={() => setSelectedId(m._id)}
                className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="relative">
                  <span className="text-2xl">{m.avatar}</span>
                  <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${si.dot} ring-2 ring-gray-900 ${m.status === "active" ? "animate-pulse" : ""}`} />
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{m.name}</span>
                {m.currentTask && (
                  <span className="text-[8px] text-blue-400 max-w-[80px] truncate">📌 {m.currentTask}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Agent Detail Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedId(null)} title="" size="md">
        {selectedMember && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorGradients[selectedMember.color]?.chair || "from-gray-600 to-gray-800"} flex items-center justify-center text-3xl shadow-lg`}>
                {selectedMember.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{selectedMember.name}</h3>
                <p className="text-sm text-gray-400">{selectedMember.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${statusInfo[selectedMember.status].dot} ${selectedMember.status === "active" ? "animate-pulse" : ""}`} />
                  <span className="text-xs text-gray-500">{statusInfo[selectedMember.status].label}</span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-500">{funcLabels[selectedMember.function]}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Specialty</p>
              <p className="text-sm text-gray-300">{selectedMember.specialty}</p>
            </div>

            {selectedMember.currentTask && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-xs text-blue-400 uppercase tracking-wider mb-1">Current Task</p>
                <p className="text-sm text-gray-200">{selectedMember.currentTask}</p>
              </div>
            )}

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Responsibilities</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedMember.responsibilities.map((r: string) => (
                  <span key={r} className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">{r}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-800">
              <span className="text-xs text-gray-500">Owned by <span className="text-gray-400">{selectedMember.owner}</span></span>
              {selectedMember.model && <span className="text-xs text-gray-600 font-mono">{selectedMember.model}</span>}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
