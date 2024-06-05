import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./CadastrarInformaçoes.module.css";


interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

const CadastrarInformaçoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: "",
        nome: "",
        cargo: "",
        resumo: "",
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('campo obrigatório'),
        nome: Yup.string().required('campo obrigatório'),
        cargo: Yup.string().required('campo obrigatório'),
        resumo: Yup.string().required('campo obrigatório'),

    });

    const onSubmit = (values: FormValues,{ resetForm } : { resetForm: () => void }) => {
        // Lógica de evnio para backend
        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso!");
    };


    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <form action="" className={styles.form}>

                    <h2 className={styles.title}>Informações Pessoais</h2>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="foto" className={styles.label}>Foto:</label>
                        <input type="text" name="foto" id="foto" className={styles.input} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="nome" className={styles.label}>Nome:</label>
                        <input type="text" name="nome" id="nome" className={styles.input} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="cargo" className={styles.label}>Cargo:</label>
                        <input type="text" name="cargo" id="cargo" className={styles.input} />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label htmlFor="resumo" className={styles.label}>Resumo:</label>
                        <input type="text" name="resumo" id="resumo" className={styles.textarea} />
                    </fieldset>

                </form>
            </Formik>
        </div>
    );
};


export default CadastrarInformaçoes;