import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function CompactTemplate({ resume }: Props) {
  const {
    personalDetails,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg p-6 text-sm">
      {/* Compact Header */}
      <header className="border-b border-gray-300 pb-4 mb-4">
        <div className="flex justify-between items-baseline">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {personalDetails.fullName}
            </h1>
            <p className="text-gray-600">{personalDetails.title}</p>
          </div>
          <div className="text-right text-gray-600">
            {personalDetails.email && <div>{personalDetails.email}</div>}
            {personalDetails.phone && <div>{personalDetails.phone}</div>}
            {personalDetails.location && <div>{personalDetails.location}</div>}
          </div>
        </div>
      </header>

      <div className="space-y-4">
        {/* Concise Summary */}
        {summary && (
          <section>
            <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">
              Professional Summary
            </h2>
            <p className="text-gray-600 leading-tight">{summary}</p>
          </section>
        )}

        {/* Skills in Columns */}
        {skills.length > 0 && (
          <section>
            <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">
              Skills
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center bg-gray-50 px-2 py-1 rounded"
                >
                  <span className="text-gray-900">{skill.name}</span>
                  <span className="text-gray-500 text-xs">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Condensed Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">
              Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-xs">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="mt-1 space-y-1">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-600 pl-3 relative before:content-['•'] before:absolute before:left-0"
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

        {/* Efficient Education Layout */}
        {education.length > 0 && (
          <section>
            <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">
                      {edu.institution} • {edu.field}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-xs">
                      {edu.startDate} - {edu.endDate}
                    </span>
                    {edu.gpa && (
                      <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compact Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="font-bold text-gray-700 mb-2 uppercase text-xs tracking-wider">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-gray-600">
                  <div className="font-bold text-gray-900">{cert.name}</div>
                  <div className="flex justify-between items-baseline">
                    <span>{cert.issuer}</span>
                    <span className="text-xs">{cert.date}</span>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 text-xs"
                    >
                      View →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}