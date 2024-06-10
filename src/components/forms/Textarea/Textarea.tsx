import React from "react";

import styles from "./Textarea.module.css";

import { Field, ErrorMessage } from "formik";

interface TextareaProps {
    name: string;
    label?: string;
    errors?: string;
    touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, errors, touched }) => {

    return (
        <fieldset className={styles.formGroup}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}:
                </label>
            )}
            <Field
                as="textarea"
                name={name}
                id={name}
                className={`${styles.input} ${errors && touched ? styles.error : ''}`}
            />
            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
        </fieldset>
    );
};

export default Textarea;