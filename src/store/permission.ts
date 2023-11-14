import { defineStore } from 'pinia';
import { utils } from '@/utils';

type Permission = number[];

export const usePermissonStore = defineStore('user-permission', {
    state: () => ({
        permission: <Permission>[],
        permissionKey: 0,
    }),
    getters: {
        getPermission: state => state.permission,
    },
    actions: {
        // 获取权限随机数数组
        getUserPermission() {
            const res = utils.generateUniqueRandomNumbers();
            this.permission = res;
        },
        getPermissionKey() {
            this.permissionKey = Math.floor(Math.random() * 10) + 1;
        },
    },
});
