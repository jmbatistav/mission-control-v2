import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveFile = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("files", {
      entityType: args.entityType,
      entityId: args.entityId,
      name: args.name,
      storageId: args.storageId,
      contentType: args.contentType,
      size: args.size,
      uploadedBy: args.uploadedBy,
      createdAt: Date.now(),
    });
    return id;
  },
});

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
      .query("files")
      .withIndex("by_entity", (q) =>
        q.eq("entityType", args.entityType).eq("entityId", args.entityId)
      )
      .collect();
  },
});

export const getUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const remove = mutation({
  args: { id: v.id("files") },
  handler: async (ctx, args) => {
    const file = await ctx.db.get(args.id);
    if (!file) throw new Error("File not found");
    await ctx.storage.delete(file.storageId);
    await ctx.db.delete(args.id);
  },
});
