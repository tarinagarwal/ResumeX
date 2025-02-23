import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function PortfolioTemplate({ resume }: Props) {
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
      {/* Visual Header */}
      <header className="bg-gradient-to-r from-pink-600 to-pink-400 text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3">{personalDetails.fullName}</h1>
          <p className="text-2xl font-light text-pink-100 mb-6">
            {personalDetails.title}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {personalDetails.email && (
              <a href={`mailto:${personalDetails.email}`} className="hover:text-pink-200">
                {personalDetails.email}
              </a>
            )}
            {personalDetails.phone && (
              <span className="border-l border-pink-300 pl-4">
                {personalDetails.phone}
              </span>
            )}
            {personalDetails.location && (
              <span className="border-l border-pink-300 pl-4">
                {personalDetails.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 space-y-12">
        {/* Creative Summary */}
        {summary && (
          <section>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">About Me</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Visual Skills Grid */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group relative bg-pink-50 p-6 rounded-lg hover:bg-pink-100 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-pink-600">{skill.level}</p>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-pink-200/50 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience with Visual Elements */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500"
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-pink-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-pink-500"
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

        {/* Education with Cards */}
        {education.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-pink-600 text-lg mb-1">{edu.institution}</p>
                  <p className="text-gray-700">{edu.field}</p>
                  <div className="flex justify-between items-center mt-4 text-gray-500">
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

        {/* Certifications Gallery */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-pink-600">{cert.issuer}</p>
                  <p className="text-gray-500 mb-3">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-pink-600 hover:text-pink-700"
                    >
                      View Certificate
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
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