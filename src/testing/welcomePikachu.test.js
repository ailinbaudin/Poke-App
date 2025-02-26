import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import WelcomePikachu from '@/views/pages/WelcomePikachu.vue';
import { usePokeStore } from '@/stores/pokeStore';
import { describe, it, expect, beforeEach } from 'vitest';
import PrimeVue from 'primevue/config'; 
import Button from 'primevue/button'; 

describe('WelcomePikachu.vue', () => {
  let pokeStore;

  beforeEach(() => {
    const pinia = createPinia();
    pokeStore = usePokeStore(pinia); 
    pokeStore.pokemons = [];
    pokeStore.favorites = new Set();
    pokeStore.loading = true;
  });

  it('debería redirigir al hacer clic en el botón', async () => {
    const wrapper = mount(WelcomePikachu, {
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
    expect(link.attributes('to')).toBe('list-pokemons'); 
  });
});
