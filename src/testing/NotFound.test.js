import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { usePokeStore } from '@/stores/pokeStore';
import { describe, it, expect, beforeEach } from 'vitest';
import PrimeVue from 'primevue/config'; 
import Button from 'primevue/button'; 
import NotFound from '../views/pages/NotFound.vue';

describe('NotFound', () => {
  let pokeStore;

  beforeEach(() => {
    const pinia = createPinia();
    pokeStore = usePokeStore(pinia); 
    pokeStore.pokemons = [];
    pokeStore.favorites = new Set();
    pokeStore.loading = true;
  });

  it('debería redirigir al hacer clic en el botón', async () => {
    const wrapper = mount(NotFound, {
      global: {
        plugins: [createPinia(), PrimeVue], 
        components: {
          Button, 
        }
      },
    });

    const link = wrapper.find('router-link');
    expect(link.exists()).toBe(true);
    await link.trigger('click');
    expect(link.attributes('to')).toBe('welcome-pikachu'); 
  });
});
