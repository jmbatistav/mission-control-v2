/* ─────────────────────────────────────────────
   /office2d — 8-Bit Retro Digital Office
   ─────────────────────────────────────────────*/

"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import Office2D from "@/components/office2d/Office2D";
import { OfficeStateManager } from "@/components/office2d/OfficeStateManager";
import type { Agent2D, Meeting2D, AgentPhysicalState2D } from "@/components/office2d/OfficeStateManager";
import type { Id } from "../../../convex/_generated/dataModel";

type Status = "active" | "idle" | "offline";

const statusInfo: Record<Status, { label: string; dotClass: string }> = {
  active: { label: "Working", dotClass: "bg-emerald-500 animate-pulse" },
  idle: { label: "Idle", dotClass: "bg-amber-500" },
  offline: { label: "Offline", dotClass: "bg-gray-600" },
};

export default function Office2DPage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const activeMeetings = useQuery(api.meetings.getActive) ?? [];

  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);
  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  const activeCount = members.filter((m) => m.status === "active").length;
  const idleCount = members.filter((m) => m.status === "idle").length;
  const offlineCount = members.filter((m) => m.status === "offline").length;

  const currentMeeting = activeMeetings.find((m) => m.status === "in_progress");

  // State manager (handles phase transitions & autonomous behavior)
  const stateManagerRef = useRef<OfficeStateManager | null>(null);
  const [agentStates, setAgentStates] = useState<AgentPhysicalState2D[]>([]);

  // Map Convex data to 2D types (stable references)
  const agents2D: Agent2D[] = useMemo(
    () =>
      members.map((m) => ({
        _id: m._id,
        name: m.name,
        role: m.role,
        function: m.function,
        avatar: m.avatar,
        status: m.status,
        color: m.color,
        currentTask: m.currentTask,
      })),
    [members]
  );

  const meetings2D: Meeting2D[] = useMemo(
    () =>
      activeMeetings.map((m) => ({
        _id: m._id,
        title: m.title,
        participants: m.participants,
        location: m.location,
        status: m.status,
      })),
    [activeMeetings]
  );

  // Initialize state manager + sync data + compute loop
  useEffect(() => {
    const mgr = new OfficeStateManager();
    stateManagerRef.current = mgr;
    mgr.start();
    mgr.updateData(agents2D, meetings2D);

    // Initial compute
    setAgentStates(mgr.computeStates());

    // Compute states periodically
    const interval = setInterval(() => {
      const states = mgr.computeStates();
      setAgentStates(states);
    }, 100);

    return () => {
      clearInterval(interval);
      mgr.stop();
      stateManagerRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync Convex data changes into state manager
  useEffect(() => {
    const mgr = stateManagerRef.current;
    if (!mgr) return;
    mgr.updateData(agents2D, meetings2D);
  }, [agents2D, meetings2D]);

  /* ─── Empty state ─── */
  if (members.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-8xl mb-6 animate-bounce">👾</div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">The 8-bit office is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Initialize the team to populate the pixel office</p>
        <button
          onClick={() => seedTeam({})}
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-colors"
        >
          🚀 Open the Office
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[calc(100vh-1rem)]">
      {/* PixiJS Canvas — full space */}
      <div className="absolute inset-0">
        <Office2D
          agentStates={agentStates}
          onAgentClick={(id) => setSelectedId(id as Id<"teamMembers">)}
          selectedId={selectedId}
        />
      </div>

      {/* Status bar overlay — top right */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl px-5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm">
            <span className="font-bold text-emerald-400">{activeCount}</span>{" "}
            <span className="text-gray-500">Working</span>
          </span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-sm">
            <span className="font-bold text-amber-400">{idleCount}</span>{" "}
            <span className="text-gray-500">Idle</span>
          </span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <span className="text-sm">
            <span className="font-bold text-gray-400">{offlineCount}</span>{" "}
            <span className="text-gray-500">Off</span>
          </span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-gray-500">2D</span>
        </div>
      </div>

      {/* Title overlay — top left */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-lg font-bold text-white/90">👾 8-Bit Office</h1>
        <p className="text-xs text-gray-500">Cleverwave HQ — Retro View</p>
      </div>

      {/* Meeting info — bottom left */}
      {currentMeeting && (
        <div className="absolute bottom-4 left-4 z-10">
          <div className="bg-blue-900/80 backdrop-blur-sm border border-blue-600/50 rounded-xl px-4 py-3 max-w-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                Meeting in Progress
              </span>
            </div>
            <p className="text-sm font-medium text-white mb-1">{currentMeeting.title}</p>
            <p className="text-xs text-blue-300">
              {currentMeeting.participants.join(", ")}
            </p>
          </div>
        </div>
      )}

      {/* Controls hint — bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2 text-xs text-gray-500">
          🖱️ Drag to pan • Scroll to zoom • ⌨️ Arrow keys • Click agent to inspect
        </div>
      </div>

      {/* Agent detail modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedId(null)} title="" size="md">
        {selectedMember && (
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center text-3xl shadow-lg border border-gray-700">
                {selectedMember.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{selectedMember.name}</h3>
                <p className="text-sm text-gray-400">{selectedMember.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${statusInfo[selectedMember.status as Status].dotClass}`}
                  />
                  <span className="text-xs text-gray-500">
                    {statusInfo[selectedMember.status as Status].label}
                  </span>
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
                  <span key={r} className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
              <span className="text-xs text-gray-500">
                Owned by <span className="text-gray-400">{selectedMember.owner}</span>
              </span>
              {selectedMember.model && (
                <span className="text-xs text-gray-600 font-mono">{selectedMember.model}</span>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
