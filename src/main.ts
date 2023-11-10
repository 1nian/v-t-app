import { createApp, Directive } from 'vue';
import App from './App.vue';
import { router } from '@/router/index';
import { createPinia } from 'pinia';
import '@/assets/styles/index.scss';
import 'animate.css';
// 引入字体
import '@/assets/font/font.css';
import { utils } from '@/utils/index';
import { sockets } from './socket';

// 引入全局方法申明文件
import './global.d.ts';

// 引入自定义指令
import * as directives from '@/directives';

const app = createApp(App);

// 全局函数
app.config.globalProperties.$utils = utils;

// 全局sockets
app.config.globalProperties.$sockets = sockets;

// 注册自定义指令
Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.use(router).use(createPinia()).mount('#app');
