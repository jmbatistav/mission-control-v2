"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useActiveUser } from "@/lib/useActiveUser";
import type { Id } from "../../../convex/_generated/dataModel";

interface TaskFormProps {
  task?: {
    _id: Id<"tasks">;
    title: string;
    description?: string;
    assignee: "Kar" | "Joma";
    priority: "low" | "medium" | "high" | "urgent";
    labels?: string[];
    specId?: Id<"specs">;
    ideaId?: Id<"ideas">;
  };
  onClose: () => void;
}

export default function TaskForm({ task, onClose }: TaskFormProps) {
  const [activeUser] = useActiveUser();
  const specs = useQuery(api.specs.list);
  const ideas = useQuery(api.ideas.list);

  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [assignee, setAssignee] = useState<"Kar" | "Joma">(
    task?.assignee ?? activeUser
  );
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "urgent">(
    task?.priority ?? "medium"
  );
  const [labelsInput, setLabelsInput] = useState(
    task?.labels?.join(", ") ?? ""
  );
  const [specId, setSpecId] = useState<string>(task?.specId ?? "");
  const [ideaId, setIdeaId] = useState<string>(task?.ideaId ?? "");
  const [submitting, setSubmitting] = useState(false);

  const createTask = useMutation(api.tasks.create);
  const updateTask = useMutation(api.tasks.update);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const labels = labelsInput
      .split(",")
      .map((l) => l.trim())
      .filter(Boolean);

    try {
      if (task) {
        await updateTask({
          id: task._id,
          title,
          description: description || undefined,
          assignee,
          priority,
          labels,
          actor: activeUser,
        });
      } else {
        await createTask({
          title,
          description: description || undefined,
          assignee,
          priority,
          labels,
          specId: specId ? (specId as Id<"specs">) : undefined,
          ideaId: ideaId ? (ideaId as Id<"ideas">) : undefined,
          actor: activeUser,
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
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="Task title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
          placeholder="Optional description..."
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Assignee
          </label>
          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value as "Kar" | "Joma")}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500"
          >
            <option value="Kar">Kar</option>
            <option value="Joma">Joma</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value as "low" | "medium" | "high" | "urgent"
              )
            }
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Labels
        </label>
        <input
          value={labelsInput}
          onChange={(e) => setLabelsInput(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="bug, feature, ui (comma separated)"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Linked Spec
          </label>
          <select
            value={specId}
            onChange={(e) => setSpecId(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500"
          >
            <option value="">None</option>
            {specs?.map((s: any) => (
              <option key={s._id} value={s._id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Linked Idea
          </label>
          <select
            value={ideaId}
            onChange={(e) => setIdeaId(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-100 focus:outline-none focus:border-cyan-500"
          >
            <option value="">None</option>
            {ideas?.map((i: any) => (
              <option key={i._id} value={i._id}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
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
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {submitting ? "Saving..." : task ? "Update" : "Create Task"}
        </button>
      </div>
    </form>
  );
}
