
import { GoogleGenAI } from "@google/genai";
import { Location } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIRoomInfo = async (location: Location): Promise<string> => {
    const prompt = `In one or two short paragraphs, give a general description of a typical university "${location.name}". What kind of activities or studies usually happen there? Focus on the general purpose of such a space on a university campus.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.5,
                topP: 0.95,
            }
        });

        if (!response.text) {
          throw new Error("No response text from Gemini API.");
        }
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Could not fetch information from AI service.");
    }
};
