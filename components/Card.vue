<script setup lang="ts"></script>

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
  </div>



  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 text-center bg-orange-100">
    <div v-for="animal in animals" :key="animal.id"
      class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2 text-slate-800">
      <figure>
        <img src="assets/photos/cat.png" alt="animal" />
      </figure>
      <div class="card-body text-slate-700">
        <h2 class="card-title">{{ animal.name }}</h2>
        <p>{{ animal.description }}</p>
        <div class="card-body text-slate-700">
          <div class="card-actions justify-end">
            <NuxtLink :to="`/animal/${animal.id}`"
              class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800">
              Adopter maintenant
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animals: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedCategory: '',
      filteredAnimals: this.animals
    };
  },
  methods: {
    filterAnimals() {
      if (this.selectedCategory) {
        this.filteredAnimals = this.animals.filter(animal => animal.categoryId === this.selectedCategory);
      } else {
        this.filteredAnimals = this.animals;
      }
    }
  }
};
</script>