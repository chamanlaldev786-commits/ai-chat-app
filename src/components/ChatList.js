import ChatBubble from "./ChatBubble";

export default function ChatList({ messages }) {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
}
