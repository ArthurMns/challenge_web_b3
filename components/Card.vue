<script setup lang="ts"></script>
<template>
  <h2
    class="text-center text-2xl text-orange-700 font-bold mt-6 bg-orange-100 pt-2"
  >
    Récents
  </h2>
  <NuxtLink to="/PetList" class="absolute right-0 text-orange-700"
    >Rencontrer les -></NuxtLink
  >
  <div
    class="flex space-x-4 p-6 text-center justify-center bg-orange-100 pb-11"
  >
    <div class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/cat.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Donald</h2>
        <p>Canard sympatique</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
          >
            Adopter maintenant
          </button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-slate-100 w-96 ml-2 mr-2 shadow-lg">
      <figure>
        <img src="assets/photos/doggystyle.png" alt="Shoes" />
      </figure>
      <div class="card-body ml-2 mr-2 text-">
        <h2 class="card-title">Victor</h2>
        <p>Chien protecteur et vaillant</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
          >
            Adopter maintenant
          </button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2">
      <figure>
        <img src="assets/photos/dog.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Pipou</h2>
        <p>Chat très calin et affectueux</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
          >
            Adopter maintenant
          </button>
        </div>
      </div>
    </div>

    <div class="card card-compact bg-slate-100 w-96 ml-2 mr-2 shadow-lg">
      <figure>
        <img src="assets/photos/indianPig.png" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Cookie</h2>
        <p>Cochon d'inde très rigolo</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary bg-amber-700 hover:bg-amber-600 hover:border-amber-900 border-amber-800"
          >
            Adopter maintenant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
