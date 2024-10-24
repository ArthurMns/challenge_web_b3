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

        <nuxt-link v-if="isAuthenticated" to="/profil"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Profil
        </nuxt-link>

        <nuxt-link v-else to="/login"
          class="text-sm font-semibold leading-6 bg-orange-600 text-white px-2.5 py-1 rounded hover:bg-white hover:text-orange-600 border-2 border-transparent hover:border-orange-600 transition-colors">
          Log in
        </nuxt-link>
        <button @click="goToProfile">btofezfez</button>
      </div>
    </nav>

    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Amis à poils</span>
            <img class="h-8 w-auto" src="../public/file.png" alt="Amis à poils" />
          </nuxt-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Accueil
              </nuxt-link>
              <nuxt-link to="/annonces"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Annonces
              </nuxt-link>
              <nuxt-link to="/createAnnonce"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Créer mon annonce
              </nuxt-link>
            </div>

            <div class="py-6">
              <nuxt-link to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  data() {
    return {
      isAuthenticated: false,  // Variable qui va suivre l'état d'authentification
    };
  },
  mounted() {
    // Vérifier l'état d'authentification à partir du sessionStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    this.isAuthenticated = isAuthenticated; // Si 'true', l'utilisateur est authentifié
  },
  methods: {

    goToProfile() {
      console.log(this.isAuthenticated);
      console.log(sessionStorage.getItem('isAuthenticated'));
      this.$router.push('/profile');
    }
  }
};

const mobileMenuOpen = ref(false);
</script>
