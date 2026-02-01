"use client";

// Format a date or timestamp to HH:MM (12h format)
export function formatTime(date = new Date()) {
  try {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch (err) {
    console.error("Invalid date passed to formatTime:", date);
    return "--:--";
  }
}
