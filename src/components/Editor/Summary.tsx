import React from 'react';
import { Sparkles } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { groqService } from '../../services/groq';
import toast from 'react-hot-toast';

export function Summary() {
  const { resume, setResume } = useResumeStore();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const generateSummary = async () => {
    if (!resume.personalDetails.title) {
      toast.error('Please enter your professional title first');
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = `Write a professional summary for a ${resume.personalDetails.title}. 
        Keep it concise (2-3 sentences) and focus on key strengths and career goals.`;
      
      const summary = await groqService.generateContent(prompt);
      setResume({ ...resume, summary });
      toast.success('Summary generated successfully!');
    } catch (error) {
      toast.error('Failed to generate summary. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="section-title">Professional Summary</h3>
        <button
          onClick={generateSummary}
          disabled={isGenerating}
          className="btn-primary flex items-center gap-2"
        >
          <Sparkles className="h-4 w-4" />
          {isGenerating ? 'Generating...' : 'Generate with AI'}
        </button>
      </div>
      <textarea
        value={resume.summary}
        onChange={(e) => setResume({ ...resume, summary: e.target.value })}
        placeholder="Write a brief professional summary..."
        className="input-field h-32 resize-none"
      />
    </div>
  );
}