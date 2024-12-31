import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(false);

  // Detectar preferencia del sistema
  const checkSystemPreference = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Aplicar o quitar el modo oscuro
  const applyDarkMode = (value) => {
    isDarkMode.value = value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  // Alternar modo oscuro manualmente
  const toggleDarkMode = () => {
    const newValue = !isDarkMode.value;
    applyDarkMode(newValue);
    localStorage.setItem('darkMode', newValue);
  };

  // Inicializar modo oscuro
  const initializeDarkMode = () => {
    const savedPreference = localStorage.getItem('darkMode');
    const systemPreference = checkSystemPreference();
    const initialPreference = savedPreference !== null ? JSON.parse(savedPreference) : systemPreference;
    applyDarkMode(initialPreference);
  };

  // Llama a la inicialización al cargar la store
  initializeDarkMode();

  return {
    isDarkMode,
    toggleDarkMode,
  };
});