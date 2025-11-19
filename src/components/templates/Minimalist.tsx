import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Minimalist.module.css';

export const Minimalist: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <h1 className={styles.name}>{personalInfo.fullName}</h1>
                <div className={styles.title}>{personalInfo.title}</div>
                <div className={styles.contact}>
                    {personalInfo.email} {personalInfo.phone && `• ${personalInfo.phone}`} {personalInfo.location && `• ${personalInfo.location}`}
                </div>
            </header>

            {personalInfo.summary && (
                <section className={styles.section}>
                    <p className={styles.summary}>{personalInfo.summary}</p>
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.item}>
                            <div className={styles.itemRow}>
                                <span className={styles.itemTitle}>{exp.role}, {exp.company}</span>
                                <span className={styles.itemDate}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <p className={styles.itemDescription}>{exp.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Projects</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.item}>
                            <div className={styles.itemRow}>
                                <span className={styles.itemTitle}>{proj.name}</span>
                            </div>
                            <p className={styles.itemDescription}>{proj.description}</p>
                        </div>
                    ))}
                </section>
            )}

            {education.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map(edu => (
                        <div key={edu.id} className={styles.item}>
                            <div className={styles.itemRow}>
                                <span className={styles.itemTitle}>{edu.degree} in {edu.field}, {edu.institution}</span>
                                <span className={styles.itemDate}>{edu.startDate} — {edu.endDate}</span>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <div className={styles.skills}>
                        {skills.map(cat => cat.skills).flat().join(' • ')}
                    </div>
                </section>
            )}
        </div>
    );
};
