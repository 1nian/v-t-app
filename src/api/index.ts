import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
    baseURL,
    timeout: 3000,
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    err => {
        Promise.reject(err);
    },
);

api.interceptors.response.use(
    (res: AxiosResponse<any>) => {
        return res.data;
    },
    err => {
        Promise.reject(err);
    },
);

export default api;
