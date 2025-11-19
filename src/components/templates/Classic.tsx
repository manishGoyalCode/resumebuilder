import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Classic.module.css';

export const Classic: React.FC = () => {
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
                    ].filter(Boolean).join(' | ')}
                </div>
            </header>

            <div className={styles.divider}></div>

            {personalInfo.summary && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <p>{personalInfo.summary}</p>
                </section>
            )}

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        {skills.map(cat => (
                            <div key={cat.id} className={styles.skillRow}>
                                <strong>{cat.name}:</strong> {cat.skills.join(', ')}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemTitle}><strong>{exp.role}</strong>, {exp.company}</span>
                                <span className={styles.itemDate}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <div className={styles.itemDescription}>{exp.description}</div>
                        </div>
                    ))}
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Projects</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemTitle}><strong>{proj.name}</strong></span>
                                {proj.link && <a href={proj.link} className={styles.link}>Link</a>}
                            </div>
                            <div className={styles.itemDescription}>{proj.description}</div>
                            {proj.technologies.length > 0 && (
                                <div className={styles.tech}>Tech: {proj.technologies.join(', ')}</div>
                            )}
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
                                <span className={styles.itemTitle}><strong>{edu.institution}</strong></span>
                                <span className={styles.itemDate}>{edu.startDate} - {edu.endDate}</span>
                            </div>
                            <div>{edu.degree} in {edu.field}</div>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
