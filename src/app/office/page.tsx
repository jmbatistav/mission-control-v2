"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import Office from "@/components/office/Office";
import type { Id } from "../../../convex/_generated/dataModel";

type Status = "active" | "idle" | "offline";

const statusInfo: Record<Status, { label: string; color: string }> = {
  active: { label: "Working", color: "#10b981" },
  idle: { label: "Idle", color: "#f59e0b" },
  offline: { label: "Offline", color: "#6b7280" },
};

export default function OfficePage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);
  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  const activeCount = members.filter((m) => m.status === "active").length;
  const idleCount = members.filter((m) => m.status === "idle").length;
  const offlineCount = members.filter((m) => m.status === "offline").length;

  /* ─── Empty state ─── */
  if (members.length === 0) {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto flex flex-col items-center justify-center h-[70vh]">
        <div className="text-8xl mb-6 animate-bounce">🏢</div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">The office is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Initialize the team to open the office</p>
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
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-4">
      {/* Header + status bar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-white">🏢 Digital Office</h1>
          <p className="text-sm text-gray-500 mt-1">Cleverwave HQ — Live View</p>
        </div>
        <div className="flex items-center gap-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl px-5 py-2.5">
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
            <span className="text-xs text-gray-500">LIVE</span>
          </div>
        </div>
      </div>

      {/* Office floor */}
      <Office
        onSelect={(id) => setSelectedId(id as Id<"teamMembers">)}
        selectedId={selectedId}
      />

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
                    className={`w-2.5 h-2.5 rounded-full ${
                      selectedMember.status === "active"
                        ? "bg-emerald-500 animate-pulse"
                        : selectedMember.status === "idle"
                          ? "bg-amber-500"
                          : "bg-gray-600"
                    }`}
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
