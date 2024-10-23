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

const latestAnnonces = ref<{ id: number, name: string, description: string, created_at: string }[]>([]);

onMounted(() => {
  fetch('http://localhost:3001/api/v1/animals')
    .then(response => response.json())
    .then((data: { id: number, name: string, description: string, created_at: string }[]) => {
      latestAnnonces.value = data.sort((a: { created_at: string }, b: { created_at: string }) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 4);
    })
    .catch(error => {
      console.error('Error fetching animals:', error);
    });
});
</script>

