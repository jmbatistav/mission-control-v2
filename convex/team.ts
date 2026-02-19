import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("teamMembers").collect();
  },
});

export const getById = query({
  args: { id: v.id("teamMembers") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getByName = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const members = await ctx.db.query("teamMembers").collect();
    return members.find((m) => m.name.toLowerCase() === args.name.toLowerCase()) ?? null;
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    function: v.union(v.literal("engineering"), v.literal("design"), v.literal("product"), v.literal("operations"), v.literal("leadership")),
    specialty: v.string(),
    owner: v.union(v.literal("Kar"), v.literal("Joma")),
    avatar: v.string(),
    color: v.string(),
    responsibilities: v.array(v.string()),
    model: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("teamMembers", {
      ...args,
      status: "active",
      currentTask: undefined,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("teamMembers"),
    name: v.optional(v.string()),
    role: v.optional(v.string()),
    specialty: v.optional(v.string()),
    status: v.optional(v.union(v.literal("active"), v.literal("idle"), v.literal("offline"))),
    currentTask: v.optional(v.string()),
    responsibilities: v.optional(v.array(v.string())),
    model: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, { ...fields, updatedAt: Date.now() });
  },
});

// Update agent by name — for API integration
export const updateByName = mutation({
  args: {
    name: v.string(),
    status: v.optional(v.union(v.literal("active"), v.literal("idle"), v.literal("offline"))),
    currentTask: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const members = await ctx.db.query("teamMembers").collect();
    const member = members.find((m) => m.name.toLowerCase() === args.name.toLowerCase());
    if (!member) throw new Error(`Agent "${args.name}" not found`);
    const updates: Record<string, unknown> = { updatedAt: Date.now() };
    if (args.status !== undefined) updates.status = args.status;
    if (args.currentTask !== undefined) updates.currentTask = args.currentTask;
    await ctx.db.patch(member._id, updates);
    return { updated: member.name, status: args.status ?? member.status };
  },
});

// Bulk update — set multiple agents at once
export const bulkUpdateStatus = mutation({
  args: {
    updates: v.array(v.object({
      name: v.string(),
      status: v.union(v.literal("active"), v.literal("idle"), v.literal("offline")),
      currentTask: v.optional(v.string()),
    })),
  },
  handler: async (ctx, args) => {
    const members = await ctx.db.query("teamMembers").collect();
    const results = [];
    for (const update of args.updates) {
      const member = members.find((m) => m.name.toLowerCase() === update.name.toLowerCase());
      if (!member) continue;
      const patches: Record<string, unknown> = { status: update.status, updatedAt: Date.now() };
      if (update.currentTask !== undefined) patches.currentTask = update.currentTask;
      await ctx.db.patch(member._id, patches);
      results.push({ name: member.name, status: update.status });
    }
    return results;
  },
});

// Set all agents to idle (reset)
export const resetAll = mutation({
  args: {},
  handler: async (ctx) => {
    const members = await ctx.db.query("teamMembers").collect();
    for (const member of members) {
      await ctx.db.patch(member._id, { status: "idle" as const, currentTask: undefined, updatedAt: Date.now() });
    }
    return { reset: members.length };
  },
});

export const remove = mutation({
  args: { id: v.id("teamMembers") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("teamMembers").collect();
    if (existing.length > 0) return { seeded: false, message: "Team already exists" };

    const now = Date.now();
    const members = [
      {
        name: "Joma", role: "CTO / Lead Architect", function: "leadership" as const,
        specialty: "System architecture, orchestration, and strategic decisions",
        owner: "Joma" as const, avatar: "🐙", color: "cyan",
        responsibilities: ["Architecture decisions", "Task orchestration", "Code quality oversight", "Multi-agent coordination", "Security & infrastructure"],
        model: "Claude Opus 4", status: "active" as const,
      },
      {
        name: "Pixel", role: "Frontend Engineer", function: "engineering" as const,
        specialty: "React, Next.js, component architecture, state management",
        owner: "Joma" as const, avatar: "🎨", color: "blue",
        responsibilities: ["UI implementation", "Component library", "Client-side performance", "Responsive design", "Accessibility"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Swift", role: "Frontend Mobile Engineer", function: "engineering" as const,
        specialty: "React Native, Expo, mobile-first design, native modules",
        owner: "Joma" as const, avatar: "📱", color: "indigo",
        responsibilities: ["Mobile UI implementation", "Cross-platform compatibility", "Native performance optimization", "App store deployment", "Push notifications"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Forge", role: "Backend Engineer", function: "engineering" as const,
        specialty: "APIs, databases, business logic, data modeling",
        owner: "Joma" as const, avatar: "⚡", color: "amber",
        responsibilities: ["API design & implementation", "Database schema & queries", "Business logic", "Authentication & authorization", "Third-party integrations"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Atlas", role: "DevOps Engineer", function: "operations" as const,
        specialty: "CI/CD, infrastructure, deployment, monitoring",
        owner: "Joma" as const, avatar: "🛠️", color: "orange",
        responsibilities: ["CI/CD pipelines", "Infrastructure as code", "Deployment automation", "Monitoring & alerting", "Security hardening"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Sentinel", role: "QA Engineer", function: "operations" as const,
        specialty: "Testing strategy, automation, quality assurance",
        owner: "Joma" as const, avatar: "🛡️", color: "emerald",
        responsibilities: ["Test planning & strategy", "Automated test suites", "Manual testing protocols", "Bug tracking & regression", "Performance testing"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Nova", role: "UI/UX Designer", function: "design" as const,
        specialty: "Design systems, user research, prototyping, accessibility",
        owner: "Joma" as const, avatar: "✨", color: "pink",
        responsibilities: ["Design system maintenance", "User flow design", "Wireframing & prototyping", "Accessibility compliance", "Visual design & branding"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Compass", role: "Product Manager", function: "product" as const,
        specialty: "Requirements, roadmaps, user stories, prioritization",
        owner: "Kar" as const, avatar: "🧭", color: "violet",
        responsibilities: ["Requirements gathering", "Roadmap planning", "User story writing", "Sprint prioritization", "Stakeholder communication"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
      {
        name: "Quill", role: "Technical Writer", function: "product" as const,
        specialty: "Documentation, API docs, guides, changelogs",
        owner: "Kar" as const, avatar: "📖", color: "teal",
        responsibilities: ["API documentation", "User guides & tutorials", "Architecture docs", "Changelog maintenance", "README & onboarding"],
        model: "Claude Sonnet 4", status: "idle" as const,
      },
    ];

    for (const member of members) {
      await ctx.db.insert("teamMembers", { ...member, currentTask: undefined, createdAt: now, updatedAt: now });
    }
    return { seeded: true, count: members.length };
  },
});
