import React from "react";

import { useState } from "react";

import styles from "./ListaPortfolio.module.css";

interface portfolio {
    titulo: string;
    imagem: string;
    link: string;
};

const ListaPortfolio: React.FC = () => {

const [portfolio, setPortfolio] = useState<portfolio[]>([
    {
        titulo: "Projeto 1",
        imagem: "https://via.placeholder.com/150",
        link: "https://via.placeholder.com/150",
    },
    {
        titulo: "Projeto 2",
        imagem: "https://via.placeholder.com/150",
        link: "https://via.placeholder.com/150",
    },
    {
        titulo: "Projeto 3",
        imagem: "https://via.placeholder.com/150",
        link: "https://via.placeholder.com/150",
    },
]);

const handleEdit = (index: number) => {
    // Lógica para editar o item do portfolio
}

const handleDelete = (index: number) => {
    // Lógica para excluir o item do portfolio
}

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{portfolio.map((itemPortfolio, index) => (
                <tr key={index}>
                    <td>{itemPortfolio.titulo}</td>
                    <td><img src={itemPortfolio.imagem} alt={itemPortfolio.titulo} className={styles.imagem} /></td>
                    <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                    <td>
                        <button onClick={() => handleEdit(index)}>Editar</button>
                        <button onClick={() => handleDelete(index)}>Excluir</button>
                    </td>
                    
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ListaPortfolio;