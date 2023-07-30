import type { Directive, DirectiveBinding } from 'vue';
const permission = ['000', '111'];

// 验证用户定义的权限是否与当前元素中的权限相匹配或
export const vPermission: Directive = (el: HTMLElement, binding: DirectiveBinding): void => {
    if (typeof binding.value === 'string' && !permission.includes(binding.value)) {
        el.style.display = 'none';
    }
};
