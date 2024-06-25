import React from "react";

import styles from "./Login.module.css";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "../../components/forms/Input";
import { useNavigate } from "react-router-dom";


interface LoginValues {
    email: string;
    password: string;
};

const inicialValues: LoginValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email inválido")
        .required("E-mail é obrigatório"),
    password: Yup.string()
        .min(6, "Senha deve conter pelo menos 6 digitos")
        .required("Senha é obrigatório"),
})

const Login: React.FC = () => {
    const navigate = useNavigate();

    const onSubmit = async (values: LoginValues) => {
        try {
            navigate("/");
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.fromWrapper}>
                <Formik
                    initialValues={inicialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <h1 className={styles.title}>MEU SITE PESSOAL</h1>

                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                errors={errors.email}
                                touched={touched.email}
                            />

                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                errors={errors.password}
                                touched={touched.password}
                            />

                            <button type="submit" className={styles.button}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;