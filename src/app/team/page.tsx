"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Modal from "@/components/shared/Modal";
import type { Id } from "../../../convex/_generated/dataModel";

type TeamFunction = "engineering" | "design" | "product" | "operations" | "leadership";
type Status = "active" | "idle" | "offline";

const functionConfig: Record<TeamFunction, { label: string; emoji: string; color: string; desc: string }> = {
  leadership: { label: "Leadership", emoji: "👑", color: "border-cyan-500/50 bg-cyan-500/5", desc: "Architecture & coordination" },
  engineering: { label: "Engineering", emoji: "⚡", color: "border-blue-500/50 bg-blue-500/5", desc: "Build & implement" },
  design: { label: "Design", emoji: "🎨", color: "border-pink-500/50 bg-pink-500/5", desc: "Design & experience" },
  product: { label: "Product", emoji: "📋", color: "border-violet-500/50 bg-violet-500/5", desc: "Plan & document" },
  operations: { label: "Operations", emoji: "🛠️", color: "border-orange-500/50 bg-orange-500/5", desc: "Test & deploy" },
};

const statusConfig: Record<Status, { dot: string; label: string; bg: string }> = {
  active: { dot: "bg-emerald-500", label: "Active", bg: "bg-emerald-500/20 text-emerald-400" },
  idle: { dot: "bg-amber-500", label: "Idle", bg: "bg-amber-500/20 text-amber-400" },
  offline: { dot: "bg-gray-500", label: "Offline", bg: "bg-gray-500/20 text-gray-400" },
};

const colorMap: Record<string, string> = {
  cyan: "from-cyan-600 to-cyan-800",
  blue: "from-blue-600 to-blue-800",
  indigo: "from-indigo-600 to-indigo-800",
  amber: "from-amber-600 to-amber-800",
  orange: "from-orange-600 to-orange-800",
  emerald: "from-emerald-600 to-emerald-800",
  pink: "from-pink-600 to-pink-800",
  violet: "from-violet-600 to-violet-800",
  teal: "from-teal-600 to-teal-800",
};

const functionOrder: TeamFunction[] = ["leadership", "engineering", "design", "product", "operations"];

