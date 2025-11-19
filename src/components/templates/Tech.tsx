import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Tech.module.css';

export const Tech: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <div className={styles.profile}>
                        <h1 className={styles.name}>{personalInfo.fullName}</h1>
                        <div className={styles.title}>{personalInfo.title}</div>
                    </div>

                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarTitle}>// CONTACT</h3>
                        <div className={styles.contactItem}>{personalInfo.email}</div>
                        <div className={styles.contactItem}>{personalInfo.phone}</div>
                        <div className={styles.contactItem}>{personalInfo.location}</div>
                    </div>

                    {skills.length > 0 && (
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>// SKILLS</h3>
                            {skills.map(cat => (
                                <div key={cat.id} className={styles.skillGroup}>
                                    <div className={styles.skillCat}>{cat.name}</div>
                                    {cat.skills.map((skill, i) => (
                                        <div key={i} className={styles.skill}>→ {skill}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </aside>

                <main className={styles.main}>
                    {personalInfo.summary && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{'<summary>'}</h2>
                            <p className={styles.summary}>{personalInfo.summary}</p>
                            <div className={styles.closingTag}>{'</summary>'}</div>
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{'<experience>'}</h2>
                            {experience.map(exp => (
                                <div key={exp.id} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.role}>{exp.role}</span>
                                        <span className={styles.company}>@ {exp.company}</span>
                                    </div>
                                    <div className={styles.date}>{exp.startDate} → {exp.current ? 'present' : exp.endDate}</div>
                                    <div className={styles.description}>{exp.description}</div>
                                </div>
                            ))}
                            <div className={styles.closingTag}>{'</experience>'}</div>
                        </section>
                    )}

                    {projects.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{'<projects>'}</h2>
                            {projects.map(proj => (
                                <div key={proj.id} className={styles.item}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.role}>{proj.name}</span>
                                    </div>
                                    <div className={styles.description}>{proj.description}</div>
                                    {proj.technologies.length > 0 && (
                                        <div className={styles.tech}>Stack: [{proj.technologies.join(', ')}]</div>
                                    )}
                                </div>
                            ))}
                            <div className={styles.closingTag}>{'</projects>'}</div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{'<education>'}</h2>
                            {education.map(edu => (
                                <div key={edu.id} className={styles.item}>
                                    <div className={styles.role}>{edu.degree} in {edu.field}</div>
                                    <div className={styles.company}>{edu.institution}</div>
                                    <div className={styles.date}>{edu.startDate} → {edu.endDate}</div>
                                </div>
                            ))}
                            <div className={styles.closingTag}>{'</education>'}</div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};
