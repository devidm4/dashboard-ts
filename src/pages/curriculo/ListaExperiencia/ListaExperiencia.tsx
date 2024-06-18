import React, { useEffect }  from "react";

import {  useNavigate } from "react-router-dom";

import styles from "./ListaExperiencia.module.css";

import { Experiencia, deleteExperiencia, getExperiencias } from "../../../services/experienciaService";


const ListaExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencias = await getExperiencias();
            setExperiencias(experiencias)
        } catch (error) {
            console.log('erro ao buscar experiencias:', error)  
        }
    };

   useEffect(() => {
        fetchExperiencias();
    }, []);


    const handleEdit = (experiencia: Experiencia) => {
        navigate(`/curriculo/experiencia/cadastro`, { state: { experiencia }});
    };

    const handleDelete = async (experiencia: Experiencia) => {
        try {
            await deleteExperiencia(experiencia);
            fetchExperiencias();
            alert("Experiência excluída com sucesso");
        } catch (error) {
            console.log('erro ao excluir experiencia:', error)
            alert('Ocorreu um erro ao excluir a experiência. Tente novamente');
        }
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
                            <button onClick={() => handleDelete(experiencia)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        
       </table>
    )
};

export default ListaExperiencia;