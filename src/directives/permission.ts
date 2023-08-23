import type { Directive, DirectiveBinding } from 'vue';
const permissions = ['000', '111'];

// 验证用户定义的权限是否与当前元素中的权限相匹配或
export const permission: Directive = (el: HTMLElement, binding: DirectiveBinding): void => {
    if (typeof binding.value === 'string' && !permissions.includes(binding.value)) {
        el.style.display = 'none';
    }
};
