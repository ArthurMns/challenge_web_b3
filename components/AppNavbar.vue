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

        <!-- Si l'utilisateur est authentifié, bouton Profil avec menu déroulant -->
        <div class="relative" v-if="isAuthenticated" @mouseover="showMenu = true" @mouseleave="showMenu = false">
          <nuxt-link to="/profil"
            class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
            Profil
          </nuxt-link>

          <!-- Menu déroulant pour Profil et Déconnexion -->
          <div v-if="showMenu" class="absolute bg-white shadow-lg rounded-md mt-2 w-32 p-4 z-10">
            <nuxt-link to="/profil" class="block text-sm px-4 py-2 text-gray-700 hover:bg-gray-100">
              Mon Profil
            </nuxt-link>
            <button @click="handleLogout"
              class="block text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
              Déconnexion
            </button>
          </div>
        </div>

        <!-- Sinon, bouton Log in -->
        <nuxt-link v-else to="/login"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Log in
        </nuxt-link>
      </div>

      <!-- Bouton du menu hamburger -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-gray-900 focus:outline-none">
        <span class="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Menu mobile -->
      <div v-if="mobileMenuOpen" class="lg:hidden absolute top-16 right-0 w-full bg-white border-b shadow-md">
        <div class="flex flex-col space-y-2 p-4">
          <nuxt-link to="/" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300">
            Accueil
          </nuxt-link>
          <nuxt-link to="/annonces" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-300">
            Annonces
          </nuxt-link>
          <nuxt-link to="/createAnnonce"
            class="text-sm font-semibold leading-6 text-orange-600 hover:bg-orange-600 hover:text-white">
            Créer mon annonce
          </nuxt-link>
          <nuxt-link v-if="isAuthenticated" to="/profil"
            class="text-sm font-semibold leading-6 bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600">
            Profil
          </nuxt-link>

          <nuxt-link v-else to="/login"
            class="text-sm font-semibold leading-6 bg-orange-600 text-white hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600">
            Log in
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';  // Importer ref et onMounted pour la gestion des états réactifs

export default {
  setup() {
    const mobileMenuOpen = ref(false);  // Utilisez ref pour le menu mobile
    const isAuthenticated = ref(false);  // Utilisez ref pour l'état d'authentification
    const showMenu = ref(false);  // Utilisez ref pour l'affichage du menu déroulant

    // Vérifier l'état d'authentification à partir du sessionStorage
    onMounted(() => {
      const authStatus = sessionStorage.getItem('isAuthenticated');
      isAuthenticated.value = authStatus === 'true';  // Conversion en booléen
    });

    // Fonction de déconnexion
    const handleLogout = () => {
      sessionStorage.removeItem('isAuthenticated');
      isAuthenticated.value = false;  // Mettre à jour l'état
      window.location.href = '/login';  // Rediriger vers la page de login
    };

    return {
      mobileMenuOpen,
      isAuthenticated,
      showMenu,
      handleLogout,
    };
  }
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
