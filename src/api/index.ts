import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { AxiosCustomResponse } from '@/types';
const baseURL = import.meta.env.VITE_BASE_URL;

export class Request {
    instance: AxiosInstance;

    baseConfig: AxiosRequestConfig = {
        baseURL,
        timeout: 3000,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('v-t-app-token'),
        },
    };

    constructor() {
        this.instance = axios.create(this.baseConfig);

        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return config;
            },
            err => {
                Promise.reject(err);
            },
        );

        // 响应拦截器
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res.data;
            },
            err => {
                Promise.reject(err);
            },
        );
    }

    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance(config);
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosCustomResponse<T>> {
        return this.instance.get(url, config);
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosCustomResponse<T>> {
        return this.instance.post(url, data, config);
    }

    public patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosCustomResponse<T>> {
        return this.instance.patch(url, data, config);
    }

    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosCustomResponse<T>> {
        return this.instance.put(url, data, config);
    }

    public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosCustomResponse<T>> {
        return this.instance.delete(url, config);
    }
}

export default new Request();
