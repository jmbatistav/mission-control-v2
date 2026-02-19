import { query, internalMutation, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listByEntity = query({
  args: {
    entityType: v.union(
      v.literal("idea"),
      v.literal("spec"),
      v.literal("task")
    ),
    entityId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("activity")
      .withIndex("by_entity", (q) =>
        q.eq("entityType", args.entityType).eq("entityId", args.entityId)
      )
      .order("desc")
      .collect();
  },
});

export const listRecent = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("activity")
      .withIndex("by_time")
      .order("desc")
      .take(50);
  },
});

export const log = mutation({
  args: {
    entityType: v.union(
      v.literal("idea"),
      v.literal("spec"),
      v.literal("task")
    ),
    entityId: v.string(),
    action: v.string(),
    details: v.optional(v.string()),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("activity", {
      entityType: args.entityType,
      entityId: args.entityId,
      action: args.action,
      details: args.details,
      actor: args.actor,
      createdAt: Date.now(),
    });
  },
});

export const logInternal = internalMutation({
  args: {
    entityType: v.union(
      v.literal("idea"),
      v.literal("spec"),
      v.literal("task")
    ),
    entityId: v.string(),
    action: v.string(),
    details: v.optional(v.string()),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("activity", {
      entityType: args.entityType,
      entityId: args.entityId,
      action: args.action,
      details: args.details,
      actor: args.actor,
      createdAt: Date.now(),
    });
  },
});
