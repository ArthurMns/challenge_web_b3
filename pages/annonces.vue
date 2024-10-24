<template>
  <div class="bg-orange-100 pb-6">
    <h2 class="text-center text-2xl text-orange-700 font-bold mt-6 pt-5">
      Nos Nouveaux Arrivants
    </h2>
    <div class="flex justify-center mt-4">
      <select 
        class="select select-bordered w-full max-w-xs bg-orange-200 text-slate-800 ml-4"
        v-model="selectedCategory" 
        @change="filterAnimals">
        <option disabled value="">Sélectionnez une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <Card :animals="filteredAnnonces" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      annonces: [],
      selectedCategory: '',
      filteredAnnonces: [],
      categories: []
    };
  },
  created() {
    this.fetchAnimals();
    this.fetchCategories();
  },
  methods: {
    async fetchAnimals() {
      try {
        const response = await fetch('http://localhost:3001/api/v1/animals');
        const data = await response.json();
        this.annonces = data;
        this.filteredAnnonces = data; // Initialisez le tableau filtré
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch('http://localhost:3001/api/v1/categories');
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async filterAnimals() {
      console.log("Catégorie sélectionnée:", this.selectedCategory);
      
      if (this.selectedCategory) {
        const response = await fetch(`http://localhost:3001/api/v1/animals/categories/${this.selectedCategory}`);
        const data = await response.json();
        this.filteredAnnonces = data;
        console.log("Annonces filtrées:", this.filteredAnnonces);
      } else {
        this.filteredAnnonces = this.annonces;
      }
    }
  }
};
</script>

<style scoped>
div {
  background-color: #f8f9fa;
}
</style>
