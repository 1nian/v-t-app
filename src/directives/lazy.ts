import type { Directive, DirectiveBinding } from 'vue';

export const lazy: Directive = (el: HTMLImageElement, binding: DirectiveBinding): void => {
    // 设置默认图片
    el.src = new URL(`../assets/vue.svg`, import.meta.url).href;

    let observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
            setTimeout(() => {
                el.src = binding.value;
            }, 2000);

            observer.unobserve(el);
        }
    });
    observer.observe(el);
};
