<template>
  <main class="min-h-full font-Poppins box-border">
    <TheNavigation />
    <router-view></router-view>
  </main>
</template>

<script setup>
import TheNavigation from './components/layout/TheNavigation.vue';
</script>