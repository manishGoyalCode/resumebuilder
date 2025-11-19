import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Executive.module.css';

export const Executive: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <h1 className={styles.name}>{personalInfo.fullName}</h1>
                <div className={styles.title}>{personalInfo.title}</div>
                <div className={styles.contact}>
                    {[
                        personalInfo.email,
                        personalInfo.phone,
                        personalInfo.location,
                        ...personalInfo.socialLinks.map(l => l.url)
                    ].filter(Boolean).join(' • ')}
                </div>
            </header>

            {personalInfo.summary && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
                    <p className={styles.summary}>{personalInfo.summary}</p>
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <strong>{exp.role}</strong> | {exp.company}
                            </div>
                            <div className={styles.itemDate}>
                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                            </div>
                            <div className={styles.itemDescription}>{exp.description}</div>
                        </div>
                    ))}
                </section>
            )}

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>CORE COMPETENCIES</h2>
                    <div className={styles.skillsGrid}>
                        {skills.map(cat => (
                            <div key={cat.id} className={styles.skillRow}>
                                <strong>{cat.name}:</strong> {cat.skills.join(', ')}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>KEY PROJECTS</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <strong>{proj.name}</strong>
                                {proj.link && <span className={styles.link}> | {proj.link}</span>}
                            </div>
                            <div className={styles.itemDescription}>{proj.description}</div>
                            {proj.technologies.length > 0 && (
                                <div className={styles.tech}>Technologies: {proj.technologies.join(', ')}</div>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {education.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>EDUCATION</h2>
                    {education.map(edu => (
                        <div key={edu.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <strong>{edu.degree} in {edu.field}</strong> | {edu.institution}
                            </div>
                            <div className={styles.itemDate}>
                                {edu.startDate} - {edu.endDate}
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
