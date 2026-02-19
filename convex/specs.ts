import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("specs").order("desc").collect();
  },
});

export const listByIdea = query({
  args: { ideaId: v.id("ideas") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("specs")
      .withIndex("by_idea", (q) => q.eq("ideaId", args.ideaId))
      .order("desc")
      .collect();
  },
});

export const getById = query({
  args: { id: v.id("specs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    ideaId: v.id("ideas"),
    title: v.string(),
    content: v.string(),
    createdBy: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const id = await ctx.db.insert("specs", {
      ideaId: args.ideaId,
      title: args.title,
      content: args.content,
      version: 1,
      status: "draft",
      createdBy: args.createdBy,
      createdAt: now,
      updatedAt: now,
    });
    await ctx.db.insert("activity", {
      entityType: "spec",
      entityId: id,
      action: "created",
      details: `Spec "${args.title}" created`,
      actor: args.createdBy,
      createdAt: now,
    });
    return id;
  },
});

export const update = mutation({
  args: {
    id: v.id("specs"),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const { id, actor, ...fields } = args;
    const now = Date.now();
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Spec not found");

    const updates: Record<string, unknown> = { updatedAt: now };
    if (fields.title !== undefined) updates.title = fields.title;
    if (fields.content !== undefined) {
      updates.content = fields.content;
      updates.version = existing.version + 1;
    }

    await ctx.db.patch(id, updates);
    await ctx.db.insert("activity", {
      entityType: "spec",
      entityId: id,
      action: "updated",
      details: `Spec updated to v${updates.version ?? existing.version}`,
      actor,
      createdAt: now,
    });
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("specs"),
    status: v.union(
      v.literal("draft"),
      v.literal("review"),
      v.literal("approved"),
      v.literal("changes_requested")
    ),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Spec not found");

    const oldStatus = existing.status;
    await ctx.db.patch(args.id, { status: args.status, updatedAt: now });
    await ctx.db.insert("activity", {
      entityType: "spec",
      entityId: args.id,
      action: "status_changed",
      details: `Status changed from ${oldStatus} to ${args.status}`,
      actor: args.actor,
      createdAt: now,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("specs") },
  handler: async (ctx, args) => {
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("Spec not found");
    await ctx.db.delete(args.id);
  },
});
