<script setup lang="ts">
import { defineProps } from "vue";

// Définir les props pour recevoir les données des animaux
defineProps<{
  animals: Animal[]; // Spécifie que animals est un tableau d'Animal
}>();

// Interface pour le type Animal
interface Animal {
  id: number;
  name: string;
  description: string;
}
</script>

<template>
  <div class="bg-orange-100 pb-6">
    <h2 class="text-center text-2xl text-orange-700 font-bold mt-6 pt-5">
      Nos Nouveaux Arrivants
    </h2>
    <NuxtLink to="/PetList" class="absolute right-0 text-orange-700 font-bold"
      >Rencontrer les -></NuxtLink
    >
  </div>

  <div class="flex space-x-4 p-6 text-center justify-center bg-orange-100">
    <!-- Boucle sur les animaux passés en tant que prop -->
    <div
      v-for="animal in animals"
      :key="animal.id"
      class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2 text-slate-800"
    >
      <figure>
        <img src="assets/photos/cat.png" alt="animal" />
      </figure>
      <div class="card-body text-slate-700">
        <h2 class="card-title">{{ animal.name }}</h2>
        <p>{{ animal.description }}</p>
        <div class="card-actions justify-end">
          <nuxt-link
            :to="`/animal/${animal.id}`"
            class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
          >
            Adopter maintenant
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
