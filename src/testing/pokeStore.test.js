import { setActivePinia, createPinia } from 'pinia';
import { describe, test, expect, beforeEach } from 'vitest';
import { usePokeStore } from '../stores/pokeStore'; 
import { vi } from 'vitest';


//0: Valores Pinia
//Debe inicializar el estado con valores predeterminados.
//Nueva instancia de Pinia.
beforeEach(() => {
  setActivePinia(createPinia());
});

describe('Debe inicializar el estado con valores predeterminados.', () => {
  
  test('El store debería inicializarse correctamente', () => {
    const store = usePokeStore();

    expect(store.pokemons).toEqual([]); 
    expect(store.favorites.size).toBe(0); 
    expect(store.loading).toBe(true); 
  });

});
//1: Actualizar favoritos

describe('Debe actualizar correctamente la lista de favoritos', () => {
  test('toggleFavorite debería agregar y eliminar pokemones de favoritos', () => {
    const store = usePokeStore();

    // Inicialmente no debería haber favoritos
    expect(store.favorites.size).toBe(0);

    store.toggleFavorite('bulbasaur');
    expect(store.favorites.size).toBe(1);
    expect(store.favorites.has('bulbasaur')).toBe(true);  
    store.toggleFavorite('bulbasaur');
    expect(store.favorites.size).toBe(0);  
    expect(store.favorites.has('bulbasaur')).toBe(false); 
  });
});

//2: Filtrar favoritos
describe('Debe filtrar correctamente los pokemones favoritos', () => {
  test('filteredPokemons debería devolver solo los favoritos cuando showFavorites es true', () => {
    const store = usePokeStore();

    store.pokemons = [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'charmander' },
    ];

    store.toggleFavorite('bulbasaur');
    store.toggleFavorite('charmander');

    const favorites = store.filteredPokemons(true);
    expect(favorites.length).toBe(2);  
    expect(favorites).toEqual([
      { name: 'bulbasaur' },
      { name: 'charmander' }
    ]);
  });

  test('filteredPokemons debería devolver todos los pokemones cuando showFavorites es false', () => {
    const store = usePokeStore();

    store.pokemons = [
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'charmander' },
    ];

    const allPokemons = store.filteredPokemons(false);
    expect(allPokemons.length).toBe(3); 
    expect(allPokemons).toEqual([
      { name: 'bulbasaur' },
      { name: 'ivysaur' },
      { name: 'charmander' }
    ]);
  });
});
//3: Obtener Pokemons
describe('Debe manejar errores al obtener los pokemones desde la API', () => {
  test('fetchPokemons debería manejar errores y dejar loading en false', async () => {
    const store = usePokeStore();

    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('Error de red'))));
    await store.fetchPokemons();
    expect(store.loading).toBe(false); 
    expect(store.pokemons).toEqual([]); 
  });
});
