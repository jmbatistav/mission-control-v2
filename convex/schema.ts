import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ideas: defineTable({
    title: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("draft"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("implemented")
    ),
    priority: v.union(
      v.literal("low"),
      v.literal("medium"),
      v.literal("high"),
      v.literal("urgent")
    ),
    createdBy: v.union(v.literal("Kar"), v.literal("Joma")),
    tags: v.optional(v.array(v.string())),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_priority", ["priority"]),

  specs: defineTable({
    ideaId: v.id("ideas"),
    title: v.string(),
    content: v.string(),
    version: v.number(),
    status: v.union(
      v.literal("draft"),
      v.literal("review"),
      v.literal("approved"),
      v.literal("changes_requested")
    ),
    createdBy: v.union(v.literal("Kar"), v.literal("Joma")),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_idea", ["ideaId"])
    .index("by_status", ["status"]),

  tasks: defineTable({
    specId: v.optional(v.id("specs")),
    ideaId: v.optional(v.id("ideas")),
    title: v.string(),
    description: v.optional(v.string()),
    status: v.union(
      v.literal("backlog"),
      v.literal("in_progress"),
      v.literal("testing"),
      v.literal("done"),
      v.literal("deployed")
    ),
    assignee: v.union(v.literal("Kar"), v.literal("Joma")),
    priority: v.union(
      v.literal("low"),
      v.literal("medium"),
      v.literal("high"),
      v.literal("urgent")
    ),
    labels: v.optional(v.array(v.string())),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_assignee", ["assignee"])
    .index("by_spec", ["specId"]),

  files: defineTable({
    entityType: v.union(
      v.literal("idea"),
      v.literal("spec"),
      v.literal("task")
    ),
    entityId: v.string(),
    name: v.string(),
    storageId: v.id("_storage"),
    contentType: v.string(),
    size: v.number(),
    uploadedBy: v.union(v.literal("Kar"), v.literal("Joma")),
    createdAt: v.number(),
  }).index("by_entity", ["entityType", "entityId"]),

  activity: defineTable({
    entityType: v.union(
      v.literal("idea"),
      v.literal("spec"),
      v.literal("task")
    ),
    entityId: v.string(),
    action: v.string(),
    details: v.optional(v.string()),
    actor: v.union(v.literal("Kar"), v.literal("Joma")),
    createdAt: v.number(),
  })
    .index("by_entity", ["entityType", "entityId"])
    .index("by_time", ["createdAt"]),
  calendarEvents: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    type: v.union(v.literal("cron"), v.literal("scheduled"), v.literal("deadline"), v.literal("milestone")),
    schedule: v.optional(v.string()), // cron expression or description
    startTime: v.number(), // timestamp
    endTime: v.optional(v.number()),
    recurring: v.boolean(),
    recurrenceRule: v.optional(v.string()), // "daily", "weekly", "monthly", cron expr
    linkedEntityType: v.optional(v.union(v.literal("idea"), v.literal("spec"), v.literal("task"))),
    linkedEntityId: v.optional(v.string()),
    assignee: v.union(v.literal("Kar"), v.literal("Joma")),
    color: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_time", ["startTime"]).index("by_assignee", ["assignee"]).index("by_type", ["type"]),
});
