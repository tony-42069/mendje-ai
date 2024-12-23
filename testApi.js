import { HfInference } from '@huggingface/inference';

async function testHuggingFaceAPI() {
  const hf = new HfInference("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");  // Your API key here
  
  // Example-based prompt to guide proper Albanian usage
  const prompt = `<s>[INST] Je një asistent që flet shqip standard dhe jep këshilla të dobishme.

SHEMBULL I MIRË:
Pyetje: Si të mësoj një gjuhë të re?
Përgjigje: Ja disa këshilla të thjeshta:
1. Mëso çdo ditë për 30 minuta
2. Dëgjo muzikë në atë gjuhë
3. Shiko filma me titra
4. Lexo libra të thjeshtë
5. Bisedo me folës vendas

TANI PËRGJIGJU:
Une jam pak i merzitur, mundet te me japesh ca ide per te ulur stresin te lutem? [/INST]`;

  try {
    console.log("Testing with example-based prompt...\n");
    console.log("Prompt being sent:", prompt, "\n");
    
    const response = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      inputs: prompt,
      parameters: {
        temperature: 0.2,        // Very low for consistent language
        max_new_tokens: 350,
        repetition_penalty: 1.2,
        top_p: 0.7,             // Even more conservative
        stop: ["</s>", "[INST]"]
      }
    });
    
    let cleanedResponse = response.generated_text
      .replace(prompt, '')
      .trim();
    
    console.log("Clean response:", cleanedResponse);
  } catch (error) {
    console.log("Error:", error);
  }
}

testHuggingFaceAPI();