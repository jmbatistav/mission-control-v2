"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import OfficeScene from "@/components/office3d/OfficeScene";
import type { Id } from "../../../convex/_generated/dataModel";

type Status = "active" | "idle" | "offline";

const statusInfo: Record<Status, { label: string; color: string; dotClass: string }> = {
  active: { label: "Working", color: "#10b981", dotClass: "bg-emerald-500 animate-pulse" },
  idle: { label: "Idle", color: "#f59e0b", dotClass: "bg-amber-500" },
  offline: { label: "Offline", color: "#6b7280", dotClass: "bg-gray-600" },
};

export default function Office3DPage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const activeMeetings = useQuery(api.meetings.getActive) ?? [];
  const quickStartMeeting = useMutation(api.meetings.quickStart);
  const endMeeting = useMutation(api.meetings.end);

  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);
  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  // Meeting modal state
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);

  const activeCount = members.filter((m) => m.status === "active").length;
  const idleCount = members.filter((m) => m.status === "idle").length;
  const offlineCount = members.filter((m) => m.status === "offline").length;

  const currentMeeting = activeMeetings.find((m) => m.status === "in_progress");

  const toggleParticipant = (name: string) => {
    setSelectedParticipants((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleStartMeeting = async () => {
    if (!meetingTitle.trim() || selectedParticipants.length === 0) return;
    await quickStartMeeting({
      title: meetingTitle.trim(),
      participants: selectedParticipants,
      location: "meeting_room",
    });
    setShowMeetingModal(false);
    setMeetingTitle("");
    setSelectedParticipants([]);
  };

  const handleEndMeeting = async (meetingId: Id<"meetings">) => {
    await endMeeting({ id: meetingId });
  };

  /* ─── Empty state ─── */
  if (members.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <div className="text-8xl mb-6 animate-bounce">🏗️</div>
        <h2 className="text-xl font-bold text-gray-200 mb-2">The 3D office is empty</h2>
        <p className="text-sm text-gray-500 mb-6">Initialize the team to populate the office</p>
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
      {/* 3D Canvas — full space */}
      <div className="absolute inset-0">
        <OfficeScene
          agents={members.map((m) => ({
            _id: m._id,
            name: m.name,
            role: m.role,
            function: m.function,
            avatar: m.avatar,
            status: m.status,
            color: m.color,
            currentTask: m.currentTask,
          }))}
          activeMeetings={activeMeetings.map((m) => ({
            _id: m._id,
            title: m.title,
            participants: m.participants,
            location: m.location,
            status: m.status,
          }))}
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
          <span className="text-xs text-gray-500">3D</span>
        </div>
      </div>

      {/* Title overlay — top left */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-lg font-bold text-white/90">🏗️ 3D Office</h1>
        <p className="text-xs text-gray-500">Cleverwave HQ — Immersive View</p>
      </div>

      {/* Meeting controls — bottom left */}
      <div className="absolute bottom-4 left-4 z-10">
        {currentMeeting ? (
          <div className="bg-blue-900/80 backdrop-blur-sm border border-blue-600/50 rounded-xl px-4 py-3 max-w-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                Meeting in Progress
              </span>
            </div>
            <p className="text-sm font-medium text-white mb-1">{currentMeeting.title}</p>
            <p className="text-xs text-blue-300 mb-2">
              {currentMeeting.participants.join(", ")}
            </p>
            <button
              onClick={() => handleEndMeeting(currentMeeting._id as Id<"meetings">)}
              className="w-full px-3 py-1.5 bg-red-600/80 hover:bg-red-500 text-white text-xs font-medium rounded-lg transition-colors"
            >
              End Meeting
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowMeetingModal(true)}
            className="px-4 py-2.5 bg-blue-600/80 hover:bg-blue-500 backdrop-blur-sm border border-blue-500/50 text-white text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            <span>🏛️</span>
            <span>Start Meeting</span>
          </button>
        )}
      </div>

      {/* Controls hint — bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2 text-xs text-gray-500">
          🖱️ Drag to orbit • Scroll to zoom • Click agent to inspect
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

      {/* Meeting creation modal */}
      <Modal
        isOpen={showMeetingModal}
        onClose={() => {
          setShowMeetingModal(false);
          setMeetingTitle("");
          setSelectedParticipants([]);
        }}
        title="Start a Meeting"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Meeting Title</label>
            <input
              type="text"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
              placeholder="e.g. Sprint Planning, Design Review..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">
              Participants ({selectedParticipants.length} selected)
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
              {members.map((m) => {
                const isSelected = selectedParticipants.includes(m.name);
                return (
                  <button
                    key={m._id}
                    onClick={() => toggleParticipant(m.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isSelected
                        ? "bg-blue-600/30 border border-blue-500/50 text-blue-200"
                        : "bg-gray-800 border border-gray-700 text-gray-400 hover:border-gray-600"
                    }`}
                  >
                    <span>{m.avatar}</span>
                    <span>{m.name}</span>
                    {isSelected && <span className="ml-auto text-blue-400">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={handleStartMeeting}
            disabled={!meetingTitle.trim() || selectedParticipants.length === 0}
            className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-medium rounded-lg transition-colors"
          >
            🚀 Start Meeting ({selectedParticipants.length} participants)
          </button>
        </div>
      </Modal>
    </div>
  );
}
