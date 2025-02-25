<template>
    <div class="card docs documentation ">
        <h2 class="text-title">Comenzando</h2>
        <p>
            Este proyecto está basado en <b>Vue 3</b> , <b>Vite</b> <b> PrimeVue</b> y utiliza para la interfaz de usuario. Se ha
            integrado un menú de navegación para mejorar la estructura y la experiencia de usuario.
        </p>
        <h4 class="text-title">Paso 1: Instalar Dependencias</h4>
        <p>Extrae el contenido del archivo zip, navega al directorio del proyecto e instala las dependencias con:</p>
        <pre class="app-code"><code>npm install</code></pre>

        <h4 class="text-title">Paso 2: Ejecutar la Aplicación</h4>
        <p>Una vez instaladas las dependencias, ejecuta la aplicación con:</p>
        <pre class="app-code"><code>npm run dev</code></pre>
        <p>Visita <strong>http://localhost:3000/</strong> en tu navegador para ver la aplicación.</p>

        <h4 class="text-title">Estructura del Proyecto</h4>
        <ul class="line-height-3">
            <li><span class="text-title font-medium">src</span>: Archivos principales.</li>
            <li><span class="text-title font-medium">components</span>: Componentes reutilizables.</li>
            <li><span class="text-title font-medium">assets</span>: Imágenes y estilos.</li>
            <li><span class="text-title font-medium">views</span>: Páginas renderizadas por Vue Router.</li>
            <li><span class="text-title font-medium">store</span>: Estado gestionado por Pinia.</li>
        </ul>
        <h4 class="text-title">Enfoque de Desarrollo</h4>
        <p>Se siguieron los principios SOLID, DRY (Don’t Repeat Yourself) y KISS (Keep It Simple, Stupid) para mantener
            el código limpio y fácil de mantener.</p>
        <h4 class="text-title">Personalización</h4>
        <p>Modifica los componentes y estilos en la carpeta <span class="text-title font-medium">src/components</span>
            según las necesidades de tu proyecto.</p>

        <h4 class="text-title">Configuración del Tema</h4>
        <p>Personaliza el tema editando las variables SCSS en <span class="text-title font-medium">src/styles</span>.
        </p>
    </div>
</template>

<style scoped>
.documentation {
    padding: 4%;
}
</style>
