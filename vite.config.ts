import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 9797,
        open: true,
    },
    base: './', // 基础路径
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import './src/assets/styles/common.scss';
          @import './src/assets/styles/reset.scss';
        `,
            },
        },
    },
});
