import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const ideas = await ctx.db.query("ideas").order("desc").collect();
    return ideas;
  },
});

export const getById = query({
  args: { id: v.id("ideas") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    priority: v.union(
      v.literal("low"),
      v.literal("medium"),
      v.literal("high"),
      v.literal("urgent")
    ),
    createdBy: v.union(v.literal("Kar"), v.literal("Joma")),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const id = await ctx.db.insert("ideas", {
      title: args.title,
      description: args.description,
      status: "draft",
      priority: args.priority,
      createdBy: args.createdBy,
      tags: args.tags,
      createdAt: now,
      updatedAt: now,
    });
    await ctx.db.insert("activity", {
      entityType: "idea",
      entityId: id,
      action: "created",
      details: `Idea "${args.title}" created`,
      actor: args.createdBy,
      createdAt: now,
    });
    return id;
  },
});

export const update = mutation({
  args: {
    id: v.id("ideas"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    priority: v.optional(
      v.union(
        v.literal("low"),
        v.literal("medium"),
        v.literal("high"),
        v.literal("urgent")
      )
    ),
    tags: v.optional(v.array(v.string())),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const { id, actor, ...fields } = args;
    const now = Date.now();
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Idea not found");

    const updates: Record<string, unknown> = { updatedAt: now };
    if (fields.title !== undefined) updates.title = fields.title;
    if (fields.description !== undefined)
      updates.description = fields.description;
    if (fields.priority !== undefined) updates.priority = fields.priority;
    if (fields.tags !== undefined) updates.tags = fields.tags;

    await ctx.db.patch(id, updates);
    await ctx.db.insert("activity", {
      entityType: "idea",
      entityId: id,
      action: "updated",
      details: `Idea updated`,
      actor,
      createdAt: now,
    });
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("ideas"),
    status: v.union(
      v.literal("draft"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("implemented")
    ),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Idea not found");

    const oldStatus = existing.status;
    await ctx.db.patch(args.id, { status: args.status, updatedAt: now });
    await ctx.db.insert("activity", {
      entityType: "idea",
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
    id: v.id("ideas"),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Idea not found");

    await ctx.db.insert("activity", {
      entityType: "idea",
      entityId: args.id,
      action: "deleted",
      details: `Idea "${existing.title}" deleted`,
      actor: args.actor,
      createdAt: Date.now(),
    });
    await ctx.db.delete(args.id);
  },
});
