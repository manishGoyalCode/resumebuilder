import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>DevResume</h1>
                <span className={styles.badge}>Beta</span>
            </div>
            <nav className={styles.nav}>
                <button
                    onClick={toggleTheme}
                    className={styles.themeButton}
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
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
