<script setup lang="ts">
import { ref, onMounted } from "vue";
import Card from "~/components/Card.vue";
import Accordion from "~/components/Accordion.vue";

// Créer un état pour stocker les dernières annonces d'animaux
const latestAnimals = ref([]);

const fetchLatestAnimals = async () => {
  // Simuler une requête API pour récupérer les 4 derniers animaux
  latestAnimals.value = await fetch(
    "http://localhost:3001/api/v1/animals/fourLast?limit=4&order=desc",
  ).then((res) => res.json());
};

// Récupérer les données lors du montage de la page
onMounted(() => {
  fetchLatestAnimals();
});
</script>

<template>
  <div>
    <Accordion />

    <!-- Passer les données des animaux en tant que props au composant Card -->
    <Card :animals="latestAnimals" />
  </div>
</template>
