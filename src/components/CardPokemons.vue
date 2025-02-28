<script setup>
import { ref, toRaw } from 'vue';
import { usePokeStore } from '@/stores/pokeStore';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { defineProps, defineEmits } from 'vue';
import Toast from 'primevue/toast';
import Divider from 'primevue/divider';
import { useToast } from 'primevue/usetoast';

const pokeStore = usePokeStore();
const toast = useToast();
defineProps({
  visible: Boolean,
  pokemon: Object
});

const emit = defineEmits(['update:visible']);

const updateVisibility = (value) => {
  emit('update:visible', value);
};

const toggleFavorite = (pokemon) => {
  pokeStore.toggleFavorite(pokemon.name);
};

// Función para copiar los datos al portapapeles
const copyToClipboard = (pokemon) => {
  try {
    const formattedData = `Name: ${pokemon.name}, Weight: ${pokemon.weight} kg, Height: ${pokemon.height} m, Types: ${pokemon.types}.`;

    navigator.clipboard.writeText(formattedData).then(() => {
      toast.add({ severity: 'secondary', summary: 'Epic Capture!', detail: "Pokémon Caught!", life: 3000 });
    });
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    toast.add({ severity: 'error', summary: 'Error', detail: 'Failed capture.', life: 3000 });
  }
};


</script>

<template>
  <Dialog class="custom-dialog" :visible="visible" @update:visible="updateVisibility"
    :style="{ maxWidth: '600px', width: '100%' }" :closable="true" :modal="true">
    <div class="dialog-header-background"></div>
    <button class="close-button" @click="updateVisibility(false)">X</button>
    <div class="pokemon-header">
      <img class="pokemon-image" :src="pokemon.image" alt="Pokemon Image" />
    </div>
    <div class="content">

      <div class="pokemon-attributes">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <Divider />
        <p><strong>Weight:</strong> {{ pokemon.weight }} kg</p>
        <Divider />
        <p><strong>Height:</strong> {{ pokemon.height }} m</p>
        <Divider />
        <p><strong>Types:</strong> {{ pokemon.types }}</p>
        <Divider />
      </div>

      <div class="button-container">
        <Button label="Share to my friends" @click="copyToClipboard(pokemon)" rounded severity="danger" />
        <i class="pi"
          :class="pokeStore.favorites.has(pokemon.name) ? 'pi-star-fill text-yellow-500' : 'pi-star text-gray-500'"
          @click="toggleFavorite(pokemon)" />
      </div>
    </div>
  </Dialog>
  <Toast />

</template>
<style scoped>


.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.dialog-header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background-image: url('@/assets/Pokemons/fondo.png');
  background-size: cover;
  background-position: center;
  z-index: 0;
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  display: flex;
  justify-content: center;

}

.p-dialog {
  border-radius: 7.5px;
  overflow: hidden;
}

.p-dialog-header {
  position: absolute;
  z-index: 2 !important;
}

.pokemon-header {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.pokemon-image {
  max-width: 230px;
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.content {
  padding-top: 20px;
}

p {
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.pi {
  font-size: 25px;
  cursor: pointer;
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 50%;
}


@media (min-width: 550px) {
  .button-container {
    justify-content: space-between;
  }
}
</style>