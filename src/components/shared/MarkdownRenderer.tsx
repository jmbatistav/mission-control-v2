"use client";

function parseLine(line: string): React.ReactNode {
  // Headers
  if (line.startsWith("### "))
    return (
      <h3 className="text-base font-semibold text-gray-200 mt-3 mb-1">
        {parseInline(line.slice(4))}
      </h3>
    );
  if (line.startsWith("## "))
    return (
      <h2 className="text-lg font-semibold text-gray-100 mt-4 mb-1">
        {parseInline(line.slice(3))}
      </h2>
    );
  if (line.startsWith("# "))
    return (
      <h1 className="text-xl font-bold text-gray-100 mt-4 mb-2">
        {parseInline(line.slice(2))}
      </h1>
    );

  // Unordered list
  if (line.startsWith("- ") || line.startsWith("* "))
    return (
      <li className="text-sm text-gray-300 ml-4 list-disc">
        {parseInline(line.slice(2))}
      </li>
    );

  // Empty line
  if (line.trim() === "") return <br />;

  // Paragraph
  return <p className="text-sm text-gray-300 leading-relaxed">{parseInline(line)}</p>;
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Code
    const codeMatch = remaining.match(/`(.+?)`/);

    const matches = [
      boldMatch ? { index: boldMatch.index!, match: boldMatch, type: "bold" as const } : null,
      codeMatch ? { index: codeMatch.index!, match: codeMatch, type: "code" as const } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === "bold") {
      parts.push(
        <strong key={keyIndex++} className="font-semibold text-gray-200">
          {first.match[1]}
        </strong>
      );
    } else {
      parts.push(
        <code
          key={keyIndex++}
          className="px-1.5 py-0.5 bg-gray-800 rounded text-xs text-emerald-400 font-mono"
        >
          {first.match[1]}
        </code>
      );
    }

    remaining = remaining.slice(first.index + first.match[0].length);
  }

  return parts;
}

export default function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <div key={i}>{parseLine(line)}</div>
      ))}
    </div>
  );
}
