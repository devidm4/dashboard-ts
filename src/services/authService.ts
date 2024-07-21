import Api from "./Api";

export interface User {
    email: string;
    password: string;
}

export const login = async (User: User): Promise<User> => {
    const response = await Api.post<User>('/auth/login', User);
    return response.data;
}