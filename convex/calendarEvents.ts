import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("calendarEvents").withIndex("by_time").order("asc").collect();
  },
});

export const listByRange = query({
  args: { start: v.number(), end: v.number() },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("calendarEvents")
      .withIndex("by_time", (q) => q.gte("startTime", args.start).lte("startTime", args.end))
      .collect();
    return events;
  },
});

export const getById = query({
  args: { id: v.id("calendarEvents") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    type: v.union(v.literal("cron"), v.literal("scheduled"), v.literal("deadline"), v.literal("milestone")),
    schedule: v.optional(v.string()),
    startTime: v.number(),
    endTime: v.optional(v.number()),
    recurring: v.boolean(),
    recurrenceRule: v.optional(v.string()),
    linkedEntityType: v.optional(v.union(v.literal("idea"), v.literal("spec"), v.literal("task"))),
    linkedEntityId: v.optional(v.string()),
    assignee: v.union(v.literal("Kar"), v.literal("Joma")),
    color: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("calendarEvents", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("calendarEvents"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    type: v.optional(v.union(v.literal("cron"), v.literal("scheduled"), v.literal("deadline"), v.literal("milestone"))),
    schedule: v.optional(v.string()),
    startTime: v.optional(v.number()),
    endTime: v.optional(v.number()),
    recurring: v.optional(v.boolean()),
    recurrenceRule: v.optional(v.string()),
    assignee: v.optional(v.union(v.literal("Kar"), v.literal("Joma"))),
    color: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("Event not found");
    await ctx.db.patch(id, { ...fields, updatedAt: Date.now() });
  },
});

export const remove = mutation({
  args: { id: v.id("calendarEvents") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
