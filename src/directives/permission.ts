import type { Directive, DirectiveBinding } from 'vue';

type Permission = number[];
// 验证用户定义的权限是否与当前元素中的权限相匹配或
export const permission: Directive = (el: HTMLElement, binding: DirectiveBinding): void => {
    let permission = (binding?.arg as unknown as Permission) ?? <Permission>[];

    if (!permission.includes(binding.value)) {
        el.style.display = 'none';
    }
};
