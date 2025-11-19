import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Compact.module.css';

export const Compact: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1 className={styles.name}>{personalInfo.fullName}</h1>
                    <div className={styles.title}>{personalInfo.title}</div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.contactRow}>{personalInfo.email} | {personalInfo.phone}</div>
                    <div className={styles.contactRow}>{personalInfo.location}</div>
                    <div className={styles.contactRow}>
                        {personalInfo.socialLinks.map(l => l.url).join(' | ')}
                    </div>
                </div>
            </header>

            <div className={styles.grid}>
                <div className={styles.mainCol}>
                    {personalInfo.summary && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Summary</h3>
                            <p className={styles.summary}>{personalInfo.summary}</p>
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Experience</h3>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.role}>{exp.role}</span>
                                        <span className={styles.company}>{exp.company}</span>
                                        <span className={styles.date}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className={styles.desc}>{exp.description}</div>
                                </div>
                            ))}
                        </section>
                    )}

                    {projects.length > 0 && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Projects</h3>
                            {projects.map(proj => (
                                <div key={proj.id} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.role}>{proj.name}</span>
                                        {proj.link && <a href={proj.link} className={styles.link}>Link</a>}
                                    </div>
                                    <div className={styles.desc}>{proj.description}</div>
                                    {proj.technologies.length > 0 && (
                                        <div className={styles.tech}>[{proj.technologies.join(', ')}]</div>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <div className={styles.sideCol}>
                    {skills.length > 0 && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Skills</h3>
                            {skills.map(cat => (
                                <div key={cat.id} className={styles.skillGroup}>
                                    <div className={styles.skillCat}>{cat.name}</div>
                                    <div className={styles.skillList}>{cat.skills.join(', ')}</div>
                                </div>
                            ))}
                        </section>
                    )}

                    {education.length > 0 && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Education</h3>
                            {education.map(edu => (
                                <div key={edu.id} className={styles.eduItem}>
                                    <div className={styles.eduSchool}>{edu.institution}</div>
                                    <div className={styles.eduDegree}>{edu.degree}</div>
                                    <div className={styles.eduField}>{edu.field}</div>
                                    <div className={styles.eduDate}>{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