export default function TeamPage() {
  const members = useQuery(api.team.list) ?? [];
  const seedTeam = useMutation(api.team.seed);
  const updateMember = useMutation(api.team.update);
  const removeMember = useMutation(api.team.remove);
  const [selectedId, setSelectedId] = useState<Id<"teamMembers"> | null>(null);
  const [editingTask, setEditingTask] = useState<{ id: Id<"teamMembers">; task: string } | null>(null);
  const [viewMode, setViewMode] = useState<"org" | "grid">("org");
  const [funcFilter, setFuncFilter] = useState<string>("all");

  const selectedMember = selectedId ? members.find((m) => m._id === selectedId) : null;

  // Group by function
  const grouped = functionOrder.map((func) => ({
    ...functionConfig[func],
    key: func,
    members: members.filter((m) => m.function === func),
  })).filter((g) => g.members.length > 0);

  const filteredMembers = funcFilter === "all" ? members : members.filter((m) => m.function === funcFilter);

  const activeCount = members.filter((m) => m.status === "active").length;

  const handleStatusToggle = (id: Id<"teamMembers">, current: Status) => {
    const next: Status = current === "active" ? "idle" : current === "idle" ? "offline" : "active";
    updateMember({ id, status: next });
  };

  const saveTask = () => {
    if (!editingTask) return;
    updateMember({ id: editingTask.id, currentTask: editingTask.task || undefined });
    setEditingTask(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">👥 Team Structure</h1>
          <p className="text-sm text-gray-500 mt-1">
            {members.length} agents · {activeCount} active
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {(["org", "grid"] as const).map((v) => (
              <button key={v} onClick={() => setViewMode(v)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${viewMode === v ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
                {v === "org" ? "🏛️ Org Chart" : "📊 Grid"}
              </button>
            ))}
          </div>
          {members.length === 0 && (
            <button onClick={() => seedTeam({})} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
              🚀 Initialize Team
            </button>
          )}
        </div>
      </div>

      {members.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="text-6xl mb-4">👥</span>
          <h3 className="text-lg font-medium text-gray-300 mb-2">No team members yet</h3>
          <p className="text-sm text-gray-500 mb-6">Click &ldquo;Initialize Team&rdquo; to create the full agent roster</p>
          <button onClick={() => seedTeam({})} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors">
            🚀 Initialize Team
          </button>
        </div>
      ) : viewMode === "org" ? (
        /* ORG CHART VIEW */
        <div className="space-y-8">
          {grouped.map((group) => (
            <div key={group.key}>
              {/* Department Header */}
              <div className={`border ${group.color} rounded-xl p-4 mb-4`}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{group.emoji}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-200">{group.label}</h2>
                    <p className="text-xs text-gray-500">{group.desc} · {group.members.length} agent{group.members.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>
              </div>

              {/* Members in this department */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6">
                {group.members.map((member) => (
                  <div
                    key={member._id}
                    onClick={() => setSelectedId(member._id)}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-5 cursor-pointer hover:border-gray-700 hover:scale-[1.01] transition-all group"
                  >
                    {/* Avatar + Status */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[member.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-2xl shadow-lg`}>
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-200">{member.name}</h3>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleStatusToggle(member._id, member.status); }}
                        className="flex items-center gap-1.5"
                      >
                        <span className={`w-2 h-2 rounded-full ${statusConfig[member.status].dot} animate-pulse`} />
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${statusConfig[member.status].bg}`}>
                          {statusConfig[member.status].label}
                        </span>
                      </button>
                    </div>

                    {/* Specialty */}
                    <p className="text-xs text-gray-400 mb-3">{member.specialty}</p>

                    {/* Current Task */}
                    {member.currentTask ? (
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 mb-3">
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Current Task</p>
                        <p className="text-xs text-gray-300">{member.currentTask}</p>
                      </div>
                    ) : (
                      <div className="bg-gray-800/30 border border-dashed border-gray-700/50 rounded-lg px-3 py-2 mb-3">
                        <p className="text-xs text-gray-600 italic">No active task</p>
                      </div>
                    )}

                    {/* Owner Badge */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-800/50">
                      <span className="text-[10px] text-gray-600">
                        Owned by <span className="text-gray-400">{member.owner}</span>
                      </span>
                      {member.model && (
                        <span className="text-[10px] text-gray-600 font-mono">{member.model}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Org Connections Visualization */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-8">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Reporting Structure</h3>
            <div className="flex flex-col items-center">
              {/* CTO */}
              <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 border border-cyan-500/30 rounded-xl px-6 py-3 mb-2">
                <span className="text-lg mr-2">🐙</span>
                <span className="font-semibold text-cyan-300">Joma</span>
                <span className="text-xs text-cyan-500 ml-2">CTO</span>
              </div>
              <div className="w-px h-6 bg-gray-700" />
              <div className="flex items-start gap-8 relative">
                {/* Connection lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gray-700" />
                {functionOrder.filter((f) => f !== "leadership").map((func) => {
                  const config = functionConfig[func];
                  const count = members.filter((m) => m.function === func).length;
                  return (
                    <div key={func} className="flex flex-col items-center">
                      <div className="w-px h-4 bg-gray-700" />
                      <div className={`border ${config.color} rounded-lg px-4 py-2 text-center`}>
                        <span className="text-sm">{config.emoji}</span>
                        <p className="text-xs font-medium text-gray-300">{config.label}</p>
                        <p className="text-[10px] text-gray-500">{count} agent{count !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GRID VIEW */
        <div>
          <div className="flex gap-2 mb-4">
            {["all", ...functionOrder].map((f) => (
              <button key={f} onClick={() => setFuncFilter(f)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${funcFilter === f ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
                {f === "all" ? "All" : functionConfig[f as TeamFunction].emoji + " " + functionConfig[f as TeamFunction].label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Agent</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Role</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Department</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Current Task</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Owner</th>
                  <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {filteredMembers.map((member) => (
                  <tr key={member._id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorMap[member.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-base`}>
                          {member.avatar}
                        </div>
                        <span className="text-sm font-medium text-gray-200">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-400">{member.role}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs text-gray-500">{functionConfig[member.function]?.emoji} {functionConfig[member.function]?.label}</span>
                    </td>
                    <td className="px-5 py-3">
                      <button onClick={() => handleStatusToggle(member._id, member.status)} className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${statusConfig[member.status].dot}`} />
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig[member.status].bg}`}>{statusConfig[member.status].label}</span>
                      </button>
                    </td>
                    <td className="px-5 py-3">
                      {editingTask?.id === member._id ? (
                        <div className="flex gap-1">
                          <input value={editingTask.task} onChange={(e) => setEditingTask({ ...editingTask, task: e.target.value })} onKeyDown={(e) => e.key === "Enter" && saveTask()} className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-200 w-full focus:outline-none focus:border-blue-500" autoFocus />
                          <button onClick={saveTask} className="text-xs text-blue-400 hover:text-blue-300">✓</button>
                        </div>
                      ) : (
                        <span onClick={() => setEditingTask({ id: member._id, task: member.currentTask ?? "" })} className="text-xs text-gray-500 cursor-pointer hover:text-gray-300">
                          {member.currentTask || "—"}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">{member.owner}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex gap-1 justify-end">
                        <button onClick={() => setSelectedId(member._id)} className="p-1 text-gray-500 hover:text-gray-300 text-xs">👁️</button>
                        <button onClick={() => removeMember({ id: member._id })} className="p-1 text-gray-500 hover:text-red-400 text-xs">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Member Detail Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedId(null)} title={selectedMember ? `${selectedMember.avatar} ${selectedMember.name}` : ""} size="lg">
        {selectedMember && (
          <div className="space-y-6">
            {/* Hero */}
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[selectedMember.color] || "from-gray-600 to-gray-800"} flex items-center justify-center text-3xl shadow-lg`}>
                {selectedMember.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">{selectedMember.name}</h3>
                <p className="text-sm text-gray-400">{selectedMember.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${statusConfig[selectedMember.status].dot}`} />
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig[selectedMember.status].bg}`}>
                    {statusConfig[selectedMember.status].label}
                  </span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-500">{functionConfig[selectedMember.function]?.emoji} {functionConfig[selectedMember.function]?.label}</span>
                </div>
              </div>
            </div>

            {/* Specialty */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Specialty</h4>
              <p className="text-sm text-gray-300">{selectedMember.specialty}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Responsibilities</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMember.responsibilities.map((r) => (
                  <span key={r} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-lg border border-gray-700">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Task */}
            <div className="bg-gray-800/50 rounded-xl p-4">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Current Task</h4>
              <p className="text-sm text-gray-300">{selectedMember.currentTask || "No active task assigned"}</p>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-800">
              <div>
                <p className="text-xs text-gray-500">Owner</p>
                <p className="text-sm text-gray-300">{selectedMember.owner}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">AI Model</p>
                <p className="text-sm text-gray-300 font-mono">{selectedMember.model || "—"}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
