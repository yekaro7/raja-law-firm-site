import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const model = 'gemini-2.5-flash';

const systemInstruction = `You are a helpful legal information assistant for Raja & Raja Law Firm in Lahore, Pakistan. 
Your goal is to build trust and guide users toward booking a paid consultation. 
Provide brief, general information ONLY based on Pakistani law. 
After providing the general information, you MUST proactively encourage the user to book a paid consultation for personalized legal advice tailored to their specific situation.
You MUST NOT provide any legal advice. 
Always, without exception, end your entire response with the following disclaimer, exactly as written, in the language of the user's query: 
For English: "This is general information, not legal advice. For advice on your specific case, please book a paid consultation with our expert lawyers."
For Urdu: "یہ عمومی معلومات ہے، قانونی مشورہ نہیں۔ اپنے مخصوص کیس پر مشورے کے لیے، براہ کرم ہمارے ماہر وکلاء سے معاوضہ مشاورت بک کریں۔"`;


export const getChatbotResponse = async (history: ChatMessage[]): Promise<string> => {
  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    console.error("API_KEY environment variable not set.");
    return "I'm sorry, the AI assistant is not configured correctly. Please contact support.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
        model: model,
        contents: chatHistory,
        config: {
            systemInstruction: systemInstruction,
        }
    });

    const text = response.text;
    return text;

  } catch (error) {
    console.error("Error getting response from Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};