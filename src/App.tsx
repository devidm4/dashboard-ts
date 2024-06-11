import React from "react";

import  Layout  from "./components/layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Home  from "./pages/home";
import  CadastrarInformaçoes  from "./pages/curriculo/CadastrarInformaçoes";
import  CadastrarExperiencia  from "./pages/curriculo/CadastrarExperiencia";
import ListaPortfolio from "./pages/portfolio/ListaPortfolio";
import ListaExperiencia from "./pages/curriculo/ListaExperiencia/ListaExperiencia";
import CadastrarPortfolio from "./pages/portfolio/CadastrarPortfolio";

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
};

export default App;
