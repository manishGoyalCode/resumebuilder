import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Professional.module.css';

export const Professional: React.FC = () => {
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

            <div className={styles.divider}></div>

            {personalInfo.summary && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <p className={styles.summary}>{personalInfo.summary}</p>
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <div>
                                    <strong className={styles.role}>{exp.role}</strong>
                                    <div className={styles.company}>{exp.company}</div>
                                </div>
                                <div className={styles.date}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                            </div>
                            <p className={styles.description}>{exp.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {education.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map(edu => (
                        <div key={edu.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <div>
                                    <strong className={styles.role}>{edu.degree} in {edu.field}</strong>
                                    <div className={styles.company}>{edu.institution}</div>
                                </div>
                                <div className={styles.date}>{edu.startDate} - {edu.endDate}</div>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills & Competencies</h2>
                    {skills.map(cat => (
                        <div key={cat.id} className={styles.skillGroup}>
                            <strong>{cat.name}:</strong> {cat.skills.join(', ')}
                        </div>
                    ))}
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Notable Projects</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.item}>
                            <strong className={styles.role}>{proj.name}</strong>
                            <p className={styles.description}>{proj.description}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
