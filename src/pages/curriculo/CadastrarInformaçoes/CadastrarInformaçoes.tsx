import React from "react";

import { Formik, Form, } from "formik";
import * as Yup from "yup";

import styles from "./CadastrarInformaçoes.module.css";

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";



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

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Lógica de evnio para backend
        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso!");
    };


    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>

                        <h2 className={styles.title}>Cadastrar Informações</h2>

                        <Input
                            name="foto"
                            label="Foto"
                            type="text"
                            errors={errors.foto}
                            touched={touched.foto}
                        />

                        <Input
                            name="nome"
                            label="Nome"
                            type="text"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            name="cargo"
                            label="Cargo"
                            type="text"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />

                        <Textarea
                            name="resumo"
                            label="Resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <button type="submit" className={styles.button}>Salvar</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default CadastrarInformaçoes;