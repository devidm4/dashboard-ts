import React from "react";

import * as Yup from "yup";

import styles from "./CadastrarExperiencia.module.css";

import { Formik, Form } from "formik";

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";

import { Experiencia, createOrUpdateExperiencia } from "../../../services/experienciaService";

import { useLocation, useNavigate } from "react-router-dom";

const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state?.experiencia || null;

    const initialValues: Experiencia = {
        id: "0",
        titulo: "",
        tipo: "",
        descricao: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('campo obrigatório'),
        // descricao: Yup.string().required('campo obrigatório'),
        anoInicio: Yup.number().required('campo obrigatório').typeError('deve ser um número'),
        anoFim: Yup.number().required('campo obrigatório').typeError('deve ser um número'),
    });

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void }) => {

        try {
           await createOrUpdateExperiencia(values);
            console.log(values);
            resetForm();
            navigate("/curriculo/experiencia/lista");
            alert("Formulário enviado com sucesso!");
        } catch (error) {
            console.error('erro ao enviar formulário:');
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente!');
        }


    }

    return (
        <div className={styles.formWrapper}>
            <Formik
                initialValues={experiencia || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h1 className={styles.title}>Cadastrar Experiência</h1>
                        <Input
                            name="titulo"
                            label="Título"
                            errors={errors.titulo}
                            touched={touched.titulo}
                        />

                        <Input
                            name="anoInicio"
                            label="Ano Início"
                            errors={errors.anoInicio}
                            touched={touched.anoInicio}
                        />

                        <Input
                            name="anoFim"
                            label="Ano Fim"
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Select
                            name="tipo"
                            label="Tipo de experiência"
                            options={[
                                { value: "Profissional", label: "Profissional" },
                                { value: "Academico", label: "Acadêmica" },
                            ]}
                            errors={errors.anoFim}
                            touched={touched.anoFim}
                        />

                        <Textarea
                            name="descricao"
                            label="Descrição"
                            errors={errors.descricao}
                            touched={touched.descricao}
                        />


                        <button type="submit" className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default CadastrarExperiencia;