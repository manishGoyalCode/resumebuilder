import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>DevResume</h1>
                <span className={styles.badge}>Beta</span>
            </div>
            <nav className={styles.nav}>
                <button
                    onClick={() => window.print()}
                    className={styles.downloadButton}
                >
                    Download PDF
                </button>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                </a>
            </nav>
        </header>
    );
};
