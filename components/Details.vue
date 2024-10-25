<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

interface Animal {
  id: number;
  user_id: number;
  name: string;
  description: string;
  age: number | null;
  breed: string | null;
  category_id: number;
  price: number;
  image: string | null;
}

interface Category {
  id: number;
  name: string;
}

const route = useRoute();
const router = useRouter();
const animalId = route.params.id;

const animal = ref<Animal | null>(null);
const categoryName = ref<string | null>(null);
const user = ref<string | null>(null);
const user_id = ref<string | null>(null);

if (typeof window !== "undefined") {
  user_id.value = sessionStorage.getItem("user_id");
}

let errorMessage = ref<string | null>(null);

const fetchAnimalDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/animals/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch animal details");
    }
    const data = await response.json();
    animal.value = data;

    if (animal.value && animal.value.category_id) {
      await fetchCategoryById(animal.value.category_id);
    }

    if (animal.value && animal.value.user_id) {
      await fetchUserById(animal.value.user_id);
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de l'animal:",
      error,
    );
    errorMessage = error;
  }
};

const fetchCategoryById = async (categoryId: number) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/categories/${categoryId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch category details");
    }
    const data: Category = await response.json();
    categoryName.value = data.name;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails de la catégorie:",
      error,
    );
  }
};

const fetchUserById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données utilisateur");
    }
    const data = await response.json();
    user.value = data;

  } catch (error) {
    console.error(error);
    alert("Échec de la récupération des données de l'utilisateur");
  }
};

const adoptAnimal = async () => {
  if (typeof window !== "undefined" && sessionStorage.getItem("isAuthenticated") !== "true") {
    alert("Vous devez vous connecter pour adopter un animal.");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/animals/${animalId}`,
      {
        method: "DELETE",
      },
    );
    if (response.ok) {
      alert("Vous avez adopté cet animal avec succès!");
      router.push("/");
    } else {
      throw new Error("Erreur lors de la suppression de l'animal.");
    }
  } catch (error) {
    console.error("Erreur lors de l'adoption:", error);
    alert("Échec de l'adoption de l'animal.");
  }
};

const deleteAnimal = async () => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/animals/${animalId}`,
      {
        method: "DELETE",
      },
    );
    if (response.ok) {
      alert("Vous avez supprimé cet animal avec succès!");
      router.push("/");
    } else {
      throw new Error("Erreur lors de la suppression de l'animal.");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    alert("Échec de la suppression de l'animal.");
  }
};

onMounted(() => {
  const id = Array.isArray(animalId) ? animalId[0] : animalId;
  fetchAnimalDetails(id);
});
</script>


<template>
  <section v-if="animal" class="pt-8 mb-14 max-h-screen">
    <!-- Bouton "Go Back" repositionné au-dessus du contenu principal -->

    <div class="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
      <!-- Image de l'animal -->
      <div class="w-full md:w-1/3">
        <img src="/assets/photos/cat.png" alt="Image de {{ animal.name }}" class="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <!-- Détails de l'animal -->
      <div class="w-full md:w-1/2 bg-neutral-800 text-white p-6 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold mb-4">{{ animal.name }}</h1>
        <p class="text-sm mb-4 text-amber-400">ANIMAL AJOUTER PAR: {{ user.firstName }} {{ user.lastName }}</p>
        <ul class="text-lg leading-relaxed space-y-3">
          <li>
            <strong>Age:</strong>
            {{ animal.age ? animal.age + " years" : "Inconnu" }}
          </li>
          <li>
            <strong>Categorie:</strong>
            {{ categoryName || "Non spécifiée" }}
          </li>
          <li>
            <strong>Race:</strong>
            {{ animal.breed || "Non spécifiée" }}
          </li>
          <li>
            <strong>Description:</strong>
            {{ animal.description || "Non spécifiée" }}
          </li>
          <li>
            <strong>Prix:</strong>
            {{ animal.price || "Non spécifiée" }} €
          </li>
        </ul>

        <p class="text-sm mb-4 text-amber-400 py-10">
          Contactez {{ user.firstName }} {{ user.lastName }} <br> <br> Email: {{ user.email }} <br> <span
            v-if="user.phone_number">Téléphone: {{ user.phone_number }}</span>
        </p>


        <!-- Bouton Adopter -->
        <button v-if="user.id != user_id" @click="adoptAnimal"
          class="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 shadow-md">
          Adopter cet animal
        </button>

        <button v-else @click="deleteAnimal"
          class="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 shadow-md">
          Supprimer l'annonce
        </button>

      </div>
    </div>

    <!-- Bouton Retour -->
    <NuxtLink to="/"
      class="bg-amber-500 text-white px-4 py-2 mb-4 mt-6 mx-5 inline-flex items-center rounded-lg hover:bg-amber-600 shadow-md">
      ← Go Back
    </NuxtLink>
  </section>

  <!-- Message de chargement si l'animal n'est pas encore récupéré -->
  <section v-else>
    <p>Chargement des détails de l'animal...</p>
  </section>
</template>
