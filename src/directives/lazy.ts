import type { Directive, DirectiveBinding } from 'vue';

export const vLazy: Directive = (el: HTMLImageElement, binding: DirectiveBinding): void => {
    // 设置默认图片
    el.src = new URL(`../assets/vue.svg`, import.meta.url).href;

    // 在图片加载时执行操作（这会在页面加载时自动调用）。 这个Directive
    let observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
            setTimeout(() => {
                // 等待2秒钟，然后重新加载图片。这可以通过在运行时创
                el.src = binding.value;
            }, 2000);

            observer.unobserve(el); // Unobserve first element.
        }
    });
    observer.observe(el);
};
