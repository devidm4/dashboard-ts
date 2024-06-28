import React from "react";

import * as Yup from "yup";

import styles from "./CadastrarExperiencia.module.css";



import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";
import Form from "../../../components/forms/Form";

import { Experiencia, createOrUpdateExperiencia } from "../../../services/experienciaService";

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";

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
        id: Yup.string(),
        tipo: Yup.string().required('campo obrigatório'),
        titulo: Yup.string().required('campo obrigatório'),
        descricao: Yup.string().required('campo obrigatório'),
        anoInicio: Yup.string().required('campo obrigatório').typeError('deve ser um número'),
        anoFim: Yup.string().required('campo obrigatório').typeError('deve ser um número'),
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
            <Form
                initialValues={experiencia || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {({ errors, touched }) => (
                    <>
                        <Title>Cadastro de Experiência</Title>
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


                        <Button type="submit">Salvar</Button>
                    </>
                )}
            </Form>
        </div>
    )
};

export default CadastrarExperiencia;