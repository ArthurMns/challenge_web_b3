<script setup lang="ts"></script>

<template>
  <h2 class="text-center text-2xl font-bold text-gray-300 mt-6 bg-white">
    Récents
  </h2>
  <div class="relative mb-2">
    <NuxtLink to="/PetList" class="absolute right-0"
      >Rencontrer les -></NuxtLink
    >
  </div>

  <div class="flex space-x-4 p-6 text-center justify-center bg-white">
    <div class="card card-compact bg-base-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/cat.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Donald</h2>
        <p>Canard sympatique</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Adopter maintenant</button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-base-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/doggystyle.png" alt="Shoes" />
      </figure>
      <div class="card-body ml-2 mr-2">
        <h2 class="card-title">Victor</h2>
        <p>Chien protecteur et vaillant</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Adopter maintenant</button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-base-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/dog.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Pipou</h2>
        <p>Chat très calin et affectueux</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Adopter maintenant</button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-base-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/indianPig.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Cookie</h2>
        <p>Cochon d'inde très rigolo</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Adopter maintenant</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
