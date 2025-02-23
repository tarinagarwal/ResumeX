import Groq from 'groq-sdk';

class GroqService {
  private client: Groq;

  constructor() {
    this.client = new Groq({
      apiKey: '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',
      dangerouslyAllowBrowser: true,
    });
  }

  async generateContent(prompt: string): Promise<string> {
    try {
      const completion = await this.client.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert resume writer helping users create professional resumes. Provide concise, impactful content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        model: 'mixtral-8x7b-32768',
        temperature: 0.7,
        max_tokens: 1024,
      });

      return completion.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('Failed to generate content');
    }
  }
}

export const groqService = new GroqService();