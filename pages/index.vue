<template>
  <div>
    <Accordion />
    <Card :animals="latestAnnonces" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Accordion from '~/components/Accordion.vue';
import Card from '~/components/Card.vue';

const latestAnnonces = ref([]);

onMounted(() => {
  fetch('http://localhost:3001/api/v1/animals')
    .then(response => response.json())
    .then(data => {
      latestAnnonces.value = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 4);
    })
    .catch(error => {
      console.error('Error fetching animals:', error);
    });
});
</script>

