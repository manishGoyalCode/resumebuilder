
import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import type { Experience } from '../../types/resume';
import styles from './Form.module.css';

export const ExperienceForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();
    const { experience } = resumeData;
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const addExperience = () => {
        const newExp: Experience = {
            id: crypto.randomUUID(),
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
        };
        updateSection('experience', [newExp, ...experience]);
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        const updatedExp = experience.map(exp => {
            if (exp.id === id) {
                return { ...exp, [field]: value };
            }
            return exp;
        });
        updateSection('experience', updatedExp);
    };

    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        if (deleteId) {
            updateSection('experience', experience.filter(exp => exp.id !== deleteId));
            setDeleteId(null);
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>Experience</h3>
                <Button onClick={addExperience}>
                    + Add Experience
                </Button>
            </div>

            <div className={styles.list}>
                {experience.map((exp) => (
                    <div key={exp.id} className={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => confirmDelete(exp.id)}
                                aria-label="Remove experience"
                                style={{ color: '#ef4444' }}
                            >
                                ×
                            </Button>
                        </div>

                        <Input
                            label="Company"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            placeholder="e.g. Google"
                        />
                        <Input
                            label="Role"
                            value={exp.role}
                            onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                            placeholder="e.g. Senior Software Engineer"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input
                                label="Start Date"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                placeholder="e.g. Jan 2020"
                            />
                            <Input
                                label="End Date"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                placeholder="e.g. Present"
                                disabled={exp.current}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                <input
                                    type="checkbox"
                                    checked={exp.current}
                                    onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                />
                                I currently work here
                            </label>
                        </div>

                        <TextArea
                            label="Description"
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            placeholder="• Led a team of 5 developers..."
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!deleteId}
                onClose={() => setDeleteId(null)}
                title="Delete Experience"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </>
                }
            >
                <p>Are you sure you want to delete this experience item? This action cannot be undone.</p>
            </Modal>
        </div>
    );
};
