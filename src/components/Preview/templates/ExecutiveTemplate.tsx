import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function ExecutiveTemplate({ resume }: Props) {
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
      {/* Header - Sophisticated centered design */}
      <header className="text-center border-b-2 border-primary pb-8 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalDetails.fullName}
        </h1>
        <p className="text-2xl text-primary mb-4">{personalDetails.title}</p>
        <div className="flex justify-center flex-wrap gap-6 text-gray-600">
          {personalDetails.email && (
            <span className="flex items-center">{personalDetails.email}</span>
          )}
          {personalDetails.phone && (
            <span className="flex items-center">{personalDetails.phone}</span>
          )}
          {personalDetails.location && (
            <span className="flex items-center">{personalDetails.location}</span>
          )}
        </div>
      </header>

      {/* Summary - Elegant typography */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Executive Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience - Sophisticated layout */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-primary pl-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <span className="text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-lg text-primary mb-2">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((desc, index) => (
                    <li
                      key={index}
                      className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education - Classic styling */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-primary pl-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-lg text-primary">{edu.institution}</p>
                <p className="text-gray-700">{edu.field}</p>
                {edu.gpa && (
                  <p className="text-gray-600 italic">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills - Elegant grid layout */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded"
              >
                <span className="text-gray-900">{skill.name}</span>
                <span className="text-primary text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications - Professional styling */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="border-l-2 border-primary pl-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.name}
                </h3>
                <p className="text-primary">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-1 block"
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