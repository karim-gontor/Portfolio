<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useDarkModeStore } from '../stores/darkMode';
const darkModeStore = useDarkModeStore();

import { useIsMobile } from '../composables/useIsMobile'
const { isMobile } = useIsMobile();

import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

import Mediabar from './Mediabar.vue';
import confetti from 'canvas-confetti';

// Obtén la ruta actual
const route = useRoute();
const archiveRoute = ref(false);

watch(route, (newRoute) => {
  console.log("Cambio de ruta detectado:", newRoute.fullPath);

  if(newRoute.fullPath == '/archive'){

  }
});

const launchConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.4 },
  });
};

const toggleLanguage = (event) => {
  switch (event.target._value) {
    case 'es': locale.value = 'es'; break;
    case 'en': locale.value = 'en'; break;
    case 'de': locale.value = 'de'; break;
  }

  setTimeout(() => {
    toggleModal();
  }, 300)
};

const isModalActive = ref(false);
const toggleModal = () => {
  isModalActive.value = !isModalActive.value;
}

// To move the buttons to right on mobile view
const buttonsClass = computed(() => {
  return isMobile.value ? "nav-buttons margin-left-auto" : "nav-buttons";
});

// Detect scroll down
const hasScrolled = ref(false);

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  hasScrolled.value = currentScrollY >  0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="top-bar">
    <RouterLink to="/">
      <p v-if="route.fullPath === '/archive'" @click="launchConfetti" class="title">
        <v-icon name="fa-arrow-left" class="icon"/>
        {{$t('return')}}
      </p>
      <p v-else @click="launchConfetti" class="title">
        {{isMobile ? 'Karim' : 'Web Developer'}}
      </p>
      
    </RouterLink>

  </div>

  <header >
    <nav class="nav" v-if="!isMobile">

      <div class="title-wrapper">
        <RouterLink v-if="route.fullPath === '/archive'" to="/">
          <h2 @click="launchConfetti">
            Karim
          </h2>
          <v-icon v-if="hasScrolled" name="fa-arrow-up" class="icon" animation="float" hover/>
        </RouterLink>
        <a v-else href="#app">
          <h2 @click="launchConfetti">
            Karim
          </h2>
          <v-icon v-if="hasScrolled" name="fa-arrow-up" class="icon" animation="float" hover/>
        </a>
      </div>

    </nav>
    
    <div class="nav-buttons" v-if="!isMobile">
      <div class="buttons-wrapper">
        <a href="https://www.linkedin.com/in/karim-gontor/">
            <v-icon class="icon" name="co-linkedin-in" scale="1" label="linkedin icon" animation="float" hover/>
        </a>
        <a href="https://www.github.com/karim-aitt">
            <v-icon class="icon" name="co-github" scale="1" label="github icon" animation="float" hover/>
        </a>
        <a href="mailto:karim-gontor@gmail.com">
            <v-icon class="icon" name="co-gmail" scale="1" label="email icon" animation="float" hover/>
        </a>
      </div>
    </div>

    <div :class="buttonsClass">
      <div class="buttons-wrapper">
        <template v-if="darkModeStore.isDarkMode">
          <v-icon @click="darkModeStore.toggleDarkMode" class="icon" title="Dark mode" name="md-darkmode-outlined"
            scale="1" label="light mode icon" animation="float" hover />
        </template>

        <template v-else>
          <v-icon @click="darkModeStore.toggleDarkMode" class="icon" title="Light mode" name="md-darkmode" scale="1"
            label="dark mode icon" animation="float" hover />
        </template>

        <v-icon @click="toggleModal" class="icon" title="Translate" name="io-language" scale="1" label="light mode icon"
          animation="float" hover />
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="isModalActive" class="modal-language">
        <button @click="toggleLanguage" class="button" value="es">Spanish</button>
        <button @click="toggleLanguage" class="button" value="en">English</button>
        <button @click="toggleLanguage" class="button" value="de">Deutsch</button>
      </div>
    </transition>
  </header>


</template>

<style scoped>
.top-bar{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.3rem;
  width: fit-content;
  border: 1px solid var(--color-border);
  padding: 1px 2rem;
  margin-bottom: 0.3rem;
  color: var(--color-text);
  background-color: var(--color-background-mute);
  z-index: 10;

  
    
    p.title{
      font-weight: bold;
      font-size: 1.3rem;
      cursor: pointer;
    }
    p.title:hover{
      color: var(--color-hover);
    }
  

}
header {
  display: flex;
  justify-content: end;
  gap: 0.3rem;
  position: sticky;
  top: 0.5rem;
  
}

.nav {
  display: flex;
  height: 3.3rem;
  width: fit-content;
  border: 1px solid var(--color-border);
  padding: 1px 2rem;

  margin-bottom: 0.3rem;
  top: 0.5rem;
  color: var(--color-text);
  background-color: var(--color-background-mute);
}

@media (max-width: 912px) {
  .nav {}
}


.title-wrapper {
  
  display: flex;
  gap: 0.4rem;

  a{
    display: flex;
  }

  h2 {
    margin: auto 0;
    font-size: 2rem;
    cursor: pointer;
  }
  h2:hover{
    color: var(--color-hover);
  }

  .icon{
    margin: auto 0;
    margin-left: 10px;
  }

}

.margin-left-auto{
  margin-left: auto;
}

.nav-buttons {
  display: flex;
  height: 3.3rem;
  width: fit-content;
  border: 1px solid var(--color-border);
  padding: 1px 2rem;
  margin-bottom: 0.3rem;
  top: 0.5rem;
  color: var(--color-text);
  background-color: var(--color-background-mute);

  .buttons-wrapper {
    display: flex;
    gap: 0.5rem;
    margin: auto 0;

    .icon {
      padding: 4px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid var(--color-border);
      transition: background-color 0.3s;
    }

    .icon:hover {
      color: var(--color-hover);
    }
  }

}


.modal-language {
  position: absolute;
  right: 0.2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  padding: 10px;

}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.modal-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>