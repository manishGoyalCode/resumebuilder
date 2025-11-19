
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Input } from '../common/Input';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import type { SkillCategory } from '../../types/resume';
import styles from './Form.module.css'; // Shared form styles

export const SkillsForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();
    const { skills } = resumeData;
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const addCategory = () => {
        const newCategory: SkillCategory = {
            id: crypto.randomUUID(),
            name: '',
            skills: []
        };
        updateSection('skills', [...skills, newCategory]);
    };

    const updateCategory = (id: string, field: keyof SkillCategory, value: any) => {
        const updatedSkills = skills.map(cat => {
            if (cat.id === id) {
                return { ...cat, [field]: value };
            }
            return cat;
        });
        updateSection('skills', updatedSkills);
    };

    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        if (deleteId) {
            updateSection('skills', skills.filter(cat => cat.id !== deleteId));
            setDeleteId(null);
        }
    };

    const handleSkillsChange = (id: string, value: string) => {
        // Split by comma and trim
        const skillList = value.split(',').map(s => s.trim()).filter(Boolean);
        updateCategory(id, 'skills', skillList);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>Skills</h3>
                <Button onClick={addCategory}>
                    + Add Category
                </Button>
            </div>

            <div className={styles.list}>
                {skills.map((category) => (
                    <div key={category.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Input
                                label="Category Name"
                                value={category.name}
                                onChange={(e) => updateCategory(category.id, 'name', e.target.value)}
                                placeholder="e.g. Languages, Frameworks"
                                className={styles.cardInput}
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => confirmDelete(category.id)}
                                aria-label="Remove category"
                                style={{ color: '#ef4444' }}
                            >
                                ×
                            </Button>
                        </div>
                        <Input
                            label="Skills (comma separated)"
                            value={category.skills.join(', ')}
                            onChange={(e) => handleSkillsChange(category.id, e.target.value)}
                            placeholder="e.g. JavaScript, TypeScript, React"
                        />
                    </div>
                ))}
            </div>


            <Modal
                isOpen={!!deleteId}
                onClose={() => setDeleteId(null)}
                title="Delete Category"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </>
                }
            >
                <p>Are you sure you want to delete this skill category? This action cannot be undone.</p>
            </Modal>
        </div >
    );
};
