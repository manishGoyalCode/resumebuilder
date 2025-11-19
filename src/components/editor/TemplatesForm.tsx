import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './TemplatesForm.module.css';

export const TemplatesForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();

    const templates = [
        { id: 'modern' as const, name: 'Modern', description: 'Clean and contemporary design' },
        { id: 'classic' as const, name: 'Classic', description: 'Traditional professional layout' },
        { id: 'creative' as const, name: 'Creative', description: 'Bold and artistic style' },
        { id: 'executive' as const, name: 'Executive', description: 'ATS-friendly corporate format' },
        { id: 'minimalist' as const, name: 'Minimalist', description: 'Simple and elegant' },
        { id: 'professional' as const, name: 'Professional', description: 'Formal traditional design' },
        { id: 'tech' as const, name: 'Tech', description: 'Developer-focused with code aesthetics' },
        { id: 'designer' as const, name: 'Designer', description: 'Creative portfolio showcase' },
        { id: 'academic' as const, name: 'Academic', description: 'Research and CV format' },
        { id: 'startup' as const, name: 'Startup', description: 'Modern and energetic' },
    ];

    const handleTemplateChange = (templateId: typeof templates[number]['id']) => {
        updateSection('selectedTemplate', templateId);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Choose Your Template</h3>
            <p className={styles.subtitle}>Select a template that best fits your industry and style</p>

            <div className={styles.grid}>
                {templates.map(template => (
                    <button
                        key={template.id}
                        className={`${styles.card} ${resumeData.selectedTemplate === template.id ? styles.selected : ''}`}
                        onClick={() => handleTemplateChange(template.id)}
                    >
                        <div className={styles.cardHeader}>
                            <h4 className={styles.templateName}>{template.name}</h4>
                            {resumeData.selectedTemplate === template.id && (
                                <span className={styles.badge}>Selected</span>
                            )}
                        </div>
                        <p className={styles.description}>{template.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
