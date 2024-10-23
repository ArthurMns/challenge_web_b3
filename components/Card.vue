<script setup lang="ts"></script>

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
    }
  }
};
</script>