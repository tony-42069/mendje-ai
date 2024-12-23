import { HfInference } from '@huggingface/inference';

// Initialize HuggingFace client
const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

// Using a multilingual model suitable for Albanian
const MODEL_ID = "mistralai/Mistral-7B-Instruct-v0.2";

const generateSystemPrompt = () => {
  return `You are MendjeAI, an AI assistant that communicates exclusively in Albanian. 
  Be helpful, friendly, and concise. Always respond in Albanian, even if the user 
  writes in another language.`;
};

export async function generateResponse(userMessage) {
  try {
    const prompt = `${generateSystemPrompt()}

User: ${userMessage}
Assistant:`;

    const response = await hf.textGeneration({
      model: MODEL_ID,
      inputs: prompt,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.15,
      },
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error('AI Service Error:', error);
    return "Më vjen keq, por ka ndodhur një gabim. Ju lutem provoni përsëri.";
  }
}