// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemons: [],
    favorites: new Set(),
    loading: true,
    showFavorites: false
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
      state.loading = false;
    },
    toggleFavorite(state, pokemonName) {
      if (state.favorites.has(pokemonName)) {
        state.favorites.delete(pokemonName);
      } else {
        state.favorites.add(pokemonName);
      }
    },
    setShowFavorites(state, showFavorites) {
      state.showFavorites = showFavorites;
    }
  },
  actions: {
    async fetchPokemons({ commit }) {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();
        const pokemons = data.results.map(pokemon => ({
          ...pokemon,
          isFavorite: false
        }));
        commit('setPokemons', pokemons);
      } catch (error) {
        console.error('Error al obtener la lista de Pokémon:', error);
      }
    },
    toggleFavorite({ commit }, pokemonName) {
      commit('toggleFavorite', pokemonName);
    },
    setShowFavorites({ commit }, showFavorites) {
      commit('setShowFavorites', showFavorites);
    }
  },
  getters: {
    filteredPokemons(state) {
      return state.showFavorites
        ? state.pokemons.filter(pokemon => state.favorites.has(pokemon.name))
        : state.pokemons;
    }
  }
});
