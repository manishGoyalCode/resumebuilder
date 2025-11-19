import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import type { Project } from '../../types/resume';
import styles from './Form.module.css';

export const ProjectsForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();
    const { projects } = resumeData;
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const addProject = () => {
        const newProject: Project = {
            id: crypto.randomUUID(),
            name: '',
            description: '',
            technologies: [],
            link: '',
            github: ''
        };
        updateSection('projects', [newProject, ...projects]);
    };

    const updateProject = (id: string, field: keyof Project, value: any) => {
        const updatedProjects = projects.map(proj => {
            if (proj.id === id) {
                return { ...proj, [field]: value };
            }
            return proj;
        });
        updateSection('projects', updatedProjects);
    };

    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = () => {
        if (deleteId) {
            updateSection('projects', projects.filter(proj => proj.id !== deleteId));
            setDeleteId(null);
        }
    };

    const handleTechChange = (id: string, value: string) => {
        const techList = value.split(',').map(s => s.trim()); // .filter(Boolean) removed
        updateProject(id, 'technologies', techList);
    };

    const handleTechBlur = (id: string) => {
        const project = projects.find(p => p.id === id);
        if (project) {
            const cleanTech = project.technologies.filter(Boolean);
            updateProject(id, 'technologies', cleanTech);
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>Projects</h3>
                <Button onClick={addProject}>
                    + Add Project
                </Button>
            </div>

            <div className={styles.list}>
                {projects.map((proj) => (
                    <div key={proj.id} className={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => confirmDelete(proj.id)}
                                aria-label="Remove project"
                                style={{ color: '#ef4444' }}
                            >
                                ×
                            </Button>
                        </div>

                        <Input
                            label="Project Name"
                            value={proj.name}
                            onChange={(e) => updateProject(proj.id, 'name', e.target.value)}
                            placeholder="e.g. E-commerce Platform"
                        />

                        <TextArea
                            label="Description"
                            value={proj.description}
                            onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                            placeholder="Built a scalable e-commerce platform using..."
                        />

                        <Input
                            label="Technologies (comma separated)"
                            value={proj.technologies.join(', ')}
                            onChange={(e) => handleTechChange(proj.id, e.target.value)}
                            onBlur={() => handleTechBlur(proj.id)}
                            placeholder="e.g. React, Node.js, MongoDB"
                        />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <Input
                                label="Project Link"
                                value={proj.link || ''}
                                onChange={(e) => updateProject(proj.id, 'link', e.target.value)}
                                placeholder="https://..."
                            />
                            <Input
                                label="GitHub Link"
                                value={proj.github || ''}
                                onChange={(e) => updateProject(proj.id, 'github', e.target.value)}
                                placeholder="https://github.com/..."
                            />
                        </div>
                    </div>
                ))}
            </div>


            <Modal
                isOpen={!!deleteId}
                onClose={() => setDeleteId(null)}
                title="Delete Project"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancel</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </>
                }
            >
                <p>Are you sure you want to delete this project? This action cannot be undone.</p>
            </Modal>
        </div >
    );
};
