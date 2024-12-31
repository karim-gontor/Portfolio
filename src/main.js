import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowDown,FaArrowLeft,BiArrowRight, CoGithub, CoLinkedinIn, BiArrowUpRight,FaArrowUp, FaLinkedin, FaGithubSquare, CoGmail, MdDarkmode, MdDarkmodeOutlined, IoLanguage  } from "oh-vue-icons/icons";

addIcons(BiArrowDown,FaArrowLeft,BiArrowRight, CoGithub, CoLinkedinIn, BiArrowUpRight,FaArrowUp, FaLinkedin, FaGithubSquare, CoGmail, MdDarkmode, MdDarkmodeOutlined, IoLanguage);
// asdasdsad
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);
app.component("v-icon", OhVueIcon);

app.mount('#app')
