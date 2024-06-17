import Api from "./Api";

export interface Experiencia {
    id: number;
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

export const createExperiencia = async (experiencia: Experiencia) => {
    const response = await Api.post('/experiencias', experiencia);
    return response.data;
}

export const getExperiencias = async () => {
    const response = await Api.get('/experiencias');
    return response.data;
}

export const getExperienciasById = async (id: number) => {
    const response = await Api.get(`/experiencias/${id}`);
    return response.data;
}

export const updateExperiencia = async (experiencia: Experiencia) => {
    const response = await Api.put(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
}

export const deleteExperiencia = async (id: number) => {
    const response = await Api.delete(`/experiencias/${id}`);
    return response.data;
}