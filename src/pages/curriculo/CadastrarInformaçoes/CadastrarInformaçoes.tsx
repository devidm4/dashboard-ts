import React, { useEffect, useState } from "react";


import * as Yup from "yup";

import styles from "./CadastrarInformaçoes.module.css";

import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import { Informacoes, updateInformacoes, getInformacoes } from "../../../services/InformacoesService";
import InformacoesCard from "./InformacoesCard";
import Button from "../../../components/common/Button";
import Form from "../../../components/forms/Form";
import Title from "../../../components/common/Title";


const CadastrarInformaçoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes)

    const initialValues: Informacoes = {
        id: 0,
        foto: "",
        nome: "",
        cargo: "",
        resumo: "",
    };

    const validationSchema = Yup.object().shape({
        id: Yup.number(),
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

            <Form
                initialValues={informacoes}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {({ errors, touched }) => (
                    <>

                        <Title>Cadastrar Informações</Title>

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

                        <Button type="submit">Salvar</Button>

                    </>
                )}
            </Form>

             
            {informacoes &&
            Object.entries(informacoes).some(
                ([key, value]) => key !== "id" && value.trim() !==""
                ) && (
            <div className={styles.cardContainer}>
                <InformacoesCard informacoes={informacoes} />
    
                <Button onClick={handleDelete} red >Deletar</Button>
            </div>
            )}
        </div>
    );
};


export default CadastrarInformaçoes;