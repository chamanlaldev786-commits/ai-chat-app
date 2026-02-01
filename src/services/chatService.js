"use client";

export async function sendMessageToAI(messages = []) {
  try {
    if (!messages.length) return "No messages to summarize.";

    const res = await fetch("/api/ai-summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      console.error("AI Summary request failed", res.statusText);
      return "Failed to generate summary.";
    }

    const data = await res.json();
    return data.summary || "No summary available.";
  } catch (err) {
    console.error("Error in sendMessageToAI:", err);
    return "Error generating summary.";
  }
}
