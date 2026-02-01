"use client";

export default function FilePreview({ file }) {
  if (!file) return null;

  const isImage = file.type.startsWith("image/");

  return (
    <div className="p-2 border rounded-lg border-card mt-2 max-w-[60%]">
      {isImage ? (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="rounded-lg max-w-full"
        />
      ) : (
        <p className="text-sm text-muted break-all">{file.name}</p>
      )}
    </div>
  );
}
