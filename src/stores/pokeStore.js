// pokeStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokeStore = defineStore('pokeStore', () => {
  const pokemons = ref([]);
  const favorites = ref(new Set());
  const loading = ref(true);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const fetchPokemons = async () => {
    try {
      const totalPokemons = 1118;  
      const limit = 100;  
      const pages = Math.ceil(totalPokemons / limit);  

      for (let page = 0; page < pages; page++) {
        
        await delay(1000);  

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        
        const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
          const details = await fetch(pokemon.url).then(res => res.json());
          return {
            ...pokemon,
            image: details.sprites.front_default,
            weight: details.weight,
            height: details.height,
            types: details.types.map(type => type.type.name).join(', ')
          };
        }));

        pokemons.value = [...pokemons.value, ...pokemonDetails]; 

      }
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

  const filteredPokemons = (showFavorites) => {
    return showFavorites
      ? pokemons.value.filter(pokemon => favorites.value.has(pokemon.name))
      : pokemons.value;
  };

  return {
    pokemons,
    favorites,
    loading,
    fetchPokemons,
    toggleFavorite,
    filteredPokemons,
  };
});
