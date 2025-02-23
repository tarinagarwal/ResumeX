import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { Resume } from '../../types/resume';

interface Props {
  resume: Resume;
}

// Register font with a single, reliable source
Font.register({
  family: 'Inter',
  src: 'https://rsms.me/inter/font-files/Inter-Regular.woff2',
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
    fontSize: 11,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1 solid #E5E7EB',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    color: '#111827',
  },
  title: {
    fontSize: 16,
    color: '#4F46E5',
    marginBottom: 10,
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    color: '#4B5563',
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: '#111827',
    textTransform: 'uppercase',
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    color: '#111827',
  },
  position: {
    fontSize: 12,
    color: '#4F46E5',
    marginBottom: 2,
  },
  date: {
    fontSize: 10,
    color: '#6B7280',
  },
  description: {
    fontSize: 10,
    color: '#374151',
    marginTop: 5,
  },
  bullet: {
    fontSize: 10,
    marginBottom: 3,
    marginLeft: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 4,
    color: '#111827',
  },
});

export function ResumePDF({ resume }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.personalDetails.fullName}</Text>
          <Text style={styles.title}>{resume.personalDetails.title}</Text>
          <View style={styles.contact}>
            {resume.personalDetails.email && (
              <Text>{resume.personalDetails.email}</Text>
            )}
            {resume.personalDetails.phone && (
              <>
                <Text>•</Text>
                <Text>{resume.personalDetails.phone}</Text>
              </>
            )}
            {resume.personalDetails.location && (
              <>
                <Text>•</Text>
                <Text>{resume.personalDetails.location}</Text>
              </>
            )}
          </View>
        </View>

        {resume.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{resume.summary}</Text>
          </View>
        )}

        {resume.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resume.experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <Text style={styles.position}>{exp.position}</Text>
                  <Text style={styles.date}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.company}>{exp.company}</Text>
                {exp.description.map((desc, index) => (
                  <Text key={index} style={styles.bullet}>
                    • {desc}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {resume.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resume.education.map((edu) => (
              <View key={edu.id} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <Text style={styles.position}>{edu.degree}</Text>
                  <Text style={styles.date}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.company}>{edu.institution}</Text>
                <Text style={styles.description}>{edu.field}</Text>
                {edu.gpa && (
                  <Text style={styles.description}>GPA: {edu.gpa}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {resume.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {resume.skills.map((skill) => (
                <Text key={skill.id} style={styles.skill}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>
        )}

        {resume.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {resume.certifications.map((cert) => (
              <View key={cert.id} style={styles.experienceItem}>
                <Text style={styles.position}>{cert.name}</Text>
                <Text style={styles.company}>{cert.issuer}</Text>
                <Text style={styles.date}>{cert.date}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}