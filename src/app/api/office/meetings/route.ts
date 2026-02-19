import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../../convex/_generated/api";

function getClient() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL not set");
  return new ConvexHttpClient(url);
}

/**
 * POST /api/office/meetings
 *
 * Body variants:
 *   { action: "start", title: string, participants: string[], location?: "meeting_room" | "manager_office" }
 *   { action: "end", meetingId: string }
 *
 * Used by the orchestrator (Joma) to trigger meetings via HTTP
 * instead of manual UI buttons.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action } = body;

    if (!action) {
      return NextResponse.json(
        { error: "Missing 'action' field. Use 'start' or 'end'." },
        { status: 400 }
      );
    }

    const client = getClient();

    if (action === "start") {
      const { title, participants, location } = body;
      if (!title || !participants || !Array.isArray(participants) || participants.length === 0) {
        return NextResponse.json(
          { error: "Missing required fields: title (string), participants (string[])" },
          { status: 400 }
        );
      }

      const meetingId = await client.mutation(api.meetings.quickStart, {
        title,
        participants,
        location: location || "meeting_room",
      });

      return NextResponse.json({
        ok: true,
        meetingId,
        title,
        participants,
      });
    }

    if (action === "end") {
      const { meetingId } = body;
      if (!meetingId) {
        return NextResponse.json(
          { error: "Missing required field: meetingId" },
          { status: 400 }
        );
      }

      const result = await client.mutation(api.meetings.end, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: meetingId as any,
      });

      return NextResponse.json({
        ok: true,
        ...result,
      });
    }

    return NextResponse.json(
      { error: `Unknown action '${action}'. Use 'start' or 'end'.` },
      { status: 400 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/** GET /api/office/meetings — list active meetings */
export async function GET() {
  try {
    const client = getClient();
    const meetings = await client.query(api.meetings.getActive, {});
    return NextResponse.json({ meetings });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
