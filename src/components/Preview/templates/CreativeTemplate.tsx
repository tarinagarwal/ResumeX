import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export function CreativeTemplate({ resume }: Props) {
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
      {/* Asymmetric Header with Dynamic Background */}
      <header className="relative bg-gradient-to-r from-emerald-600 to-emerald-400 text-white p-8">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 transform -skew-x-12" />
        <div className="relative">
          <h1 className="text-4xl font-bold mb-2">{personalDetails.fullName}</h1>
          <p className="text-2xl font-light mb-4">{personalDetails.title}</p>
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
        {/* Summary with Creative Typography */}
        {summary && (
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              {summary}
            </p>
          </section>
        )}

        {/* Experience with Dynamic Cards */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">Journey</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-emerald-600 rounded-full" />
                  <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-emerald-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <li
                        key={index}
                        className="text-gray-700 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-emerald-600"
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

        {/* Skills with Creative Grid */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">
              Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white p-4 rounded-lg shadow-sm"
                >
                  <div className="relative z-10">
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                    <p className="text-emerald-600 text-sm">{skill.level}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-100 rounded-full transform translate-x-8 translate-y-8" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education with Modern Cards */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-emerald-600"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-700 mb-2">{edu.field}</p>
                  <div className="flex justify-between text-sm text-gray-500">
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

        {/* Certifications with Visual Style */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-emerald-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center"
                    >
                      View Credential
                      <span className="ml-1">→</span>
                    </a>
                  )}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}