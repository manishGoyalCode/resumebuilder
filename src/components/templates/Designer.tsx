import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Designer.module.css';

export const Designer: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <div className={styles.accent}></div>
                <h1 className={styles.name}>{personalInfo.fullName}</h1>
                <div className={styles.title}>{personalInfo.title}</div>
                <div className={styles.contact}>
                    {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
                </div>
            </header>

            <div className={styles.grid}>
                <div className={styles.mainCol}>
                    {personalInfo.summary && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>About</h2>
                            <p className={styles.summary}>{personalInfo.summary}</p>
                        </section>
                    )}

                    {projects.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Portfolio</h2>
                            {projects.map(proj => (
                                <div key={proj.id} className={styles.project}>
                                    <h3 className={styles.projectName}>{proj.name}</h3>
                                    <p className={styles.projectDesc}>{proj.description}</p>
                                    {proj.technologies.length > 0 && (
                                        <div className={styles.tags}>
                                            {proj.technologies.map((tech, i) => (
                                                <span key={i} className={styles.tag}>{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experience</h2>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.item}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.company}>{exp.company} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                    <p className={styles.description}>{exp.description}</p>
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                <div className={styles.sideCol}>
                    {skills.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Skills</h2>
                            {skills.map(cat => (
                                <div key={cat.id} className={styles.skillGroup}>
                                    <h4 className={styles.skillCat}>{cat.name}</h4>
                                    <div className={styles.skillTags}>
                                        {cat.skills.map((skill, i) => (
                                            <span key={i} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
            </div>
        </div>
    );
};
