<script setup lang="ts">

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import { useIsMobile } from './composables/useIsMobile'
const {isMobile} = useIsMobile();

</script>

<template>
  <div class="max-width">
    <Navbar />
    <div class="wrapper">
        <RouterView />
      </div>
  </div>

  
</template>

<style scoped>
.max-width{
  max-width: 950px; /* App width */
  margin: 0 auto;
}

</style>
