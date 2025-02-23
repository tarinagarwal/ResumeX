import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function HybridTemplate({ resume }: Props) {
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
      {/* Modern Header with Traditional Elements */}
      <header className="bg-gradient-to-r from-violet-600 to-violet-400 text-white p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-2">
            {personalDetails.fullName}
          </h1>
          <p className="text-2xl font-light mb-4">{personalDetails.title}</p>
          <div className="flex justify-center flex-wrap gap-6 text-sm">
            {personalDetails.email && (
              <span className="flex items-center">
                <span className="bg-white/20 px-3 py-1 rounded">
                  {personalDetails.email}
                </span>
              </span>
            )}
            {personalDetails.phone && (
              <span className="flex items-center">
                <span className="bg-white/20 px-3 py-1 rounded">
                  {personalDetails.phone}
                </span>
              </span>
            )}
            {personalDetails.location && (
              <span className="flex items-center">
                <span className="bg-white/20 px-3 py-1 rounded">
                  {personalDetails.location}
                </span>
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 max-w-3xl mx-auto">
        {/* Traditional Summary with Modern Typography */}
        {summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-violet-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Modern Skills Layout */}
        {skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-violet-200">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-violet-50 p-4 rounded-lg hover:bg-violet-100 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{skill.name}</h3>
                  <p className="text-violet-600 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hybrid Experience Section */}
        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-violet-200">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-violet-500"
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-violet-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-serif">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-violet-500"
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

        {/* Traditional Education with Modern Touches */}
        {education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-violet-200">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-violet-600 mb-1">{edu.institution}</p>
                  <p className="text-gray-700">{edu.field}</p>
                  <div className="flex justify-between items-center mt-4 text-gray-500 font-serif">
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Modern Certifications with Traditional Typography */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-violet-200">
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-violet-600">{cert.issuer}</p>
                  <p className="text-gray-500 font-serif">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:text-violet-700 text-sm mt-2 inline-block font-medium"
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