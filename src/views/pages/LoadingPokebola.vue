<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(true);

onMounted(async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));
    loading.value = false;
    router.push({ name: 'listPokemons' });
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});
</script>

<template>
  <div v-if="loading" class="overlay">
    <div class="pokebola-container">
      <img :src="`/demo/images/pokemons/Loader.png`" alt="Pokébola" class="pokebola" />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Se asegura de estar sobre todo */
}

.pokebola-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokebola {
  width: 10rem;
  height: 10rem;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
