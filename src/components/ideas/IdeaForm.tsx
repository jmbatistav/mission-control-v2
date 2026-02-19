"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useActiveUser } from "@/lib/useActiveUser";
import type { Id } from "../../../convex/_generated/dataModel";

interface IdeaFormProps {
  idea?: {
    _id: Id<"ideas">;
    title: string;
    description: string;
    priority: "low" | "medium" | "high" | "urgent";
    tags?: string[];
  };
  onClose: () => void;
}

export default function IdeaForm({ idea, onClose }: IdeaFormProps) {
  const [activeUser] = useActiveUser();
  const [title, setTitle] = useState(idea?.title ?? "");
  const [description, setDescription] = useState(idea?.description ?? "");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "urgent">(
    idea?.priority ?? "medium"
  );
  const [tagsInput, setTagsInput] = useState(idea?.tags?.join(", ") ?? "");
  const [submitting, setSubmitting] = useState(false);

  const createIdea = useMutation(api.ideas.create);
  const updateIdea = useMutation(api.ideas.update);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      if (idea) {
        await updateIdea({
          id: idea._id,
          title,
          description,
          priority,
          tags,
          actor: activeUser,
        });
      } else {
        await createIdea({
          title,
          description,
          priority,
          createdBy: activeUser,
          tags,
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
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="What's the idea?"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          placeholder="Describe the idea in detail..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Priority
        </label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high" | "urgent")
          }
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Tags
        </label>
        <input
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="frontend, backend, design (comma separated)"
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
          disabled={submitting}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {submitting ? "Saving..." : idea ? "Update" : "Create Idea"}
        </button>
      </div>
    </form>
  );
}
