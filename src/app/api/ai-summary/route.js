export async function POST(req) {
  try {
    const { messages, maxLength = 200 } = await req.json();

    // Validation
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ summary: "No messages to summarize." }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Extract text only
    const fullText = messages
      .map((m) => (typeof m.text === "string" ? m.text : ""))
      .join(" ")
      .trim();

    if (!fullText) {
      return new Response(
        JSON.stringify({ summary: "No valid text found." }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Fake AI summary (frontend simulation)
    let summary = fullText.slice(0, maxLength);
    if (fullText.length > maxLength) {
      summary += "...";
    }

    return new Response(
      JSON.stringify({ summary }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ summary: "Error generating summary." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
