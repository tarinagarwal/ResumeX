import React from 'react';
import { Plus, Trash2, Sparkles } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { Skill } from '../../types/resume';
import { groqService } from '../../services/groq';
import toast from 'react-hot-toast';

export function Skills() {
  const { resume, setResume } = useResumeStore();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const addSkill = () => {
    const newSkill: Skill = {
      id: crypto.randomUUID(),
      name: '',
      level: 'Intermediate',
    };
    setResume({
      ...resume,
      skills: [...resume.skills, newSkill],
    });
  };

  const updateSkill = (id: string, updates: Partial<Skill>) => {
    setResume({
      ...resume,
      skills: resume.skills.map((skill) =>
        skill.id === id ? { ...skill, ...updates } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((skill) => skill.id !== id),
    });
  };

  const generateSkills = async () => {
    if (!resume.personalDetails.title) {
      toast.error('Please enter your professional title first');
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = `List 5 key technical and soft skills for a ${resume.personalDetails.title} role. Format as a comma-separated list.`;
      const content = await groqService.generateContent(prompt);
      const skills = content.split(',').map(skill => ({
        id: crypto.randomUUID(),
        name: skill.trim(),
        level: 'Intermediate' as const,
      }));
      
      setResume({ ...resume, skills });
      toast.success('Skills generated successfully!');
    } catch (error) {
      toast.error('Failed to generate skills. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="section-title">Skills</h3>
        <div className="flex gap-2">
          <button
            onClick={generateSkills}
            disabled={isGenerating}
            className="btn-primary flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
          <button onClick={addSkill} className="btn-primary flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Skill
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resume.skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex-1">
              <input
                type="text"
                placeholder="Skill name"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                className="input-field"
              />
            </div>
            <select
              value={skill.level}
              onChange={(e) =>
                updateSkill(skill.id, {
                  level: e.target.value as Skill['level'],
                })
              }
              className="input-field w-40"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <button
              onClick={() => removeSkill(skill.id)}
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}