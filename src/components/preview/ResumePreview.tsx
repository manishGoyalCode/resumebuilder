import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './ResumePreview.module.css';

export const ResumePreview: React.FC = () => {
    const { resumeData } = useResume();
    const { personalInfo, skills, experience, projects, education } = resumeData;

    return (
        <div className={styles.resume} id="resume-preview">
            <header className={styles.header}>
                <h1 className={styles.name}>{personalInfo.fullName || 'Your Name'}</h1>
                <div className={styles.title}>{personalInfo.title || 'Software Developer'}</div>

                <div className={styles.contact}>
                    {personalInfo.email && (
                        <div className={styles.contactItem}>
                            <span>📧</span> {personalInfo.email}
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className={styles.contactItem}>
                            <span>📱</span> {personalInfo.phone}
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className={styles.contactItem}>
                            <span>📍</span> {personalInfo.location}
                        </div>
                    )}
                    {personalInfo.socialLinks.map((link, index) => (
                        <div key={index} className={styles.contactItem}>
                            <span>🔗</span> {link.url}
                        </div>
                    ))}
                </div>

                {personalInfo.summary && (
                    <div className={styles.description} style={{ marginTop: '1rem' }}>
                        {personalInfo.summary}
                    </div>
                )}
            </header>

            {skills.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <div className={styles.skillsList}>
                        {skills.map(cat => (
                            <div key={cat.id} className={styles.skillCategory}>
                                <span className={styles.categoryName}>{cat.name}:</span>
                                <span className={styles.skillItems}>{cat.skills.join(', ')}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {experience.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    {experience.map(exp => (
                        <div key={exp.id} className={styles.experienceItem}>
                            <div className={styles.itemHeader}>
                                <div>
                                    <span className={styles.itemTitle}>{exp.role}</span>
                                    <span style={{ margin: '0 0.5rem' }}>at</span>
                                    <span className={styles.itemSubtitle}>{exp.company}</span>
                                </div>
                                <div className={styles.itemDate}>
                                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                </div>
                            </div>
                            <div className={styles.description}>
                                {exp.description}
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {projects.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Projects</h2>
                    {projects.map(proj => (
                        <div key={proj.id} className={styles.projectItem}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemTitle}>{proj.name}</span>
                                {proj.link && (
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className={styles.itemDate} style={{ color: 'var(--primary)' }}>
                                        Link ↗
                                    </a>
                                )}
                            </div>
                            <div className={styles.description} style={{ marginBottom: '0.25rem' }}>
                                {proj.description}
                            </div>
                            {proj.technologies.length > 0 && (
                                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                                    <strong>Tech:</strong> {proj.technologies.join(', ')}
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {education.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    {education.map(edu => (
                        <div key={edu.id} className={styles.educationItem}>
                            <div className={styles.itemHeader}>
                                <div>
                                    <span className={styles.itemTitle}>{edu.institution}</span>
                                </div>
                                <div className={styles.itemDate}>
                                    {edu.startDate} - {edu.endDate}
                                </div>
                            </div>
                            <div className={styles.itemSubtitle}>
                                {edu.degree} in {edu.field}
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
