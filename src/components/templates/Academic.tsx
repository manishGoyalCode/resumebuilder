import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Academic.module.css';

export const Academic: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <h1 className={styles.name}>{personalInfo.fullName}</h1>
                <div className={styles.contact}>
                    {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
                </div>
            </header>

            {personalInfo.summary && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Research Interests</h2>
                    <p className={styles.text}>{personalInfo.summary}</p>
                </section>
            )}

            {education.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map(edu => (
                        <div key={edu.id} className={styles.entry}>
                            <div className={styles.entryHeader}>
                                <strong>{edu.degree} in {edu.field}</strong>
                            </div>
                            <div className={styles.institution}>{edu.institution}</div>
                            <div className={styles.date}>{edu.startDate} - {edu.endDate}</div>
                        </div>
                    ))}
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Academic Appointments</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.entry}>
                            <div className={styles.entryHeader}>
                                <strong>{exp.role}</strong>, {exp.company}
                            </div>
                            <div className={styles.date}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                            <p className={styles.text}>{exp.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Publications & Research</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.entry}>
                            <div className={styles.entryHeader}>
                                <strong>{proj.name}</strong>
                            </div>
                            <p className={styles.text}>{proj.description}</p>
                            {proj.link && <div className={styles.link}>DOI: {proj.link}</div>}
                        </div>
                    ))}
                </section>
            )}

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Research Skills & Methodologies</h2>
                    {skills.map(cat => (
                        <div key={cat.id} className={styles.skillEntry}>
                            <strong>{cat.name}:</strong> {cat.skills.join('; ')}
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
