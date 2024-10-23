<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-8 text-gray-800 text-center">
      Nos Animaux en Vente
    </h1>

    <!-- Section de la grille des annonces -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="annonce in annonces"
        :key="annonce.id"
        class="border rounded-lg overflow-hidden shadow-md bg-white"
      >
        <img
          :src="annonce.image"
          :alt="annonce.nom"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ annonce.nom }}</h2>
          <p class="text-gray-600 mb-2">{{ annonce.race }}</p>
          <p class="text-lg font-bold text-gray-900">{{ annonce.prix }} €</p>
          <router-link
            :to="`/annonce/${annonce.id}`"
            class="mt-4 inline-block text-blue-500 underline"
          >
            Voir plus de détails
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annonces: [
        {
          id: 1,
          nom: "Chien Labrador",
          race: "Labrador Retriever",
          prix: 800,
          image: "/images/labrador.jpg",
        },
        {
          id: 2,
          nom: "Chat Persan",
          race: "Persan",
          prix: 600,
          image: "/images/persan.jpg",
        },
        {
          id: 3,
          nom: "Chien Bulldog",
          race: "Bulldog Français",
          prix: 1200,
          image: "/images/bulldog.jpg",
        },
        // Ajoute plus d'annonces ici
      ],
    };
  },
};
</script>

<style scoped>
/* Utilise Tailwind CSS pour le style, tout est géré par les classes dans le template */
</style>
