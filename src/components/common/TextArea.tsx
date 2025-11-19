import React, { type TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css'; // Reusing Input styles for consistency

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, className, ...props }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <textarea
                id={id}
                className={`${styles.input} ${className || ''}`}
                style={{ minHeight: '100px', resize: 'vertical' }}
                {...props}
            />
        </div>
    );
};
