import React from "react";

import styles from "./CadastrarPortfolio.module.css";

import * as Yup from "yup";

import Input from "../../../components/forms/Input";
import Form from "../../../components/forms/Form";
import Title from "../../../components/common/Title";
import Button from "../../../components/common/Button";

interface FormValues{
    link: string;
    imagem: string;
    title: string;
}

const initialValues: FormValues = {
    link: "",
    imagem: "",
    title: "",
};

const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    imagem: Yup.string().required("Campo obrigatório"),
    title: Yup.string().required("Campo obrigatório")
})

const CadastrarPortfolio: React.FC = () => {
    
    const onSubmit = (values : FormValues, {resetForm}: {resetForm: () => void}) => {
        // Logica de envio para backend
        console.log(values);
        resetForm();
        alert("Formulário enviado com sucesso");
    }

    return (    
        <div className={styles.formWrapper}>
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                        <Title>Cadastro de Portfolio</Title>

                        <Input
                            name="link"
                            type="text"
                            label="Link"
                            errors={errors.link}
                            touched={touched.link}
                        />

                        <Input
                            name="imagem"
                            type="text"
                            label="Imagem"
                            errors={errors.imagem}
                            touched={touched.imagem}
                        />

                        <Input
                            name="title"
                            type="text"
                            label="Titulo"
                            errors={errors.title}
                            touched={touched.title}
                        />


                        <Button type="submit">Cadastrar</Button>
                    </>
 
                    
                )}
            </Form>
                        

        </div>
    );
};

export default CadastrarPortfolio;