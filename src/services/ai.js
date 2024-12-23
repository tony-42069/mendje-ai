import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

const SYSTEM_PROMPT = `Ti je MendjeAI, një asistent i inteligjencës artificiale që flet vetëm shqip. 
Ti je krijuar për të ndihmuar përdoruesit me këshilla, informacione dhe mbështetje në gjuhën shqipe.
Përgjigju shkurt dhe qartë. Ruaj një ton miqësor dhe profesional.`;

const createPrompt = (messages) => {
  const conversation = messages
    .map(msg => `${msg.role === 'user' ? 'Përdoruesi' : 'Asistenti'}: ${msg.content}`)
    .join('\n');
  
  return `${SYSTEM_PROMPT}\n\n${conversation}\nAsistenti:`;
};

const DEFAULT_PARAMS = {
  temperature: 0.7,
  max_new_tokens: 200,
  repetition_penalty: 1.2,
  top_p: 0.95,
  stop: ["Përdoruesi:", "Asistenti:"]
};

export async function getAIResponse(messages) {
  try {
    const prompt = createPrompt(messages);
    
    const response = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      inputs: prompt,
      parameters: DEFAULT_PARAMS
    });

    // Clean up response by removing any remaining system prompts or instructions
    let cleanedResponse = response.generated_text
      .replace(SYSTEM_PROMPT, '')
      .replace(/^Asistenti:\s*/i, '')
      .trim();

    // Additional safety check for Albanian language
    if (!cleanedResponse.match(/[ëçÇË]/)) {
      throw new Error("Response does not appear to be in Albanian");
    }

    return cleanedResponse;

  } catch (error) {
    console.error("AI Response Error:", error);
    return "Më vjen keq, por kam një problem teknik. Ju lutem provoni përsëri.";
  }
}

// Utility function to validate if text is primarily Albanian
export function isAlbanian(text) {
  // Check for common Albanian characters and words
  const albanianMarkers = /[ëçÇË]|është|dhe|për|në|me|të|që/i;
  return albanianMarkers.test(text);
}