import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <h1 className={styles.name}>{personalInfo.fullName}</h1>
                <div className={styles.title}>{personalInfo.title}</div>
            </header>

            <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                    <h3 className={styles.sidebarTitle}>Contact</h3>
                    <div className={styles.contactItem}>{personalInfo.email}</div>
                    <div className={styles.contactItem}>{personalInfo.phone}</div>
                    <div className={styles.contactItem}>{personalInfo.location}</div>
                    {personalInfo.socialLinks.map((link, i) => (
                        <div key={i} className={styles.contactItem}>{link.url}</div>
                    ))}
                </div>

                {skills.length > 0 && (
                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarTitle}>Skills</h3>
                        {skills.map(cat => (
                            <div key={cat.id} className={styles.skillGroup}>
                                <div className={styles.skillCategory}>{cat.name}</div>
                                <div className={styles.skillList}>
                                    {cat.skills.map((skill, i) => (
                                        <span key={i} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {education.length > 0 && (
                    <div className={styles.sidebarSection}>
                        <h3 className={styles.sidebarTitle}>Education</h3>
                        {education.map(edu => (
                            <div key={edu.id} className={styles.eduItem}>
                                <div className={styles.eduDegree}>{edu.degree}</div>
                                <div className={styles.eduField}>{edu.field}</div>
                                <div className={styles.eduSchool}>{edu.institution}</div>
                                <div className={styles.eduDate}>{edu.startDate} - {edu.endDate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </aside>

            <main className={styles.main}>
                {personalInfo.summary && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Profile</h2>
                        <p>{personalInfo.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Experience</h2>
                        {experience.map(exp => (
                            <div key={exp.id} className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <div className={styles.itemRole}>{exp.role}</div>
                                    <div className={styles.itemCompany}>{exp.company} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                </div>
                                <div className={styles.itemDesc}>{exp.description}</div>
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
                                    <div className={styles.itemRole}>{proj.name}</div>
                                    {proj.link && <a href={proj.link} className={styles.link}>Link</a>}
                                </div>
                                <div className={styles.itemDesc}>{proj.description}</div>
                                {proj.technologies.length > 0 && (
                                    <div className={styles.tech}>
                                        {proj.technologies.join(' • ')}
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
                )}
            </main>
        </div>
    );
};
