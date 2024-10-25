<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-12 mb-12 py-12">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Créer une annonce</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
        <input type="text" id="name" v-model="name" required
          class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
      </div>

      <div>
        <label for="age" class="block text-sm font-medium text-gray-700">Âge</label>
        <input type="number" id="age" v-model="age"
          class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
      </div>

      <div>
        <label for="price" class="block text-sm font-medium text-gray-700">Prix</label>
        <input type="number" id="price" v-model="price" required
          class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" v-model="description"
          class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          rows="4"></textarea>
      </div>

      <div>
        <label for="race" class="block text-sm font-medium text-gray-700">Race</label>
        <input type="text" id="race" v-model="breed"
          class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
      </div>

      <div>
        <label for="category" class="block text-sm font-medium text-gray-700">Catégorie</label>
        <select class="select select-bordered w-full max-w-xs bg-white text-slate-800 ml-4" v-model="selectedCategory">
          <option value="">Toutes les catégories</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <button type="submit"
        class="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition-colors">
        Créer l'annonce
      </button>
    </form>

    <!-- Message d'erreur ou de succès -->
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      price: '',
      description: '',
      breed: '',
      selectedCategory: '',
      error: null,
      categories: [],
    };
  },
  mounted() {
    // Vérifier si l'utilisateur est déjà authentifié via sessionStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      this.user_id = sessionStorage.getItem('user_id'); // Remplacez par l'ID réel de l'utilisateur si nécessaire
    } else {
      this.$router.push('/login'); // Rediriger si l'utilisateur n'est pas connecté
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3001/api/v1/categories');
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },

    async submitForm() {
      this.error = null; // Réinitialiser les messages d'erreur

      try {
        const response = await fetch('http://localhost:3001/api/v1/animals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            age: this.age,
            price: this.price,
            description: this.description,
            breed: this.breed,
            category_id: parseInt(this.selectedCategory), // Convertir en entier
            user_id: parseInt(this.user_id), // ID de l'utilisateur connecté
          }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la création de l'annonce");
        }

        // Réinitialiser le formulaire après succès
        this.name = '';
        this.age = '';
        this.price = '';
        this.description = '';
        this.breed = '';
        this.selectedCategory = '';

        // Rediriger après la création de l'annonce
        this.$router.push('/');
      } catch (error) {
        this.error = error.message;
      }
    },
  }
};
</script>
