"use client";

import { useState, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function FileUpload({
  entityType,
  entityId,
  uploadedBy,
  onUploaded,
}: {
  entityType: "idea" | "spec" | "task";
  entityId: string;
  uploadedBy: "Kar" | "Joma";
  onUploaded?: () => void;
}) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveFile = useMutation(api.files.saveFile);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();
      await saveFile({
        entityType,
        entityId,
        name: file.name,
        storageId,
        contentType: file.type,
        size: file.size,
        uploadedBy,
      });
      onUploaded?.();
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div>
      <input
        ref={fileRef}
        type="file"
        onChange={handleUpload}
        className="hidden"
        id={`file-upload-${entityId}`}
      />
      <label
        htmlFor={`file-upload-${entityId}`}
        className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600 cursor-pointer transition-colors ${
          uploading ? "opacity-50 cursor-wait" : ""
        }`}
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
            d="M12 4v16m8-8H4"
          />
        </svg>
        {uploading ? "Uploading..." : "Attach File"}
      </label>
    </div>
  );
}
