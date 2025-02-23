import React from 'react';
import { Resume } from '../../types/resume';

interface Props {
  resume: Resume;
}

export function ModernTemplate({ resume }: Props) {
  const {
    personalDetails,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg">
      {/* Header */}
      <header className="text-center border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {personalDetails.fullName}
        </h1>
        <p className="text-xl text-primary mt-1">{personalDetails.title}</p>
        <div className="flex justify-center flex-wrap gap-4 mt-3 text-sm text-gray-600">
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.phone && <span>• {personalDetails.phone}</span>}
          {personalDetails.location && <span>• {personalDetails.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-primary">{exp.company}</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-primary">{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
                {edu.gpa && (
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill.name}
                {skill.level && (
                  <span className="text-gray-500 ml-1">• {skill.level}</span>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-medium text-gray-900">{cert.name}</h3>
                <p className="text-primary">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}