import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").order("desc").collect();
  },
});

export const listBySpec = query({
  args: { specId: v.id("specs") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_spec", (q) => q.eq("specId", args.specId))
      .order("desc")
      .collect();
  },
});

export const getById = query({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    specId: v.optional(v.id("specs")),
    ideaId: v.optional(v.id("ideas")),
    title: v.string(),
    description: v.optional(v.string()),
    assignee: v.union(v.literal("Kar"), v.literal("Joma")),
    priority: v.union(
      v.literal("low"),
      v.literal("medium"),
      v.literal("high"),
      v.literal("urgent")
    ),
    labels: v.optional(v.array(v.string())),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const id = await ctx.db.insert("tasks", {
      specId: args.specId,
      ideaId: args.ideaId,
      title: args.title,
      description: args.description,
      status: "backlog",
      assignee: args.assignee,
      priority: args.priority,
      labels: args.labels,
      createdAt: now,
      updatedAt: now,
    });
    await ctx.db.insert("activity", {
      entityType: "task",
      entityId: id,
      action: "created",
      details: `Task "${args.title}" created and assigned to ${args.assignee}`,
      actor: args.actor,
      createdAt: now,
    });
    return id;
  },
});

export const update = mutation({
  args: {
    id: v.id("tasks"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    assignee: v.optional(v.union(v.literal("Kar"), v.literal("Joma"))),
    priority: v.optional(
      v.union(
        v.literal("low"),
        v.literal("medium"),
        v.literal("high"),
        v.literal("urgent")
      )
    ),
    labels: v.optional(v.array(v.string())),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const { id, actor, ...fields } = args;
    const now = Date.now();
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Task not found");

    const updates: Record<string, unknown> = { updatedAt: now };
    if (fields.title !== undefined) updates.title = fields.title;
    if (fields.description !== undefined)
      updates.description = fields.description;
    if (fields.assignee !== undefined) updates.assignee = fields.assignee;
    if (fields.priority !== undefined) updates.priority = fields.priority;
    if (fields.labels !== undefined) updates.labels = fields.labels;

    await ctx.db.patch(id, updates);
    await ctx.db.insert("activity", {
      entityType: "task",
      entityId: id,
      action: "updated",
      details: `Task updated`,
      actor,
      createdAt: now,
    });
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("tasks"),
    status: v.union(
      v.literal("backlog"),
      v.literal("in_progress"),
      v.literal("testing"),
      v.literal("done"),
      v.literal("deployed")
    ),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Task not found");

    const oldStatus = existing.status;
    await ctx.db.patch(args.id, { status: args.status, updatedAt: now });
    await ctx.db.insert("activity", {
      entityType: "task",
      entityId: args.id,
      action: "status_changed",
      details: `Status changed from ${oldStatus} to ${args.status}`,
      actor: args.actor,
      createdAt: now,
    });
  },
});

export const remove = mutation({
  args: {
    id: v.id("tasks"),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Task not found");

    await ctx.db.insert("activity", {
      entityType: "task",
      entityId: args.id,
      action: "deleted",
      details: `Task "${existing.title}" deleted`,
      actor: args.actor,
      createdAt: Date.now(),
    });
    await ctx.db.delete(args.id);
  },
});
