import React from "react";

import  Layout  from "./components/layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Home  from "./pages/home";
import  CadastrarInformaçoes  from "./pages/curriculo/CadastrarInformaçoes";
import  CadastrarExperiencia  from "./pages/curriculo/CadastrarExperiencia";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo/informaçoes/cadastro" element={<CadastrarInformaçoes />} />
        <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
};

export default App;
