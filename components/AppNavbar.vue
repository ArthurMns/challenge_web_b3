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

          <!-- Menu déroulant pour Profil et Déconnexion avec une classe personnalisée -->
          <div v-if="showMenu"
            class="absolute custom-dropdown-position bg-white shadow-lg rounded-md mt-2 w-32 p-3 z-10">
            <nuxt-link to="/profil" class="block text-sm px-4 py-2 text-gray-700 hover:bg-gray-100">
              Mon Profil
            </nuxt-link>
            <button @click="handleLogout"
              class="block text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
              Déconnexion
            </button>
          </div>
        </div>

        <!-- Sinon, bouton Connexion -->
        <nuxt-link v-else to="/login"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Connexion
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>


<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const mobileMenuOpen = ref(false);
    const isAuthenticated = ref(false);
    const showMenu = ref(false);

    onMounted(() => {
      const authStatus = sessionStorage.getItem('isAuthenticated');
      isAuthenticated.value = authStatus === 'true';
    });

    const handleLogout = () => {
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('user_id');
      isAuthenticated.value = false;
      window.location.href = '/login';
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

.custom-dropdown-position {
  left: -40px;
}
</style>