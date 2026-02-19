"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";

interface FileEntry {
  _id: Id<"files">;
  name: string;
  storageId: Id<"_storage">;
  contentType: string;
  size: number;
  uploadedBy: string;
  createdAt: number;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileItem({ file }: { file: FileEntry }) {
  const url = useQuery(api.files.getUrl, { storageId: file.storageId });
  const removeFile = useMutation(api.files.remove);

  return (
    <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 group">
      <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-xs text-gray-400">
        📄
      </div>
      <div className="flex-1 min-w-0">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 truncate block"
          >
            {file.name}
          </a>
        ) : (
          <span className="text-sm text-gray-300 truncate block">
            {file.name}
          </span>
        )}
        <span className="text-xs text-gray-500">{formatSize(file.size)}</span>
      </div>
      <button
        onClick={() => removeFile({ id: file._id })}
        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all p-1"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default function FileList({
  entityType,
  entityId,
}: {
  entityType: "idea" | "spec" | "task";
  entityId: string;
}) {
  const files = useQuery(api.files.listByEntity, { entityType, entityId });

  if (!files || files.length === 0) return null;

  return (
    <div className="space-y-2">
      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        Files
      </h4>
      {files.map((file: any) => (
        <FileItem key={file._id} file={file as FileEntry} />
      ))}
    </div>
  );
}
