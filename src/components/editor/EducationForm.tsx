import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Input } from '../common/Input';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import type { Education } from '../../types/resume';
import styles from './Form.module.css';

export const EducationForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();
    const { education } = resumeData;
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const addEducation = () => {
        const newEdu: Education = {
            id: crypto.randomUUID(),
            institution: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
            current: false
        };
        updateSection('education', [newEdu, ...education]);
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        const updatedEdu = education.map(edu => {
            if (edu.id === id) {
                return { ...edu, [field]: value };
            }
            return edu;
        });
        updateSection('education', updatedEdu);
    };

    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        if (deleteId) {
            updateSection('education', education.filter(edu => edu.id !== deleteId));
            setDeleteId(null);
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>Education</h3>
                <Button onClick={addEducation}>
                    + Add Education
                </Button>
            </div>

            <div className={styles.list}>
                {education.map((edu) => (
                    <div key={edu.id} className={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => confirmDelete(edu.id)}
                                aria-label="Remove education"
                                style={{ color: '#ef4444' }}
                            >
                                ×
                            </Button>
                        </div>

                        <Input
                            label="Institution"
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                            placeholder="e.g. Stanford University"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input
                                label="Degree"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                placeholder="e.g. Bachelor of Science"
                            />
                            <Input
                                label="Field of Study"
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                                placeholder="e.g. Computer Science"
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input
                                label="Start Date"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                placeholder="e.g. 2016"
                            />
                            <Input
                                label="End Date"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                placeholder="e.g. 2020"
                            />
                        </div>
                    </div>
                ))}
            </div>


            <Modal
                isOpen={!!deleteId}
                onClose={() => setDeleteId(null)}
                title="Delete Education"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </>
                }
            >
                <p>Are you sure you want to delete this education entry? This action cannot be undone.</p>
            </Modal>
        </div >
    );
};
