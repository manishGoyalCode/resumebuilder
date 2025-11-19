import React, { type TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css'; // Reusing Input styles for consistency

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, className, placeholder, ...props }) => {
    return (
        <div className={styles.wrapper}>
            <textarea
                id={id}
                className={`${styles.input} ${className || ''}`}
                placeholder={placeholder || " "}
                {...props}
            />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    );
};
