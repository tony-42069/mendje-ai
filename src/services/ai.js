const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function getAIResponse(input) {
  try {
    const response = await fetch(OPENAI_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are MendjeAI, an Albanian language assistant. Follow these guidelines:
              - Always respond in proper Albanian with correct diacritical marks (ë, ç)
              - Keep responses natural and concise
              - Match the user's level of formality
              - For technical terms, provide both Albanian and English in parentheses when needed
              - Maintain proper Albanian grammar and sentence structure`
          },
          {
            role: "user",
            content: input
          }
        ],
        temperature: 0.7,
        presence_penalty: 0.1,
        frequency_penalty: 0.1,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'API call failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw new Error('Ndodhi një gabim. Ju lutem provoni përsëri më vonë.');
  }
}