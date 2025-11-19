import React from 'react';
import styles from './EmptyState.module.css';

export const EmptyState: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.illustration}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="var(--primary-light)" opacity="0.5" />
                    <rect x="60" y="60" width="80" height="100" rx="4" fill="white" stroke="var(--primary)" strokeWidth="2" />
                    <rect x="70" y="75" width="60" height="8" rx="2" fill="var(--primary)" opacity="0.2" />
                    <rect x="70" y="90" width="40" height="4" rx="1" fill="var(--text-muted)" />
                    <rect x="70" y="100" width="60" height="4" rx="1" fill="var(--text-muted)" />
                    <rect x="70" y="110" width="50" height="4" rx="1" fill="var(--text-muted)" />
                    <circle cx="140" cy="150" r="20" fill="var(--primary)" />
                    <path d="M132 150L138 156L148 144" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className={styles.title}>Start Building Your Resume</h3>
            <p className={styles.description}>
                Fill in your details in the editor to see your resume come to life here.
            </p>
        </div>
    );
};
