import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';  
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/Poke-App/' : '/',  
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),  
        }
    },
    build: {
        outDir: 'dist',  
        sourcemap: false,  
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
