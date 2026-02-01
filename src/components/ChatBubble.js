export default function ChatBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md animate-fadeIn
      ${isUser
          ? "ml-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
          : "mr-auto bg-white text-gray-800 border border-gray-200"
        }`}
    >
      {message.text}
    </div>
  );
}
