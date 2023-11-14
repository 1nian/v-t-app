import { toRaw } from 'vue';
import { PiniaPluginContext } from 'pinia';

// 插件配置项
type Options = {
    key?: string; // key前缀
};

// 自定义插件key前缀
const __piniaKey__ = 'xxx';

// localStorage 存储值
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// localStorage 获取值
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {};
};

export const piniaPlugin = (options?: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context;

        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`);

        store.$subscribe(() => {
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state));
        });

        return {
            ...data,
        };
    };
};
