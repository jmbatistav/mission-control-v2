import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const WORKSPACE = process.env.MEMORY_PATH || path.join(process.env.HOME || "", ".openclaw/workspace");
const MEMORY_DIR = path.join(WORKSPACE, "memory");
const MEMORY_FILE = path.join(WORKSPACE, "MEMORY.md");

export interface MemoryDocument {
  id: string;
  filename: string;
  title: string;
  content: string;
  type: "core" | "daily" | "config";
  date?: string;
  size: number;
  lastModified: number;
}

function classifyFile(filename: string): { type: MemoryDocument["type"]; title: string; date?: string } {
  if (filename === "MEMORY.md") {
    return { type: "core", title: "Core Memory — Long-term Knowledge" };
  }
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})\.md$/);
  if (dateMatch) {
    const d = new Date(dateMatch[1] + "T12:00:00");
    const formatted = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
    return { type: "daily", title: formatted, date: dateMatch[1] };
  }
  const name = filename.replace(/\.md$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { type: "config", title: name };
}

export async function GET() {
  try {
    const docs: MemoryDocument[] = [];

    // Read MEMORY.md
    try {
      const content = await fs.readFile(MEMORY_FILE, "utf-8");
      const stat = await fs.stat(MEMORY_FILE);
      const info = classifyFile("MEMORY.md");
      docs.push({
        id: "MEMORY.md",
        filename: "MEMORY.md",
        title: info.title,
        content,
        type: info.type,
        size: stat.size,
        lastModified: stat.mtimeMs,
      });
    } catch {}

    // Read memory/ directory
    try {
      const files = await fs.readdir(MEMORY_DIR);
      for (const file of files) {
        if (!file.endsWith(".md")) continue;
        try {
          const filePath = path.join(MEMORY_DIR, file);
          const content = await fs.readFile(filePath, "utf-8");
          const stat = await fs.stat(filePath);
          const info = classifyFile(file);
          docs.push({
            id: file,
            filename: file,
            title: info.title,
            content,
            type: info.type,
            date: info.date,
            size: stat.size,
            lastModified: stat.mtimeMs,
          });
        } catch {}
      }
    } catch {}

    // Sort: core first, then daily desc, then config
    docs.sort((a, b) => {
      if (a.type === "core") return -1;
      if (b.type === "core") return 1;
      if (a.type === "daily" && b.type === "daily") return (b.date ?? "").localeCompare(a.date ?? "");
      if (a.type === "daily") return -1;
      if (b.type === "daily") return 1;
      return a.title.localeCompare(b.title);
    });

    return NextResponse.json({ documents: docs });
  } catch (err) {
    return NextResponse.json({ error: "Failed to read memories", documents: [] }, { status: 500 });
  }
}
