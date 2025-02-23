import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function TimelineTemplate({ resume }: Props) {
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
      {/* Minimal Header */}
      <header className="bg-blue-600 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{personalDetails.fullName}</h1>
          <p className="text-xl text-blue-100 mb-4">{personalDetails.title}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {personalDetails.email && (
              <span className="bg-white/10 px-3 py-1 rounded">
                {personalDetails.email}
              </span>
            )}
            {personalDetails.phone && (
              <span className="bg-white/10 px-3 py-1 rounded">
                {personalDetails.phone}
              </span>
            )}
            {personalDetails.location && (
              <span className="bg-white/10 px-3 py-1 rounded">
                {personalDetails.location}
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 max-w-3xl mx-auto">
        {/* Brief Summary */}
        {summary && (
          <section className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Experience Timeline */}
        {experience.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Experience</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />

              <div className="space-y-12">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-blue-600 before:rounded-full"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <p className="text-blue-600">{exp.company}</p>
                        </div>
                        <span className="text-gray-500">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((desc, index) => (
                          <li
                            key={index}
                            className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600"
                          >
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Timeline */}
        {education.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Education</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />

              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-blue-600 before:rounded-full"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <span className="text-gray-500">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                      <p className="text-blue-600">{edu.institution}</p>
                      <p className="text-gray-700">{edu.field}</p>
                      {edu.gpa && (
                        <p className="text-gray-500 mt-2">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-blue-50 p-4 rounded-lg"
                >
                  <h3 className="font-bold text-gray-900">{skill.name}</h3>
                  <p className="text-blue-600 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Timeline */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-8">
              Certifications
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />

              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-blue-600 before:rounded-full"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="font-bold text-gray-900">{cert.name}</h3>
                      <p className="text-blue-600">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm">{cert.date}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                        >
                          View Credential →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}