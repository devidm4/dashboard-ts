import Api from "./Api";

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
    imagem?: string;
}

export async function createInformacoes(Informacoes: Informacoes): Promise<Informacoes> {

    const response = await Api.put<Informacoes>('/informacoes/1', Informacoes);
    return response.data
}