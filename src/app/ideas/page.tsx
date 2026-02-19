"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import IdeaCard from "@/components/ideas/IdeaCard";
import IdeaForm from "@/components/ideas/IdeaForm";
import IdeaDetail from "@/components/ideas/IdeaDetail";
import Modal from "@/components/shared/Modal";
import EmptyState from "@/components/shared/EmptyState";

type ViewMode = "list" | null;
type FilterStatus = "all" | "draft" | "approved" | "rejected" | "implemented";

export default function IdeasPage() {
  const ideas = useQuery(api.ideas.list);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedId, setSelectedId] = useState<Id<"ideas"> | null>(null);
  const [editingId, setEditingId] = useState<Id<"ideas"> | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredIdeas =
    ideas?.filter((i: { status: string }) => (filter === "all" ? true : i.status === filter)) ?? [];

  const selectedIdea = ideas?.find((i: { _id: string }) => i._id === editingId);

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">💡 Ideas</h1>
          <p className="text-sm text-gray-500 mt-1">
            Capture and manage your ideas
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          + New Idea
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(
          ["all", "draft", "approved", "rejected", "implemented"] as const
        ).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
              filter === status
                ? "bg-cyan-600/20 text-cyan-400 border border-cyan-500/30"
                : "text-gray-400 hover:text-gray-200 border border-gray-700/50 hover:border-gray-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Grid */}
      {!ideas ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-36 bg-gray-900/50 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : filteredIdeas.length === 0 ? (
        <EmptyState
          icon={<span className="text-5xl">💡</span>}
          title="No ideas yet"
          description="Start capturing your ideas to fuel the pipeline"
          actionLabel="Create First Idea"
          onAction={() => setShowCreate(true)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIdeas.map((idea: any) => (
            <IdeaCard
              key={idea._id}
              idea={idea}
              onClick={() => setSelectedId(idea._id)}
            />
          ))}
        </div>
      )}

      {/* Create Modal */}
      <Modal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Idea"
      >
        <IdeaForm onClose={() => setShowCreate(false)} />
      </Modal>

      {/* Detail Modal */}
      <Modal
        isOpen={selectedId !== null}
        onClose={() => setSelectedId(null)}
        title="Idea Details"
        size="lg"
      >
        {selectedId && (
          <IdeaDetail
            ideaId={selectedId}
            onClose={() => setSelectedId(null)}
            onEdit={() => {
              setEditingId(selectedId);
              setSelectedId(null);
            }}
          />
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={editingId !== null}
        onClose={() => setEditingId(null)}
        title="Edit Idea"
      >
        {editingId && selectedIdea && (
          <IdeaForm
            idea={selectedIdea}
            onClose={() => setEditingId(null)}
          />
        )}
      </Modal>
    </div>
  );
}
