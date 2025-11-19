import React from 'react';
import { useResume } from '../../context/ResumeContext';
import styles from './SaveStatus.module.css';

export const SaveStatus: React.FC = () => {
    const { saveStatus } = useResume();

    if (saveStatus === 'idle') return null;

    return (
        <div className={`${styles.status} ${styles[saveStatus]}`}>
            {saveStatus === 'saving' && (
                <>
                    <span className={styles.spinner}></span>
                    <span>Saving...</span>
                </>
            )}
            {saveStatus === 'saved' && (
                <>
                    <span className={styles.checkmark}>✓</span>
                    <span>Saved</span>
                </>
            )}
            {saveStatus === 'error' && (
                <>
                    <span className={styles.error}>✕</span>
                    <span>Error saving</span>
                </>
            )}
        </div>
    );
};
