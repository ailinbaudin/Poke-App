import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
process.stderr.write = (chunk) => {
    if (chunk.includes('Deprecation Warning')) {
        return;
    }
};
// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/Poke-App/' : '/', 
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
