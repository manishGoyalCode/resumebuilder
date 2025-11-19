import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Modern } from '../templates/Modern';
import { Classic } from '../templates/Classic';
import { Creative } from '../templates/Creative';
import { Executive } from '../templates/Executive';
import { Minimalist } from '../templates/Minimalist';
import { Professional } from '../templates/Professional';
import { Tech } from '../templates/Tech';
import { Designer } from '../templates/Designer';
import { Academic } from '../templates/Academic';
import { Startup } from '../templates/Startup';

export const ResumePreview: React.FC = () => {
    const { resumeData } = useResume();

    const renderTemplate = () => {
        switch (resumeData.selectedTemplate) {
            case 'modern':
                return <Modern />;
            case 'classic':
                return <Classic />;
            case 'creative':
                return <Creative />;
            case 'executive':
                return <Executive />;
            case 'minimalist':
                return <Minimalist />;
            case 'professional':
                return <Professional />;
            case 'tech':
                return <Tech />;
            case 'designer':
                return <Designer />;
            case 'academic':
                return <Academic />;
            case 'startup':
                return <Startup />;
            default:
                return <Modern />;
        }
    };

    return <>{renderTemplate()}</>;
};
