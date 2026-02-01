"use client";

export async function uploadFile(file) {
  if (!file) throw new Error("No file provided.");

  try {
    // Simulate upload delay
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          url: URL.createObjectURL(file),
          name: file.name || "unknown",
        });
      }, 1000);
    });
  } catch (err) {
    console.error("File upload failed:", err);
    return { url: "", name: "" };
  }
}
