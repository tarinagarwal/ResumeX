import React from 'react';
import { Plus, Trash2, Sparkles } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { Experience as ExperienceType } from '../../types/resume';
import { groqService } from '../../services/groq';
import toast from 'react-hot-toast';

export function Experience() {
  const { resume, setResume } = useResumeStore();
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [isGenerating, setIsGenerating] = React.useState(false);

  const addExperience = () => {
    const newExperience: ExperienceType = {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: [''],
    };
    setResume({
      ...resume,
      experience: [...resume.experience, newExperience],
    });
    setExpandedId(newExperience.id);
  };

  const updateExperience = (id: string, updates: Partial<ExperienceType>) => {
    setResume({
      ...resume,
      experience: resume.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((exp) => exp.id !== id),
    });
  };

  const generateDescription = async (experience: ExperienceType) => {
    if (!experience.position || !experience.company) {
      toast.error('Please enter position and company first');
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = `Write 3 bullet points highlighting key achievements and responsibilities as a ${experience.position} at ${experience.company}. 
        Focus on quantifiable achievements and impactful contributions.`;
      
      const content = await groqService.generateContent(prompt);
      const bullets = content.split('\n').filter(Boolean);
      
      updateExperience(experience.id, { description: bullets });
      toast.success('Description generated successfully!');
    } catch (error) {
      toast.error('Failed to generate description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="section-title">Work Experience</h3>
        <button onClick={addExperience} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {resume.experience.map((exp) => (
          <div
            key={exp.id}
            className={`p-4 rounded-lg border ${
              expandedId === exp.id ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div>
                <h4 className="font-medium dark:text-white">
                  {exp.position || 'New Position'}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company || 'Company Name'}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeExperience(exp.id);
                }}
                className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {expandedId === exp.id && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, { position: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, { company: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, { startDate: e.target.value })
                    }
                    className="input-field"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="date"
                      value={exp.endDate}
                      disabled={exp.current}
                      onChange={(e) =>
                        updateExperience(exp.id, { endDate: e.target.value })
                      }
                      className="input-field flex-1"
                    />
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={exp.current}
                        onChange={(e) =>
                          updateExperience(exp.id, { current: e.target.checked })
                        }
                        className="rounded border-gray-300"
                      />
                      Current
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium dark:text-white">
                      Key Achievements
                    </label>
                    <button
                      onClick={() => generateDescription(exp)}
                      disabled={isGenerating}
                      className="btn-primary flex items-center gap-2 text-sm py-1"
                    >
                      <Sparkles className="h-3 w-3" />
                      {isGenerating ? 'Generating...' : 'Generate'}
                    </button>
                  </div>
                  {exp.description.map((desc, index) => (
                    <input
                      key={index}
                      type="text"
                      value={desc}
                      onChange={(e) => {
                        const newDesc = [...exp.description];
                        newDesc[index] = e.target.value;
                        updateExperience(exp.id, { description: newDesc });
                      }}
                      placeholder={`Achievement ${index + 1}`}
                      className="input-field"
                    />
                  ))}
                  <button
                    onClick={() =>
                      updateExperience(exp.id, {
                        description: [...exp.description, ''],
                      })
                    }
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    + Add Achievement
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}