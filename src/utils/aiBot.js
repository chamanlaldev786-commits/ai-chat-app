export function getAIReply(q) {
  if (!q) return "Please type something 🙂";

  const text = q.toLowerCase();

  if (text.includes("hello") || text.includes("hi"))
    return "Hello 👋 I'm your AI assistant. Ask me anything!";

  if (text.includes("react"))
    return "React helps you build fast and reusable UI components.";

  if (text.includes("next"))
    return "Next.js is a powerful React framework with routing & SSR.";

  if (text.includes("ai"))
    return "AI can answer questions, generate ideas, and help you learn faster.";

  return "Nice question 👍 I'm learning more every day!";
}
