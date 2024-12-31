<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

import Footer from '@/components/Footer.vue';
import Mediabar from '@/components/Mediabar.vue';
import Experience from '@/components/Experience.vue';

import { useDarkModeStore } from '../stores/darkMode';
const darkModeStore = useDarkModeStore();

import { useIsMobile } from '@/composables/useIsMobile.js'
const { isMobile } = useIsMobile();

import Projects from '@/components/Projects.vue';
import Titlebar from '@/components/Titlebar.vue';

// Text-content and Illustration Animation
const showTextWrapper = ref(false);
const showIllustration = ref(false);
const showExperience = ref(false);
const showProjects = ref(false);
const showFooter = ref(false);

onMounted(() => {
  showTextWrapper.value = true;
  showIllustration.value = true;
  showExperience.value = true;
  showProjects.value = true;
});

watch(
  () => darkModeStore.isDarkMode,
  () => {
    showTextWrapper.value = false;
    showIllustration.value = false;
    showExperience.value = false;
    showProjects.value = false;

    setTimeout(() => {
      showTextWrapper.value = true;
      showIllustration.value = true;
      showProjects.value = true;

    }, 1000);

    setTimeout(() => {
      showExperience.value = true;
    }, 1500);
  }
);

</script>

<template>
  <div id="home" class="grid-container">

    <!-- img section -->
    <!-- <div v-if="!isMobile"> -->

    <div class="spacer">
      <Transition name="illustration-fade">
        <div v-if="showIllustration" class="illustration">
          <img v-if="darkModeStore.isDarkMode" src="../assets/comic_k_dark.jpg" alt="illustration dark" key="dark" />
          <img v-else src="../assets/comic_k.jpg" alt="illustration light" key="light" />
        </div>
      </Transition>
    </div>
    <!-- </div> -->

    <!-- text section -->

    <Transition name="slide-fade">
      <div v-if="showTextWrapper" class="text-content">
        <div class="text-wrapper">
          <h1>{{ $t('greeting') }}</h1>

          <p>{{ $t('description') }}</p>

        </div>
        <Mediabar />
      </div>
    </Transition>


  </div>
  <Titlebar title="Projects" :left="true" />
  <!-- <Transition name="projects-fade"> -->
    <Projects  />
  <!-- </Transition> -->

  <Titlebar title="Experience" :left="true" />
  <!-- <Transition name="experience-fade"> -->
    <Experience  />
  <!-- </Transition> -->





  <Footer />

</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  border: 1px solid var(--color-border);
  margin: 0 auto;
}

@media (max-width: 912px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    min-height: 1vh;
    border: 1px solid var(--color-border);
  }
}

.text-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  border-left: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
  color: var(--color-text);
}

@media (max-width: 912px) {
  .text-content {
    border-left: none;
  }
}

.text-content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.text-content p {
  font-size: 1.5rem;
  line-height: 1.5;
  color: #666;
}

.text-wrapper {
  margin: auto auto;
}

/* TEXT CONTAINER ANIMATION */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

/* ILLUSTRATION CONTAINER ANIMATION */

.illustration {
  background-color: var(--color-background-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
}

@media (max-width: 912px) {
  .illustration{
    border: none;
  }
}

.illustration img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 912px) {
  .illustration img{
    object-fit:cover;
    max-height: 812px;
    overflow: hidden;
  }
}

.illustration-fade-enter-active {
  transition: all 0.5s ease-out;
}

.illustration-fade-leave-active {
  /* transition: opacity 0.4s ease, opacity 0.4s ease; */
  transition: all 0.8s cubic-bezier(1, 0.5, 0.5, 1);
}

.illustration-fade-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}

.illustration-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.spacer {
  min-height: 810px;
  margin: 0;
}

@media (max-width: 912px) {
  .spacer {
    min-height: 410px;
  }
}

/* Projects animation */
.projects-fade-enter-active {
  transition: all 0.5s ease-out;
}

.projects-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.5, 1);
}

.projects-fade-enter-from,
.projects-fade-leave-to {
  transform: translateY(100px);
  /* Mueve la caja desde abajo */
  opacity: 0;
  /* Hace la caja invisible */
}

.projects-fade-enter-to,
.projects-fade-leave-from {
  transform: translateY(0);
  /* Posición original */
  opacity: 1;
  /* Caja visible */
}

/* Experience animation */
.experience-fade-enter-active {
  transition: all 0.5s ease-out;
}

.experience-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.5, 1);
}

/* Estado inicial de entrada y final de salida */
.experience-fade-enter-from,
.experience-fade-leave-to {
  transform: translateY(100px);
  /* Mueve la caja desde abajo */
  opacity: 0;
  /* Hace la caja invisible */
}

/* Estado final de entrada e inicial de salida */
.experience-fade-enter-to,
.experience-fade-leave-from {
  transform: translateY(0);
  /* Posición original */
  opacity: 1;
  /* Caja visible */
}
</style>
