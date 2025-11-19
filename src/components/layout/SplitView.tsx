import React, { type ReactNode } from 'react';
import styles from './SplitView.module.css';

interface SplitViewProps {
    editor: ReactNode;
    preview: ReactNode;
}

export const SplitView: React.FC<SplitViewProps> = ({ editor, preview }) => {
    return (
        <main className={styles.container}>
            <div className={styles.editorPane}>
                {editor}
            </div>
            <div className={styles.previewPane}>
                <div className={styles.previewWrapper}>
                    {preview}
                </div>
            </div>
        </main>
    );
};
