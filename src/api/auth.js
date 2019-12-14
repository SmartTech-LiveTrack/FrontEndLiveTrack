import api from '../config/axios';

export const login = async (email, password) => {
    let result = await api.post("/auth/login", {
        email, password
    });
    return result;
}