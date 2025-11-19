import React, { type TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css'; // Reusing Input styles for consistency

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    maxLength?: number;
    showCount?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    id,
    className,
    placeholder,
    value = '',
    maxLength = 500,
    showCount = true,
    ...props
}) => {
    const currentLength = String(value).length;
    const percentage = (currentLength / maxLength) * 100;

    const getCountColor = () => {
        if (percentage >= 100) return styles.countError;
        if (percentage >= 80) return styles.countWarning;
        return styles.countNormal;
    };

    return (
        <div className={styles.wrapper}>
            <textarea
                id={id}
                className={`${styles.input} ${className || ''}`}
                placeholder={placeholder || " "}
                value={value}
                {...props}
            />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            {showCount && (
                <div className={`${styles.charCount} ${getCountColor()}`}>
                    {currentLength} / {maxLength}
                </div>
            )}
        </div>
    );
};
