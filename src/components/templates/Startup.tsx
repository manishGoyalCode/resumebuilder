import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Startup.module.css';

export const Startup: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.name}>{personalInfo.fullName}</h1>
                    <div className={styles.title}>{personalInfo.title}</div>
                    <div className={styles.contact}>
                        {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
                    </div>
                </div>
                <div className={styles.heroShape}></div>
            </div>

            <div className={styles.content}>
                {personalInfo.summary && (
                    <section className={styles.section}>
                        <div className={styles.badge}>About Me</div>
                        <p className={styles.summary}>{personalInfo.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className={styles.section}>
                        <div className={styles.badge}>Experience</div>
                        {experience.map(exp => (
                            <div key={exp.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <div className={styles.company}>{exp.company}</div>
                                    </div>
                                    <div className={styles.date}>{exp.startDate} - {exp.current ? 'Now' : exp.endDate}</div>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                            </div>
                        ))}
                    </section>
                )}

                {projects.length > 0 && (
                    <section className={styles.section}>
                        <div className={styles.badge}>Projects</div>
                        <div className={styles.projectGrid}>
                            {projects.map(proj => (
                                <div key={proj.id} className={styles.projectCard}>
                                    <h3 className={styles.projectName}>{proj.name}</h3>
                                    <p className={styles.projectDesc}>{proj.description}</p>
                                    {proj.technologies.length > 0 && (
                                        <div className={styles.techStack}>
                                            {proj.technologies.map((tech, i) => (
                                                <span key={i} className={styles.techBadge}>{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className={styles.bottomGrid}>
                    {skills.length > 0 && (
                        <section className={styles.section}>
                            <div className={styles.badge}>Skills</div>
                            <div className={styles.skillsCloud}>
                                {skills.map(cat => cat.skills).flat().map((skill, i) => (
                                    <span key={i} className={styles.skillPill}>{skill}</span>
                                ))}
                            </div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section className={styles.section}>
                            <div className={styles.badge}>Education</div>
                            {education.map(edu => (
                                <div key={edu.id} className={styles.eduItem}>
                                    <div className={styles.eduDegree}>{edu.degree}</div>
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
