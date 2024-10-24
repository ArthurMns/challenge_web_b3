<template>
  <div class="bg-white">
    <AppNavbar />
    <slot />
  </div>
  <div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { provide } from 'vue'

provide('isAuthenticated', false)
</script>
