<script setup>
import AppConfig from '@/layout/AppConfig.vue';
import { usePrimeVue } from 'primevue/config';
const $primevue = usePrimeVue();

defineExpose({
    $primevue
});
</script>

<template>
    <div class="relative overflow-hidden flex flex-column justify-content-center align-items-center">
        <div class="bg-circle opacity-50" :style="{ top: '-200px', left: '-700px' }"></div>
        <div class="bg-circle hidden lg:flex" :style="{ top: '50px', right: '-800px', transform: 'rotate(60deg)' }"></div>
        <div class="landing-wrapper flex flex-column justify-content-center align-items-center">
            <div class="shadow-soft-3d">
                <img :src="`/demo/images/pokemons/pikachuv2.png`" alt="Pikachu-hello" class="w-auto h-auto max-w-25rem max-h-50" />
            </div>
            <div class="mt-4 md:mt-6 text-center">
                <span class="text-900 block font-bold text-5xl mb-4 text-title">Welcome to Pokédex</span>
                <span class="text-700 block text-xl mb-8 line-height-3c text-box">
                    The digital encyclopedia created by Professor Oak is an invaluable tool<br />
                    to Trainers in the Pokémon world.
                </span>
                <div id="apps" class="my-2 md:my-8">
                    <router-link to="list-pokemons">
                        <Button rounded type="button" class="font-medium cursor-pointer" raised severity="danger">¡Get started!</Button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple />
</template>

<style scoped></style>
