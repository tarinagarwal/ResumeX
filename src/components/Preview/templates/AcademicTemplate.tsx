import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function AcademicTemplate({ resume }: Props) {
  const {
    personalDetails,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 shadow-lg font-serif">
      {/* Header with Traditional Academic Style */}
      <header className="text-center border-b-2 border-indigo-700 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {personalDetails.fullName}
          {personalDetails.title && (
            <span className="text-2xl text-gray-600 block mt-1">
              {personalDetails.title}
            </span>
          )}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-gray-600">
          {personalDetails.email && (
            <span className="italic">{personalDetails.email}</span>
          )}
          {personalDetails.phone && (
            <span className="italic">{personalDetails.phone}</span>
          )}
          {personalDetails.location && (
            <span className="italic">{personalDetails.location}</span>
          )}
        </div>
      </header>

      {/* Research Interests / Summary */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b">
            Research Interests
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Education - Prioritized in Academic CV */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="pl-4 border-l-2 border-indigo-100">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-lg text-indigo-700 mb-1">{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
                {edu.gpa && (
                  <p className="text-gray-600 mt-1">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b">
            Research Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="pl-4 border-l-2 border-indigo-100">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <span className="text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-lg text-indigo-700 mb-2">{exp.company}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="text-gray-700">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Areas of Expertise */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded"
              >
                <span className="text-gray-900 font-medium">{skill.name}</span>
                <span className="text-indigo-700 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications and Awards */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b">
            Certifications & Awards
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="pl-4 border-l-2 border-indigo-100 py-2"
              >
                <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                <p className="text-indigo-700">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 hover:text-indigo-800 text-sm mt-1 inline-block"
                  >
                    View Certificate →
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