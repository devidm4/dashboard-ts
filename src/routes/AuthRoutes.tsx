import React from "react";

import {  Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/layout";

import Home from "../pages/home";
import CadastrarInformaçoes from "../pages/curriculo/CadastrarInformaçoes";
import CadastrarExperiencia from "../pages/curriculo/CadastrarExperiencia";
import ListaPortfolio from "../pages/portfolio/ListaPortfolio";
import ListaExperiencia from "../pages/curriculo/ListaExperiencia/ListaExperiencia";
import CadastrarPortfolio from "../pages/portfolio/CadastrarPortfolio";
import { useAuth } from "../contexts/AuthContext";


const AppRoutes: React.FC = () => {

    const { authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Carregando...</div>
    }

    if (!authenticated) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <Layout>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/curriculo/informaçoes/cadastro" element={<CadastrarInformaçoes />} />
                <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
                <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
                <Route path="portfolio/cadastro" element={<CadastrarPortfolio />} />
                <Route path="portfolio/lista" element={<ListaPortfolio />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default AppRoutes;