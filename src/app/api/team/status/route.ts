import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// POST /api/team/status
// Body: { agent: "Pixel", status: "active", task: "Building login page" }
// Or bulk: { agents: [{ name: "Pixel", status: "active", task: "..." }, ...] }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Bulk update
    if (body.agents && Array.isArray(body.agents)) {
      const updates = body.agents.map((a: any) => ({
        name: a.name,
        status: a.status || "active",
        currentTask: a.task || a.currentTask,
      }));
      const result = await convex.mutation(api.team.bulkUpdateStatus, { updates });
      return NextResponse.json({ ok: true, updated: result });
    }

    // Single update
    if (body.agent || body.name) {
      const name = body.agent || body.name;
      const result = await convex.mutation(api.team.updateByName, {
        name,
        status: body.status,
        currentTask: body.task || body.currentTask,
      });
      return NextResponse.json({ ok: true, ...result });
    }

    // Reset all
    if (body.reset) {
      const result = await convex.mutation(api.team.resetAll, {});
      return NextResponse.json({ ok: true, ...result });
    }

    return NextResponse.json({ error: "Provide agent/name or agents array" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// GET /api/team/status — list all agents
export async function GET() {
  try {
    const members = await convex.query(api.team.list, {});
    const summary = members.map((m) => ({
      name: m.name,
      role: m.role,
      status: m.status,
      currentTask: m.currentTask,
      function: m.function,
    }));
    return NextResponse.json({ agents: summary });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
