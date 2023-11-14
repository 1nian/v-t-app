import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL,
});

api.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        Promise.reject(err);
    },
);

api.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        Promise.reject(err);
    },
);

export default api;
