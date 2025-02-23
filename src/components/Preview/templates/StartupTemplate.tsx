import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function StartupTemplate({ resume }: Props) {
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
      {/* Dynamic Header with Gradient */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-400 text-white p-8 rounded-t-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{personalDetails.fullName}</h1>
          <p className="text-2xl font-light mb-4 text-purple-100">
            {personalDetails.title}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {personalDetails.email && (
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {personalDetails.email}
              </span>
            )}
            {personalDetails.phone && (
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {personalDetails.phone}
              </span>
            )}
            {personalDetails.location && (
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {personalDetails.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Impact-Focused Summary */}
        {summary && (
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
          </section>
        )}

        {/* Experience with Impact Metrics */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Impact</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-purple-600">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-purple-600"
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

        {/* Skills as Tags */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Superpowers
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium"
                >
                  {skill.name}
                  {skill.level && (
                    <span className="text-purple-400 ml-2">• {skill.level}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education with Modern Style */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Foundation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-purple-600 mb-1">{edu.institution}</p>
                  <p className="text-gray-700">{edu.field}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
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

        {/* Certifications with Modern Cards */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-purple-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 text-sm inline-flex items-center"
                    >
                      Verify →
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