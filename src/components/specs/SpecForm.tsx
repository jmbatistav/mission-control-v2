"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useActiveUser } from "@/lib/useActiveUser";
import type { Id } from "../../../convex/_generated/dataModel";

interface SpecFormProps {
  spec?: {
    _id: Id<"specs">;
    ideaId: Id<"ideas">;
    title: string;
    content: string;
  };
  preselectedIdeaId?: Id<"ideas">;
  onClose: () => void;
}

export default function SpecForm({
  spec,
  preselectedIdeaId,
  onClose,
}: SpecFormProps) {
  const [activeUser] = useActiveUser();
  const ideas = useQuery(api.ideas.list);
  const [ideaId, setIdeaId] = useState<string>(
    spec?.ideaId ?? preselectedIdeaId ?? ""
  );
  const [title, setTitle] = useState(spec?.title ?? "");
  const [content, setContent] = useState(spec?.content ?? "");
  const [submitting, setSubmitting] = useState(false);

  const createSpec = useMutation(api.specs.create);
  const updateSpec = useMutation(api.specs.update);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ideaId) return;
    setSubmitting(true);

    try {
      if (spec) {
        await updateSpec({
          id: spec._id,
          title,
          content,
          actor: activeUser,
        });
      } else {
        await createSpec({
          ideaId: ideaId as Id<"ideas">,
          title,
          content,
          createdBy: activeUser,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Linked Idea
        </label>
        <select
          value={ideaId}
          onChange={(e) => setIdeaId(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select an idea...</option>
          {ideas?.map((idea: any) => (
            <option key={idea._id} value={idea._id}>
              {idea.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Spec title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Content (Markdown)
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 font-mono focus:outline-none focus:border-blue-500 transition-colors resize-none"
          placeholder="Write your spec in markdown..."
        />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting || !ideaId}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {submitting ? "Saving..." : spec ? "Update" : "Create Spec"}
        </button>
      </div>
    </form>
  );
}
