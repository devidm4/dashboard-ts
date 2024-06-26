import api from "./Api";

export interface User {
    id: string;
    email: string;
    password: string;
}

export async function getUserByEmail(email: string): Promise<User> {
    const response = await api.get(`/usuarios`, { params: { email }});
    return response.data[0];
}