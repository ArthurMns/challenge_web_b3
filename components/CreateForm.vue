<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Créer une annonce</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
  
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            v-model="formData.description"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            rows="4"
          ></textarea>
        </div>
  
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Catégorie</label>
          <select
            id="category"
            v-model="formData.category"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="" disabled selected>Choisir une catégorie</option>
            <option value="chien">Chien</option>
            <option value="chat">Chat</option>
            <option value="cochon-d-inde">Cochon d'Inde</option>
            <option value="lapin">Lapin</option>
          </select>
        </div>
  
        <div>
          <label for="postalCode" class="block text-sm font-medium text-gray-700">Code Postal</label>
          <input
            type="text"
            id="postalCode"
            v-model="formData.postalCode"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition-colors"
        >
          Créer l'annonce
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formData = ref({
    name: '',
    description: '',
    category: '',
    postalCode: '',
  })
  
  const submitForm = () => {
    console.log('Form Data:', formData.value)
    formData.value = {
      name: '',
      description: '',
      category: '',
      postalCode: '',
    }
  }
  </script>
  
 
  