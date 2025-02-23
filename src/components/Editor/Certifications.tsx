import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResumeStore } from '../../store/useResumeStore';
import { Certification } from '../../types/resume';

export function Certifications() {
  const { resume, setResume } = useResumeStore();
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const addCertification = () => {
    const newCertification: Certification = {
      id: crypto.randomUUID(),
      name: '',
      issuer: '',
      date: '',
    };
    setResume({
      ...resume,
      certifications: [...resume.certifications, newCertification],
    });
    setExpandedId(newCertification.id);
  };

  const updateCertification = (id: string, updates: Partial<Certification>) => {
    setResume({
      ...resume,
      certifications: resume.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...updates } : cert
      ),
    });
  };

  const removeCertification = (id: string) => {
    setResume({
      ...resume,
      certifications: resume.certifications.filter((cert) => cert.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="section-title">Certifications</h3>
        <button onClick={addCertification} className="btn-primary flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Certification
        </button>
      </div>

      <div className="space-y-4">
        {resume.certifications.map((cert) => (
          <div
            key={cert.id}
            className={`p-4 rounded-lg border ${
              expandedId === cert.id ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
            >
              <div>
                <h4 className="font-medium dark:text-white">
                  {cert.name || 'New Certification'}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer || 'Issuing Organization'}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeCertification(cert.id);
                }}
                className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {expandedId === cert.id && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Certification Name"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, { name: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={cert.issuer}
                    onChange={(e) =>
                      updateCertification(cert.id, { issuer: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="date"
                    value={cert.date}
                    onChange={(e) =>
                      updateCertification(cert.id, { date: e.target.value })
                    }
                    className="input-field"
                  />
                  <input
                    type="url"
                    placeholder="Credential URL (optional)"
                    value={cert.url}
                    onChange={(e) =>
                      updateCertification(cert.id, { url: e.target.value })
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