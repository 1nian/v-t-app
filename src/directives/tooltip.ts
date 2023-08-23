import type { Directive } from 'vue';

export const tooltip: Directive = {
    mounted(el: HTMLElement) {
        bindEvent(el);
    },
    updated(el: HTMLElement) {
        bindEvent(el);
    },
};

function bindEvent(el: HTMLElement) {
    const curStyle = window.getComputedStyle(el, '');
    const textSpan = document.createElement('span');

    textSpan.style.fontSize = curStyle.fontSize;
    textSpan.style.fontWeight = curStyle.fontWeight;
    textSpan.style.fontFamily = curStyle.fontFamily;
    textSpan.innerHTML = el.innerText;

    el.style.overflow = 'hidden';
    el.style.textOverflow = 'ellipsis';
    el.style.whiteSpace = 'nowrap';

    document.body.appendChild(textSpan);

    if (textSpan.offsetWidth > el.offsetWidth) {
        el.onmouseenter = function () {
            el.setAttribute('title', el.innerText);
        };

        el.onmouseleave = function () {
            el.removeAttribute('title');
        };
    }

    document.body.removeChild(textSpan);
}
