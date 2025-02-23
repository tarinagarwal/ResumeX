import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function EnterpriseTemplate({ resume }: Props) {
  const {
    personalDetails,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resume;

  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg">
      {/* Professional Header */}
      <header className="bg-teal-800 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{personalDetails.fullName}</h1>
          <p className="text-xl text-teal-100 mb-4">{personalDetails.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {personalDetails.email && (
              <div className="flex items-center">
                <span className="bg-white/10 px-3 py-1 rounded w-full text-center">
                  {personalDetails.email}
                </span>
              </div>
            )}
            {personalDetails.phone && (
              <div className="flex items-center">
                <span className="bg-white/10 px-3 py-1 rounded w-full text-center">
                  {personalDetails.phone}
                </span>
              </div>
            )}
            {personalDetails.location && (
              <div className="flex items-center">
                <span className="bg-white/10 px-3 py-1 rounded w-full text-center">
                  {personalDetails.location}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 max-w-3xl mx-auto space-y-8">
        {/* Executive Summary */}
        {summary && (
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 pb-2 border-b-2 border-teal-800">
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Professional Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 pb-2 border-b-2 border-teal-800">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-wrap justify-between items-baseline gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-teal-700">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-teal-600"
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

        {/* Core Competencies */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 pb-2 border-b-2 border-teal-800">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded"
                >
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-teal-700 text-sm">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 pb-2 border-b-2 border-teal-800">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="text-teal-700">{edu.institution}</p>
                  <p className="text-gray-700">{edu.field}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professional Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 pb-2 border-b-2 border-teal-800">
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-teal-700">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:text-teal-800 text-sm mt-2 inline-block"
                    >
                      View Credential →
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