<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-20 w-auto" src="../public/file.png" alt="amis à poil" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Réinitialiser le mot de passe
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-6 bg-white rounded-md">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="new-password" class="block text-sm font-medium leading-6 text-gray-900">
            Nouveau mot de passe
          </label>
          <div class="mt-2">
            <input id="new-password" name="new-password" type="password" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">
            Confirmer votre mot de passe
          </label>
          <div class="mt-2">
            <input id="confirm-password" name="confirm-password" type="password" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <nuxt-link to="/confirmation-page" class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white 
              shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-orange-600">
            Réinitialiser le mot de passe
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Vérifier si l'utilisateur est déjà authentifié via sessionStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      // Si l'utilisateur est authentifié, rediriger vers la page d'accueil ou une autre page
      this.$router.push('/');
    }
  }
}  
</script>