import fs from "fs"
import path from "path";
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


async function generateReview() {
    const prompt = `
Return ONLY valid JSON.
No markdown. No explanations.

Schema:
{
  slug: string,
  title: string,
  tagline: string,
  rating: number,
  category: string,
  description: string,
  summary: string,
  verdict: string,
  pros: string[],
  cons: string[],
  features: string[],
  officialLink: string
}

Rules:
- rating must be between 1 and 5
- slug must be lowercase and hyphen-separated
- pros, cons, features must contain at least 3 items

Tool Name: Perplexity AI
Category: Chat
Official Website: https://www.perplexity.ai/
`;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt
    })


    const text = response.text

    let review;

    try {
        review = JSON.parse(text);
    } catch (error) {
        console.error("❌ Invalid JSON returned by Gemini");
        console.error(text);
        process.exit(1);
    }

    const outputDir = path.join(process.cwd(), "data/tools");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const filePath = path.join(outputDir, `${review.slug}.json`);

    // Prevent overwriting existing reviews
    if (fs.existsSync(filePath)) {
        console.log("⚠️ Review already exists:", review.slug);
        return;
    }

    fs.writeFileSync(filePath, JSON.stringify(review, null, 2), "utf-8");

    console.log("✅ Review generated:", filePath);

}

generateReview().catch((err) => {
    console.error("❌ Generation failed:", err);
    process.exit(1);
})

