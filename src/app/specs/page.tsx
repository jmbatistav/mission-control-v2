"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import SpecCard from "@/components/specs/SpecCard";
import SpecForm from "@/components/specs/SpecForm";
import SpecDetail from "@/components/specs/SpecDetail";
import Modal from "@/components/shared/Modal";
import EmptyState from "@/components/shared/EmptyState";

type FilterStatus = "all" | "draft" | "review" | "approved" | "changes_requested";

export default function SpecsPage() {
  const specs = useQuery(api.specs.list);
  const ideas = useQuery(api.ideas.list);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedId, setSelectedId] = useState<Id<"specs"> | null>(null);
  const [editingId, setEditingId] = useState<Id<"specs"> | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredSpecs =
    specs?.filter((s) => (filter === "all" ? true : s.status === filter)) ?? [];

  const ideaMap = new Map(ideas?.map((i) => [i._id, i.title]) ?? []);

  const editingSpec = specs?.find((s) => s._id === editingId);

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">📋 Specs</h1>
          <p className="text-sm text-gray-500 mt-1">
            Technical specifications and requirements
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          + New Spec
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(
          ["all", "draft", "review", "approved", "changes_requested"] as const
        ).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
              filter === status
                ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                : "text-gray-400 hover:text-gray-200 border border-gray-800 hover:border-gray-700"
            }`}
          >
            {status.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Grid */}
      {!specs ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gray-900/50 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : filteredSpecs.length === 0 ? (
        <EmptyState
          icon={<span className="text-5xl">📋</span>}
          title="No specs yet"
          description="Create specs to document your ideas in detail"
          actionLabel="Create First Spec"
          onAction={() => setShowCreate(true)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpecs.map((spec) => (
            <SpecCard
              key={spec._id}
              spec={spec}
              ideaTitle={ideaMap.get(spec.ideaId)}
              onClick={() => setSelectedId(spec._id)}
            />
          ))}
        </div>
      )}

      {/* Create Modal */}
      <Modal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        title="New Spec"
        size="lg"
      >
        <SpecForm onClose={() => setShowCreate(false)} />
      </Modal>

      {/* Detail Modal */}
      <Modal
        isOpen={selectedId !== null}
        onClose={() => setSelectedId(null)}
        title="Spec Details"
        size="xl"
      >
        {selectedId && (
          <SpecDetail
            specId={selectedId}
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
        title="Edit Spec"
        size="lg"
      >
        {editingId && editingSpec && (
          <SpecForm
            spec={editingSpec}
            onClose={() => setEditingId(null)}
          />
        )}
      </Modal>
    </div>
  );
}
