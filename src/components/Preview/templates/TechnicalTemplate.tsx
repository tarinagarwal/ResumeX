import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function TechnicalTemplate({ resume }: Props) {
  const {
    personalDetails,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg font-mono">
      {/* Header with Technical Aesthetic */}
      <header className="bg-blue-600 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 font-sans">
            {personalDetails.fullName}
          </h1>
          <p className="text-xl mb-4 text-blue-100">{personalDetails.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            {personalDetails.email && (
              <div className="flex items-center space-x-2">
                <span className="text-blue-200">{'>'}</span>
                <span>{personalDetails.email}</span>
              </div>
            )}
            {personalDetails.phone && (
              <div className="flex items-center space-x-2">
                <span className="text-blue-200">{'>'}</span>
                <span>{personalDetails.phone}</span>
              </div>
            )}
            {personalDetails.location && (
              <div className="flex items-center space-x-2">
                <span className="text-blue-200">{'>'}</span>
                <span>{personalDetails.location}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 max-w-3xl mx-auto space-y-8">
        {/* Technical Skills Grid - Prioritized at the top */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">{'{'}</span>
              Technical Skills
              <span className="text-blue-400 ml-2">{'}'}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                >
                  <div className="font-medium text-gray-900">{skill.name}</div>
                  <div className="text-sm text-blue-600">{skill.level}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Summary as Code Comment */}
        {summary && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">{'/*'}</span>
              Professional Summary
              <span className="text-blue-400 ml-2">{'*/'}</span>
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              {summary}
            </p>
          </section>
        )}

        {/* Experience as Function Blocks */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">{'function'}</span>
              Professional Experience
              <span className="text-blue-400 ml-2">{'()'}</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-4 font-sans relative before:content-['$'] before:absolute before:left-0 before:text-blue-400"
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

        {/* Education as Class Declaration */}
        {education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">{'class'}</span>
              Education
              <span className="text-blue-400 ml-2">{'{}'}</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-700 font-sans">{edu.field}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications as Import Statements */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">{'import'}</span>
              Certifications
              <span className="text-blue-400 ml-2">{'from'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-blue-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center mt-2"
                    >
                      <span className="text-blue-400 mr-1">{'import'}</span>
                      View Credential
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