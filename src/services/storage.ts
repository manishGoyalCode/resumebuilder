import type { ResumeData } from '../types/resume';

const STORAGE_KEY = 'resume_builder_data_v1';

export const storageService = {
    save: (data: ResumeData) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Failed to save resume data:', error);
        }
    },

    load: (): ResumeData | null => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Failed to load resume data:', error);
            return null;
        }
    },

    clear: () => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error('Failed to clear resume data:', error);
        }
    }
};
