import { onMounted, onUnmounted } from 'vue';

export function useEventListener(target: Window, eventName: string, handler: EventListenerOrEventListenerObject) {
    onMounted(() => {
        target.addEventListener(eventName, handler);
    });
    onUnmounted(() => {
        target.removeEventListener(eventName, handler);
    });
}
