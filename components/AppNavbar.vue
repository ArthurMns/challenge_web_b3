<template>
  <header class="bg-white w-full sticky top-0 z-50">
    <nav class="flex max-w-full items-center justify-between p-6 lg:px-8 border-b shadow-md" aria-label="Global">
      <div class="flex items-center lg:flex-1">
        <nuxt-link to="/" class="flex items-center -m-1.5 p-1.5">
          <img class="h-12 w-auto" src="../public/file.png" alt="Amis à poils" />
          <span class="ml-3 font-serif text-orange-600 text-2xl font-bold font-poppins">Amis à poils</span>
        </nuxt-link>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end flex space-x-6">
        <nuxt-link to="/" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300 px-2.5 py-1">
          Accueil
        </nuxt-link>
        <nuxt-link to="/annonces"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300 px-2.5 py-1">
          Annonces
        </nuxt-link>
        <nuxt-link to="/createAnnonce"
          class="text-sm font-semibold leading-6 text-orange-600 border-2 border-orange-600 px-2.5 py-1 rounded hover:bg-orange-600 hover:text-white hover:border-transparent transition-colors">
          Créer mon annonce
        </nuxt-link>

        <!-- Bouton Profil -->
        <nuxt-link v-if="isAuthenticated" to="/profil"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Profil
        </nuxt-link>

        <!-- Bouton Log in -->
        <nuxt-link v-else to="/login"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Log in
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      isAuthenticated: false  // Variable pour l'état d'authentification
    };
  },
  mounted() {
    // Vérifier l'état d'authentification à partir du sessionStorage et convertir en booléen
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    this.isAuthenticated = isAuthenticated === 'true';  // Conversion en booléen
  }
};
</script>

<style scoped>
/* Ajoutez ici vos styles spécifiques si nécessaire */
</style>
