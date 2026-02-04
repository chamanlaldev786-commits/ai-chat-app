"use client";
import { useEffect, useState } from "react";
import { getAIReply } from "../utils/aiBot";

export function useChat() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("chat_messages")) || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (msg) => {
    const userMsg = {
      id: Date.now(),
      role: "user",
      text: msg.text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        role: "ai",
        text: getAIReply(msg.text),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return { messages, sendMessage, isTyping };
}
