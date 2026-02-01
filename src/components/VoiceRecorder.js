"use client";
import { useState, useRef } from "react";

export default function VoiceRecorder({ onSend }) {
  const [recording, setRecording] = useState(false);
  const mediaRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRef.current.ondataavailable = (e) => chunksRef.current.push(e.data);

      mediaRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        onSend({ sender: "me", text: "🎤 Voice Message", file: blob });
      };

      mediaRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error("Microphone access denied", err);
      alert("Microphone access is required to record voice messages.");
    }
  };

  const stopRecording = () => {
    mediaRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="flex gap-2 mt-2">
      {!recording ? (
        <button className="btn px-3" onClick={startRecording}>
          🎤 Start
        </button>
      ) : (
        <button className="btn px-3 bg-red-500 hover:bg-red-600" onClick={stopRecording}>
          ⏹ Stop
        </button>
      )}
    </div>
  );
}
