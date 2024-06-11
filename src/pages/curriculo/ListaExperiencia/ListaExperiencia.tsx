import React from "react";

import styles from "./ListaExperiencia.module.css";

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const ListaExperiencia: React.FC = () => {

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([
        {
            titulo: "Experiência 1",
            descricao: "Descrição da experiência 1",
            tipo: "Tipo da experiência 1",
            anoInicio: "2020",
            anoFim: "2021",
        },
        {
            titulo: "Experiência 2",
            descricao: "Descrição da experiência 2",
            tipo: "Tipo da experiência 2",
            anoInicio: "2021",
            anoFim: "2022",
        },
    ]);

    const handleDelete = (index: number) => {
        // Lógica para excluir a experiência
    };

    const handleEdit = (experiencia: Experiencia) => {
        // Lógica para editar a experiência
    };

    return (
       <table className={styles.table}>
        <thead>
            <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Ano de Início</th>
                <th>Ano de Fim</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(experiencia)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        
       </table>
    )
};

export default ListaExperiencia;