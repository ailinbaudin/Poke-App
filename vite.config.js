export default defineConfig({
    base: '/Poke-App/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
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