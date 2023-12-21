<template>
    <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { usePermissonStore } from '@/store/permission';
import { useRouter } from 'vue-router';
import api from '@/api';

const initCanvas = () => {
    let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.height = screen.availHeight; //可视区域的高度
    canvas.width = screen.availWidth; //可视区域的宽度
    let str: string[] = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    let Arr = Array(Math.ceil(canvas.width / 10)).fill(0); //获取宽度例如1920 / 10 192

    const rain = () => {
        ctx.fillStyle = 'rgba(0,0,0,0.05)'; //填充背景颜色
        ctx.fillRect(0, 0, canvas.width, canvas.height); //背景
        ctx.fillStyle = '#0f0'; //文字颜色
        Arr.forEach((item, index) => {
            ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
            Arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10; //添加随机数让字符随机出现不至于那么平整
        });
    };
    setInterval(rain, 40);
};

onMounted(() => {
    initCanvas();
});

const router = useRouter();
let timers = ref<number | null>(null);
// 5s之后跳转到首页
const replacePath = () => {
    timers.value = setTimeout(() => {
        router.push('/layout');
    }, 10000);
};

const signin = async () => {
    let res = await api.post('/signin', {
        username: 'admin',
        password: '123456',
    });

    if (!res.success) {
        return;
    }

    localStorage.setItem('v-t-app-token', res.data.access_token);

    replacePath();
};

onMounted(() => {
    signin();
});

onUnmounted(() => {
    timers.value && clearTimeout(timers.value);
    timers.value = null;
});

const store = usePermissonStore();

onUnmounted(() => {
    store.getUserPermission();
    store.getPermissionKey();
});
</script>

<style scoped></style>
