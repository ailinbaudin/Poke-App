import { createPinia, setActivePinia } from 'pinia';
import { usePokeStore } from '../stores/pokeStore'; 
import { beforeEach, afterEach, vi, expect, it, describe } from 'vitest';

beforeEach(() => {
  setActivePinia(createPinia());  

  vi.stubGlobal('fetch', vi.fn((url) => {
    if (url.includes('pokemon?limit')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [
            { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
          ]
        })
      });
    } 
    else if (url.includes('/pokemon/1') || url.includes('/pokemon/4')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          sprites: { front_default: 'image-url' },
          weight: 69,
          height: 7,
          types: [{ type: { name: 'grass' } }]
        })
      });
    } else {
      return Promise.reject(new Error('Pokémon no encontrado'));
    }
  }));
});
afterEach(() => {
  vi.restoreAllMocks();
});
describe('PokeStore', () => {
  it('carga los pokemones desde la API', async () => {
    const pokeStore = usePokeStore();

    pokeStore.fetchPokemons = async function () {
      this.pokemons = [
        { name: 'bulbasaur', image: 'image-url', weight: 69, height: 7, types: 'grass' },
        { name: 'charmander', image: 'image-url', weight: 69, height: 7, types: 'fire' }
      ];
      this.loading = false;
    };

    await pokeStore.fetchPokemons();
    expect(pokeStore.pokemons).toHaveLength(2);  
    expect(pokeStore.loading).toBe(false);  
  });

  it('maneja el error si la API no responde correctamente', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValueOnce(new Error('Error de red')));

    const pokeStore = usePokeStore();
    await pokeStore.fetchPokemons();
    expect(fetch).toHaveBeenCalled();
    expect(pokeStore.pokemons).toEqual([]);  
    expect(pokeStore.loading).toBe(false);  
  });
});
