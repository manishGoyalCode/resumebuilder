import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type ResumeData, initialResumeState } from '../types/resume';
import { storageService } from '../services/storage';

interface ResumeContextType {
    resumeData: ResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
    updateSection: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
    resetResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeState);

    // Load from storage on mount
    useEffect(() => {
        const savedData = storageService.load();
        if (savedData) {
            setResumeData(savedData);
        }
    }, []);

    // Save to storage on change
    useEffect(() => {
        storageService.save(resumeData);
    }, [resumeData]);

    const updateSection = <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => {
        setResumeData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    const resetResume = () => {
        setResumeData(initialResumeState);
        storageService.clear();
    };

    return (
        <ResumeContext.Provider value={{ resumeData, setResumeData, updateSection, resetResume }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};
