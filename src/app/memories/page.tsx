"use client";

import { useState, useEffect, useMemo } from "react";
import MarkdownRenderer from "@/components/shared/MarkdownRenderer";
import Modal from "@/components/shared/Modal";
import EmptyState from "@/components/shared/EmptyState";

interface MemoryDocument {
  id: string;
  filename: string;
  title: string;
  content: string;
  type: "core" | "daily" | "config";
  date?: string;
  size: number;
  lastModified: number;
}

const typeConfig = {
  core: { emoji: "🧠", color: "border-purple-500/50 bg-purple-500/5", badge: "bg-purple-500/20 text-purple-400", label: "Core" },
  daily: { emoji: "📝", color: "border-blue-500/30 bg-blue-500/5", badge: "bg-blue-500/20 text-blue-400", label: "Daily" },
  config: { emoji: "⚙️", color: "border-amber-500/30 bg-amber-500/5", badge: "bg-amber-500/20 text-amber-400", label: "Config" },
};

function highlightMatches(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "**$1**");
}

function getSearchSnippet(content: string, query: string, contextChars = 120): string[] {
  if (!query.trim()) return [];
  const lower = content.toLowerCase();
  const q = query.toLowerCase();
  const snippets: string[] = [];
  let searchFrom = 0;

  while (snippets.length < 3) {
    const idx = lower.indexOf(q, searchFrom);
    if (idx === -1) break;
    const start = Math.max(0, idx - contextChars);
    const end = Math.min(content.length, idx + query.length + contextChars);
    let snippet = content.slice(start, end).replace(/\n/g, " ");
    if (start > 0) snippet = "..." + snippet;
    if (end < content.length) snippet = snippet + "...";
    snippets.push(snippet);
    searchFrom = idx + query.length;
  }
  return snippets;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function timeAgo(ms: number): string {
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function MemoriesPage() {
  const [documents, setDocuments] = useState<MemoryDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<MemoryDocument | null>(null);
  const [typeFilter, setTypeFilter] = useState<string>("all");

  useEffect(() => {
    fetch("/api/memories")
      .then((r) => r.json())
      .then((data) => { setDocuments(data.documents ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let docs = documents;
    if (typeFilter !== "all") docs = docs.filter((d) => d.type === typeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      docs = docs.filter(
        (d) => d.title.toLowerCase().includes(q) || d.content.toLowerCase().includes(q)
      );
    }
    return docs;
  }, [documents, search, typeFilter]);

  const searchResults = useMemo(() => {
    if (!search.trim()) return new Map<string, string[]>();
    const map = new Map<string, string[]>();
    for (const doc of filtered) {
      const snippets = getSearchSnippet(doc.content, search);
      if (snippets.length > 0) map.set(doc.id, snippets);
    }
    return map;
  }, [filtered, search]);

  const stats = {
    total: documents.length,
    core: documents.filter((d) => d.type === "core").length,
    daily: documents.filter((d) => d.type === "daily").length,
    config: documents.filter((d) => d.type === "config").length,
    totalSize: documents.reduce((sum, d) => sum + d.size, 0),
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto flex items-center justify-center h-64">
        <div className="text-gray-500 animate-pulse">Loading memories...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">🧠 Memories</h1>
          <p className="text-sm text-gray-500 mt-1">
            {stats.total} documents · {formatSize(stats.totalSize)} total
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total", value: stats.total, color: "border-gray-700" },
          { label: "Core", value: stats.core, color: "border-purple-500/50" },
          { label: "Daily", value: stats.daily, color: "border-blue-500/50" },
          { label: "Config", value: stats.config, color: "border-amber-500/50" },
        ].map((s) => (
          <div key={s.label} className={`bg-gray-900 border ${s.color} rounded-xl p-4`}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search across all memories... (titles, content, anything)"
          className="w-full pl-12 pr-4 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-gray-600"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results Count */}
      {search.trim() && (
        <div className="text-sm text-gray-500">
          Found <span className="text-blue-400 font-medium">{filtered.length}</span> document{filtered.length !== 1 ? "s" : ""} matching &ldquo;<span className="text-gray-300">{search}</span>&rdquo;
        </div>
      )}

      {/* Type Filters */}
      <div className="flex gap-2">
        {["all", "core", "daily", "config"].map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              typeFilter === t ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {t !== "all" && <span>{typeConfig[t as keyof typeof typeConfig].emoji}</span>}
            {t === "all" ? `All (${stats.total})` : `${typeConfig[t as keyof typeof typeConfig].label} (${stats[t as keyof typeof stats]})`}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={<span className="text-4xl">🧠</span>}
          title={search ? "No matches found" : "No memories yet"}
          description={search ? "Try a different search term" : "Memories will appear here as they're created"}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((doc) => {
            const config = typeConfig[doc.type];
            const snippets = searchResults.get(doc.id);
            const preview = doc.content.split("\n").filter((l) => l.trim() && !l.startsWith("#")).slice(0, 3).join(" ").slice(0, 200);

            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`bg-gray-900 border ${config.color} rounded-xl p-5 cursor-pointer hover:scale-[1.01] transition-all group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{config.emoji}</span>
                    <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${config.badge}`}>
                      {config.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-600">{formatSize(doc.size)}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>

                {/* Search Snippets or Preview */}
                {snippets && snippets.length > 0 ? (
                  <div className="space-y-1.5 mb-3">
                    {snippets.slice(0, 2).map((snippet, i) => (
                      <p key={i} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1.5 rounded border-l-2 border-blue-500/50">
                        {snippet}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 line-clamp-3 mb-3">{preview}</p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
                  <span className="text-[10px] text-gray-600 font-mono">{doc.filename}</span>
                  <span className="text-[10px] text-gray-600">{timeAgo(doc.lastModified)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Document Viewer Modal */}
      <Modal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        title={selectedDoc?.title ?? ""}
        size="xl"
      >
        {selectedDoc && (
          <div>
            {/* Doc Meta */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
              <span className="text-lg">{typeConfig[selectedDoc.type].emoji}</span>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${typeConfig[selectedDoc.type].badge}`}>
                {typeConfig[selectedDoc.type].label}
              </span>
              <span className="text-xs text-gray-500 font-mono">{selectedDoc.filename}</span>
              <span className="text-xs text-gray-600">·</span>
              <span className="text-xs text-gray-500">{formatSize(selectedDoc.size)}</span>
              <span className="text-xs text-gray-600">·</span>
              <span className="text-xs text-gray-500">Modified {timeAgo(selectedDoc.lastModified)}</span>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none prose-sm">
              <MarkdownRenderer content={selectedDoc.content} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
