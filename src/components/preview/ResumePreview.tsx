import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Modern } from '../templates/Modern';
import { Classic } from '../templates/Classic';
import { Sidebar } from '../templates/Sidebar';
import { Compact } from '../templates/Compact';
import { Creative } from '../templates/Creative';

export const ResumePreview: React.FC = () => {
    const { resumeData } = useResume();
    const { selectedTemplate } = resumeData;

    switch (selectedTemplate) {
        case 'classic':
            return <Classic />;
        case 'sidebar':
            return <Sidebar />;
        case 'compact':
            return <Compact />;
        case 'creative':
            return <Creative />;
        case 'modern':
        default:
            return <Modern />;
    }
};
