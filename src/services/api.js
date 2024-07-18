import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-endpoint.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (username, password) => {
    try {
        const response = await api.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const resetPassword = async (email) => {
    try {
        const response = await api.post('/reset-password', { email });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};