<script setup lang="ts"></script>
<template>
  <div class="bg-orange-100 pb-6 ">
    <h2 class="text-center text-2xl text-orange-700 font-bold mt-6 pt-5">
      Nos Nouveaux Arrivants
    </h2>
    <NuxtLink to="/PetList" class="absolute right-0 text-orange-700 font-bold"
      >Rencontrer les -></NuxtLink
    >
  </div>

  <div class="flex space-x-4 p-6 text-center justify-center bg-orange-100  shadow-lg">
    <div
      class="card card-compact bg-slate-100 w-96 shadow-xl ml-2 mr-2 text-slate-800"
    >
      <figure>
        <img src="assets/photos/cat.png" alt="Shoes" />
      </figure>
      <div class="card-body text-slate-700">
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
      <div class="card-body ml-2 mr-2 text-slate-700">
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
      <div class="card-body text-slate-700">
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
      <div class="card-body text-slate-700">
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
