import { ref } from 'vue';
import { useEventListener } from './event';

export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    useEventListener(window, 'mousemove', (event: Event) => {
        const { clientX, clientY } = event as MouseEvent;
        x.value = clientX;
        y.value = clientY;
    });

    return { x, y };
}
