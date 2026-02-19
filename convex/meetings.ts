import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/** List all meetings, optionally filtered by status */
export const list = query({
  args: {
    status: v.optional(
      v.union(v.literal("scheduled"), v.literal("in_progress"), v.literal("ended"))
    ),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("meetings")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .collect();
    }
    return await ctx.db.query("meetings").collect();
  },
});

/** Get active (in_progress) meetings */
export const getActive = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("meetings")
      .withIndex("by_status", (q) => q.eq("status", "in_progress"))
      .collect();
  },
});

/** Create a new meeting (initially scheduled) */
export const create = mutation({
  args: {
    title: v.string(),
    participants: v.array(v.string()),
    location: v.union(v.literal("meeting_room"), v.literal("manager_office")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("meetings", {
      title: args.title,
      participants: args.participants,
      location: args.location,
      status: "scheduled",
      startTime: now,
      createdAt: now,
    });
  },
});

/** Start a meeting — sets status to in_progress and updates participant agents */
export const start = mutation({
  args: { id: v.id("meetings") },
  handler: async (ctx, args) => {
    const meeting = await ctx.db.get(args.id);
    if (!meeting) throw new Error("Meeting not found");

    await ctx.db.patch(args.id, {
      status: "in_progress",
      startTime: Date.now(),
    });

    // Update all participant agents to active with meeting task
    const members = await ctx.db.query("teamMembers").collect();
    for (const name of meeting.participants) {
      const member = members.find(
        (m) => m.name.toLowerCase() === name.toLowerCase()
      );
      if (member) {
        await ctx.db.patch(member._id, {
          status: "active",
          currentTask: `In meeting: ${meeting.title}`,
          updatedAt: Date.now(),
        });
      }
    }

    return { started: true, title: meeting.title };
  },
});

/** End a meeting — sets status to ended and returns participants to idle */
export const end = mutation({
  args: { id: v.id("meetings") },
  handler: async (ctx, args) => {
    const meeting = await ctx.db.get(args.id);
    if (!meeting) throw new Error("Meeting not found");

    await ctx.db.patch(args.id, {
      status: "ended",
      endTime: Date.now(),
    });

    // Return participants to idle
    const members = await ctx.db.query("teamMembers").collect();
    for (const name of meeting.participants) {
      const member = members.find(
        (m) => m.name.toLowerCase() === name.toLowerCase()
      );
      if (member) {
        await ctx.db.patch(member._id, {
          status: "idle",
          currentTask: undefined,
          updatedAt: Date.now(),
        });
      }
    }

    return { ended: true, title: meeting.title };
  },
});

/** Quick start — creates AND immediately starts a meeting */
export const quickStart = mutation({
  args: {
    title: v.string(),
    participants: v.array(v.string()),
    location: v.union(v.literal("meeting_room"), v.literal("manager_office")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const id = await ctx.db.insert("meetings", {
      title: args.title,
      participants: args.participants,
      location: args.location,
      status: "in_progress",
      startTime: now,
      createdAt: now,
    });

    // Update all participant agents
    const members = await ctx.db.query("teamMembers").collect();
    for (const name of args.participants) {
      const member = members.find(
        (m) => m.name.toLowerCase() === name.toLowerCase()
      );
      if (member) {
        await ctx.db.patch(member._id, {
          status: "active",
          currentTask: `In meeting: ${args.title}`,
          updatedAt: Date.now(),
        });
      }
    }

    return id;
  },
});
