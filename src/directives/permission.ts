import type { Directive, DirectiveBinding } from 'vue';
import { usePermissonStore } from '@/store/permission';
import { createPinia } from 'pinia';

const store = usePermissonStore(createPinia());
store.getUserPermission();

// 验证用户定义的权限是否与当前元素中的权限相匹配或
export const permission: Directive = (el: HTMLElement, binding: DirectiveBinding): void => {
    if (typeof binding.value === 'string' && !store.permission.includes(binding.value)) {
        el.style.display = 'none';
    }
};
