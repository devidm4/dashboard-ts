import React from "react";

import styles from "./Input.module.css";

import { Field, ErrorMessage } from "formik";


interface InputProps {
    name: string;
    label: string;
    type?: string;
    errors?: string;
    touched?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, type = 'text', errors, touched }) => {

    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <Field
                type={type}
                name={name}
                id={name}
                className={`${styles.input} ${errors && touched ? styles.error : ''}`}
            />
            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
        </div>
    );
};

export default Input;