<script setup>
import { ref } from 'vue';

import AppSubMenu from './AppSubMenu.vue';

const model = ref([

    {
        label: 'PokeWeb',
        icon: 'pi pi-fw pi-home',
        items: [
            {
                label: 'Welcome',
                icon: 'pi pi-fw pi-home',
                to: '/welcome-pikachu'
            },
            {
                label: 'List pokemons',
                icon: 'pi pi-fw pi-list',
                to: '/list-pokemons'
            },

        ]
    },


    {
        label: 'Start',
        icon: 'pi pi-fw pi-download',
        items: [

            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-info-circle',
                to: '/documentation'
            }
        ]
    }
]);
</script>

<template>
    <AppSubMenu :model="model" />
</template>

<style lang="scss" scoped></style>
