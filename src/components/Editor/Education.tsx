import React from 'react';
import { Plus, Trash2, Sparkles } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { Education as EducationType } from '../../types/resume';
import { groqService } from '../../services/groq';
import toast from 'react-hot-toast';

export function Education() {
  const { resume, setResume } = useResumeStore();
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const addEducation = () => {
    const newEducation: EducationType = {
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    };
    setResume({
      ...resume,
      education: [...resume.education, newEducation],
    });
    setExpandedId(newEducation.id);
  };

  const updateEducation = (id: string, updates: Partial<EducationType>) => {
    setResume({
      ...resume,
      education: resume.education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    setResume({
      ...resume,
      education: resume.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="section-title">Education</h3>
        <button onClick={addEducation} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Education
        </button>
      </div>

      <div className="space-y-4">
        {resume.education.map((edu) => (
          <div
            key={edu.id}
            className={`p-4 rounded-lg border ${
              expandedId === edu.id ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
            >
              <div>
                <h4 className="font-medium dark:text-white">
                  {edu.degree || 'New Degree'}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {edu.institution || 'Institution Name'}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeEducation(edu.id);
                }}
                className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {expandedId === edu.id && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(edu.id, { institution: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, { degree: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Field of Study"
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(edu.id, { field: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="GPA (optional)"
                    value={edu.gpa}
                    onChange={(e) =>
                      updateEducation(edu.id, { gpa: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="date"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { startDate: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="date"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, { endDate: e.target.value })
                    }
                    className="input-field"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}