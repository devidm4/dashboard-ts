import React from "react";

import { Formik, Form, } from "formik";
import * as Yup from "yup";

import styles from "./CadastrarInformaçoes.module.css";

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import { Informacoes, createInformacoes } from "../../../services/InformacoesService";


const CadastrarInformaçoes: React.FC = () => {

    const initialValues: Informacoes = {
        id: 1,
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

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try{
            await createInformacoes(values);
            console.log(values);
            resetForm();
            alert("Formulário enviado com sucesso!");

        }catch (error) {
            console.error('erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
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