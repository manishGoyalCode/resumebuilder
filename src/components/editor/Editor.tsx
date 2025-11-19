import React, { useState } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { SkillsForm } from './SkillsForm';
import { ExperienceForm } from './ExperienceForm';
import { ProjectsForm } from './ProjectsForm';
import { EducationForm } from './EducationForm';
import { TemplatesForm } from './TemplatesForm';
import styles from './Editor.module.css';

type Section = 'personal' | 'skills' | 'experience' | 'projects' | 'education' | 'templates';

export const Editor: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('personal');

    const sections: { id: Section; label: string }[] = [
        { id: 'personal', label: 'Personal Info' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'templates', label: 'Templates' },
    ];

    return (
        <div className={styles.editor}>
            <div className={styles.tabs}>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`${styles.tab} ${activeSection === section.id ? styles.activeTab : ''}`}
                        onClick={() => setActiveSection(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </div>

            <div className={styles.content}>
                {activeSection === 'personal' && <PersonalInfoForm />}
                {activeSection === 'skills' && <SkillsForm />}
                {activeSection === 'experience' && <ExperienceForm />}
                {activeSection === 'projects' && <ProjectsForm />}
                {activeSection === 'education' && <EducationForm />}
                {activeSection === 'templates' && <TemplatesForm />}
            </div>
        </div>
    );
};
