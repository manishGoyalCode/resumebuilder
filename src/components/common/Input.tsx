import React, { type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className, placeholder, ...props }) => {
    return (
        <div className={styles.wrapper}>
            <input
                id={id}
                className={`${styles.input} ${className || ''}`}
                placeholder={placeholder || " "} // Space required for :placeholder-shown to work
                {...props}
            />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    );
};
