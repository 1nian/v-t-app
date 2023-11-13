import { defineStore } from 'pinia';

type Permission = string[];

export const usePermissonStore = defineStore('user-permission', {
    state: () => ({
        permission: <Permission>[],
    }),
    getters: {
        getPermission: state => state.permission,
    },
    actions: {
        // 获取用户权限
        async getUserPermission() {
            const res = JSON.parse(localStorage.getItem('permission') || JSON.stringify(<Permission>[])) ?? <Permission>[];
            this.permission = res;
        },
    },
});
