import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: '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'
});

export const generateContent = async (prompt: string) => {
  const completion = await groq.chat.completions.create({
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
};