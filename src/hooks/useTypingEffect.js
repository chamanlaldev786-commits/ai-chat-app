"use client";
import { useState, useEffect } from "react";

export function useTypingEffect(text, speed = 30) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay(""); // Reset display on new text
    const interval = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}
