import React, { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import { type ResumeData, initialResumeState } from '../types/resume';
import { storageService } from '../services/storage';

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface ResumeContextType {
    resumeData: ResumeData;
    setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
    updateSection: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
    resetResume: () => void;
    saveStatus: SaveStatus;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resumeData, setResumeData] = useState<ResumeData>(() => {
        // Load from storage on initialization
        const savedData = storageService.load();
        return savedData || initialResumeState;
    });
    const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
    const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    // Save to storage on change with debounce
    useEffect(() => {
        // Clear existing timeout
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current);
        }

        // Set status to saving
        setSaveStatus('saving');

        // Debounce save for 500ms
        saveTimeoutRef.current = setTimeout(() => {
            try {
                storageService.save(resumeData);
                setSaveStatus('saved');

                // Reset to idle after 2 seconds
                setTimeout(() => setSaveStatus('idle'), 2000);
            } catch (error) {
                setSaveStatus('error');
                console.error('Failed to save:', error);
            }
        }, 500);

        return () => {
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current);
            }
        };
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
        <ResumeContext.Provider value={{ resumeData, setResumeData, updateSection, resetResume, saveStatus }}>
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
