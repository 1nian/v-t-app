import type { Directive, DirectiveBinding } from "vue";

export const vLazy: Directive = (
  el: HTMLImageElement,
  binding: DirectiveBinding
): void => {
  console.log(el);
  //   el.src = import.meta.href()
  let observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries[0].intersectionRatio > 0) {
      console.log("000");
      observer.unobserve(el); // Unobserve first element.
    }
  });
  observer.observe(el);
};
