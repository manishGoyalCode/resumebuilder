import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Input } from '../common/Input';
import { TextArea } from '../common/TextArea';

export const PersonalInfoForm: React.FC = () => {
    const { resumeData, updateSection } = useResume();
    const { personalInfo } = resumeData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateSection('personalInfo', {
            ...personalInfo,
            [name]: value
        });
    };

    return (
        <div className="form-section">
            <h3 style={{ marginBottom: '1rem' }}>Personal Information</h3>
            <Input
                label="Full Name"
                name="fullName"
                value={personalInfo.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
            />
            <Input
                label="Job Title"
                name="title"
                value={personalInfo.title}
                onChange={handleChange}
                placeholder="e.g. Senior Software Engineer"
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                />
                <Input
                    label="Phone"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                />
            </div>
            <Input
                label="Location"
                name="location"
                value={personalInfo.location}
                onChange={handleChange}
                placeholder="San Francisco, CA"
            />
            <TextArea
                label="Professional Summary"
                name="summary"
                value={personalInfo.summary}
                onChange={handleChange}
                placeholder="Brief summary of your experience and goals..."
            />
        </div>
    );
};
