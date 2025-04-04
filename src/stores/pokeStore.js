// pokeStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokeStore = defineStore('pokeStore', () => {
    const pokemons = ref([]);
    const favorites = ref(new Set());
    const loading = ref(true);

    const fetchPokemons = async () => {
        try {
            const limit = 50;
            const totalPokemons = 1118;
            const pages = Math.ceil(totalPokemons / limit);
            const allPokemons = [];

            const promises = Array.from({ length: pages }, (_, page) =>
                fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`)
                    .then((res) => res.json())
                    .then((data) => allPokemons.push(...data.results))
            );
            await Promise.all(promises);

            const pokemonDetails = await Promise.all(
                allPokemons.map(async (pokemon) => {
                    const details = await fetch(pokemon.url).then((res) => res.json());
                    return {
                        ...pokemon,
                        image: details.sprites.front_default,
                        weight: details.weight,
                        height: details.height,
                        types: details.types.map((type) => type.type.name).join(', ')
                    };
                })
            );

            pokemons.value = pokemonDetails;
        } catch (error) {
            console.error('Error al obtener la lista de Pokémon:', error);
        } finally {
            loading.value = false;
        }
    };

    const toggleFavorite = (pokemonName) => {
        if (favorites.value.has(pokemonName)) {
            favorites.value.delete(pokemonName);
        } else {
            favorites.value.add(pokemonName);
        }
    };

    const filteredPokemons = (showFavorites) => (showFavorites ? pokemons.value.filter((pokemon) => favorites.value.has(pokemon.name)) : pokemons.value);

    return {
        pokemons,
        favorites,
        loading,
        fetchPokemons,
        toggleFavorite,
        filteredPokemons
    };
});
