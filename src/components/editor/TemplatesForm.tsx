import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './TemplatesForm.module.css';

const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and balanced, perfect for general use.' },
    { id: 'classic', name: 'Classic', description: 'Traditional serif layout, great for corporate roles.' },
    { id: 'sidebar', name: 'Sidebar', description: 'Two-column layout with a dedicated sidebar.' },
    { id: 'compact', name: 'Compact', description: 'Dense layout to fit more information on one page.' },
    { id: 'creative', name: 'Creative', description: 'Bold headers and accents for a standout look.' },
];

export const TemplatesForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();

    const handleSelect = (id: string) => {
        // We're treating 'selectedTemplate' as a section for the update helper, 
        // but we might need to cast it or update the context type if strict.
        // For now, assuming updateSection handles root level keys or we use a direct setter if needed.
        // Checking ResumeContext, updateSection updates nested keys or root keys?
        // It seems updateSection takes a key of ResumeData.
        updateSection('selectedTemplate', id as any);
    };

    return (
        <div className={styles.container}>
            <h3>Choose a Template</h3>
            <div className={styles.grid}>
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`${styles.card} ${resumeData.selectedTemplate === template.id ? styles.active : ''}`}
                        onClick={() => handleSelect(template.id)}
                    >
                        <div className={`${styles.preview} ${styles[template.id]}`}>
                            {/* Abstract representation of the template */}
                            <div className={styles.previewHeader}></div>
                            <div className={styles.previewBody}>
                                <div className={styles.previewLine}></div>
                                <div className={styles.previewLine}></div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h4>{template.name}</h4>
                            <p>{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
