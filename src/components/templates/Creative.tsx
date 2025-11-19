import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Creative.module.css';

export const Creative: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.name}>{personalInfo.fullName}</h1>
                    <div className={styles.title}>{personalInfo.title}</div>
                </div>
                <div className={styles.headerDecoration}></div>
            </header>

            <div className={styles.contactBar}>
                <span>{personalInfo.email}</span>
                <span>{personalInfo.phone}</span>
                <span>{personalInfo.location}</span>
                {personalInfo.socialLinks.map((l, i) => <span key={i}>{l.url}</span>)}
            </div>

            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    {skills.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Skills</h2>
                            <div className={styles.skillsList}>
                                {skills.map(cat => (
                                    <div key={cat.id} className={styles.skillCategory}>
                                        <div className={styles.catName}>{cat.name}</div>
                                        <div className={styles.catSkills}>
                                            {cat.skills.map((skill, i) => (
                                                <span key={i} className={styles.pill}>{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Education</h2>
                            {education.map(edu => (
                                <div key={edu.id} className={styles.eduItem}>
                                    <div className={styles.eduDegree}>{edu.degree}</div>
                                    <div className={styles.eduField}>{edu.field}</div>
                                    <div className={styles.eduSchool}>{edu.institution}</div>
                                    <div className={styles.eduDate}>{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <div className={styles.rightColumn}>
                    {personalInfo.summary && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>About Me</h2>
                            <p>{personalInfo.summary}</p>
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experience</h2>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.role}>{exp.role}</span>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <div className={styles.date}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                    <div className={styles.desc}>{exp.description}</div>
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
                                        <span className={styles.role}>{proj.name}</span>
                                        {proj.link && <a href={proj.link} className={styles.link}>Link</a>}
                                    </div>
                                    <div className={styles.desc}>{proj.description}</div>
                                    {proj.technologies.length > 0 && (
                                        <div className={styles.tech}>
                                            {proj.technologies.map((t, i) => <span key={i}>#{t} </span>)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
