<script setup>
import { ref, onMounted, computed } from 'vue';
import { usePokeStore } from '@/stores/pokeStore';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import LoadingPokebola from './LoadingPokebola.vue';
import CardPokemons from '@/components/CardPokemons.vue';

const pokeStore = usePokeStore();
const showFavorites = ref(false);
const paginated = ref(true);
const selectedPokemon = ref(null);
const visibleDialog = ref(false);

const filters = ref({
    global: { value: null }
});

const toggleFavorite = (pokemon) => {
    pokeStore.toggleFavorite(pokemon.name);
};

const filteredPokemons = computed(() => {
    return pokeStore.filteredPokemons(showFavorites.value);
});

const showAll = () => {
    showFavorites.value = false;
    paginated.value = true;
};

const showOnlyFavorites = () => {
    showFavorites.value = true;
    paginated.value = true;
};

const showDialog = (pokemon) => {
    console.log('Selected Pokemon:', pokemon);
    selectedPokemon.value = { ...pokemon };
    visibleDialog.value = true;
};


onMounted(() => {
    pokeStore.fetchPokemons();
});
</script>

<template>
    <div class="card">
        <div class="flex justify-content-center">
            <span class="p-input-icon-left topbar">
                <InputText v-model="filters.global.value" placeholder="Search" class="full-width-input" />
            </span>
        </div>
        <DataTable :value="filteredPokemons" :paginator="paginated" :rows="10" dataKey="name" v-model:filters="filters"
            filterDisplay="menu" :globalFilterFields="['name']" :loading="pokeStore.loading" :scrollable="!paginated"
            style="max-height: 500px; overflow-y: auto">

            <Column field="image" style="max-width: 30px;">
                <template #body="{ data }">
                    <div class="image-container">
                        <img :src="data.image" alt="data.name" @click="showDialog(data)">
                    </div>
                </template>
            </Column>
            <Column field="name">
                <template #body="{ data }">
                    <span @click="showDialog(data)" style="cursor: pointer;">{{ data.name }}</span>
                </template>
            </Column>
            <Column field="favorite" alignFrozen="right" style="width: 80px; text-align: center;">
                <template #body="{ data }">
                    <i class="pi"
                        :class="pokeStore.favorites.has(data.name) ? 'pi-star-fill text-yellow-500' : 'pi-star text-gray-400'"
                        @click="toggleFavorite(data)"
                        style="cursor: pointer; font-size: 1.5rem; border-radius: 50%; padding: 6px; background-color: rgba(0, 0, 0, 0.05); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);" />
                </template>
            </Column>
        </DataTable>
        <div class="buttons">
            <Button :class="{
                'allButtons': !showFavorites,
                'p-button-danger p-button-outlined': showFavorites,
                'p-button-disabled': showFavorites
            }" rounded @click="showAll">
                <i class="pi pi-bars text-white-500 mr-2" />
                All
            </Button>
            <Button :class="{
                'allButtons': showFavorites,
                'p-button-danger p-button-outlined': !showFavorites,
                'p-button-disabled': !showFavorites
            }" rounded @click="showOnlyFavorites">
                <i class="pi pi-star-fill text-white-500 mr-2" />
                Favorites
            </Button>
        </div>
        <CardPokemons :visible="visibleDialog" :pokemon="selectedPokemon" @update:visible="visibleDialog = $event" />

    </div>
    <LoadingPokebola v-if="pokeStore.loading" />
</template>

<style scoped>
.image-container {
    width: 26px;
    height: 26px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.4);
    transform-origin: center center;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.buttons button {
    width: 120px;
    text-align: center;
}

.topbar {
    width: 100%;
    padding-bottom: 5%;
}

.full-width-input {
    width: 100% !important;
    box-sizing: border-box;
}
</style>
