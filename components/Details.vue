<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// Interface pour typer l'animal
interface Animal {
  id: number;
  name: string;
  description: string;
  age: number | null;
  breed: string | null;
  category: { name: string };
  image: string | null;
}

// Récupérer l'ID de l'animal depuis l'URL
const route = useRoute();
const animalId = route.params.id;

// Créer une variable réactive pour stocker les détails de l'animal
const animal = ref<Animal | null>(null);

// Fonction pour récupérer les données de l'animal
const fetchAnimalDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/animals/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch animal details");
    }
    const data = await response.json();
    animal.value = data; // Assignation des données de l'animal
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de l'animal:",
      error,
    );
  }
};

// Charger les détails de l'animal lorsque la page est montée
onMounted(() => {
  fetchAnimalDetails(animalId);
});
</script>

<template>
  <section v-if="animal" class="pt-8 mb-14 max-h-screen">
    <!-- Bouton "Go Back" repositionné au-dessus du contenu principal -->

    <div
      class="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6"
    >
      <!-- Image de l'animal -->
      <div class="w-full md:w-1/3">
        <img
          src="/assets/photos/cat.png"
          alt="Image de {{ animal.name }}"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <!-- Détails de l'animal -->
      <div
        class="w-full md:w-1/2 bg-neutral-800 text-white p-6 rounded-lg shadow-lg"
      >
        <h1 class="text-4xl font-bold mb-4">{{ animal.name }}</h1>
        <p class="text-sm mb-4 text-amber-400">ANIMAL ID: {{ animal.id }}</p>
        <ul class="text-lg leading-relaxed space-y-3">
          <li><strong>Breed:</strong> {{ animal.breed || "Unknown" }}</li>
          <li>
            <strong>Age:</strong>
            {{ animal.age ? animal.age + " years" : "Unknown" }}
          </li>
          <li>
            <strong>Category:</strong>
            {{ animal.category?.name || "Not Specified" }}
          </li>
          <li><strong>Gender:</strong> {{ animal.gender || "Unknown" }}</li>
          <li>
            <strong>Microchip No:</strong>
            {{ animal.microchip || "Not Available" }}
          </li>
          <li>
            <strong>Location:</strong> {{ animal.location || "Not Specified" }}
          </li>
        </ul>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="bg-amber-500 text-white px-4 py-2 mb-4 mt-6 inline-flex items-center rounded-lg hover:bg-amber-600 shadow-md"
    >
      ← Go Back
    </NuxtLink>
  </section>
</template>

<style scoped></style>
