import React, { useEffect, useState } from "react";

import { Formik, Form, } from "formik";
import * as Yup from "yup";

import styles from "./CadastrarInformaçoes.module.css";

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import { Informacoes, updateInformacoes, getInformacoes } from "../../../services/InformacoesService";
import InformacoesCard from "./InformacoesCard";


const CadastrarInformaçoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes)

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

    const fetchInformacoes = async () => {
        try {
            const informacoes = await getInformacoes();
            setInformacoes(informacoes);
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInformacoes();
    }, []);


    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {
            await updateInformacoes(values);
            setInformacoes(values);
            console.log(values);
            resetForm();
            alert("Formulário enviado com sucesso!");

        } catch (error) {
            console.error('erro ao enviar formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    };

    const handleDelete = async () => {
        try{
            await updateInformacoes(initialValues);
            setInformacoes(initialValues);
            alert("Informação excluída com sucesso!");
        } catch (error) {
            console.error('Erro ao excluir informação:', error);
            alert('Ocorreu um erro ao excluir a informação. Tente novamente.');
        }
    };


    return (
        <div className={styles.formWrapper}>

            <Formik
                initialValues={informacoes}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
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

             
            {informacoes &&
            Object.entries(informacoes).some(
                ([key, value]) => key !== "id" && value.trim() !==""
                ) && (
            <div className={styles.cardContainer}>
                <InformacoesCard informacoes={informacoes} />
                <button
                    type="button"
                    onClick={handleDelete}
                    className={`${styles.button} ${styles.deleteButton}`}>
                    Deletar
                </button>
            </div>
            )}
        </div>
    );
};


export default CadastrarInformaçoes;