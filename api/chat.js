export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [
        { role: "system", content: "You are a helpful AI dashboard assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No response" });
}