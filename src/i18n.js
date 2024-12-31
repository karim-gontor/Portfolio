
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    greeting: 'Hello there!',
    description: 'I’m a developer specializing in building interfaces & accessible, human-centered products.',
    language: 'EN',
    experienceBosonitText: 'I redesigned and maintained user interfaces with Angular and Ionic, enhancing functionality and accessibility on mobile and desktop devices, optimizing the user experience through animation and loading transitions using JavaScript and CSS. Additionally, I worked closely with backend and design teams to integrate new features and ensure compliance with accessibility standards (WCAG) throughout the project.',
    experienceNytelwebText: 'I created web administration panels and mobile applications with Angular and Ionic, improving end-user efficiency; developed frontend integrations with APIs, optimizing the response time of mobile applications; collaborated with designers in creating interfaces that adhered to modern usability and accessibility standards using Figma; and maintained an API developed with PHP Laravel, ensuring its integration into final projects.',
    experienceFreelance: 'Development of custom web projects',
    footerText: 'Coded in <a class="test" href="https://code.visualstudio.com/">Visual Studio Code</a> and designed by yours truly. Built with <a href="https://vuejs.org/">Vue</a> and CSS. All text is set in the <a href="https://rsms.me/inter/">Inter</a> typeface.',
    projectArchive: 'View full projects archive',
    resume: 'View full résumé',
    archiveTable: {
      year: 'Year',
      buildWith: 'Built with',
      link: 'Link'
    },
    return: 'Return',
    memocardsText: 'Full stack web app designed for the creation and management of learning flashcards, focused on facilitating the study and memorization of language vocabulary. The project included the development of functionalities to create, edit and organize study cards, as well as a user authentication system and secure data storage.',
    deepSpaceText: 'Minimal dark blue/violet theme for Visual Studio Code.',
  },
  es: {
    greeting: 'Hey, hola!',
    description: 'Soy un desarrollador especializado en construir interfaces & productos accesibles enfocados en las personas.',
    language: 'ES',
    experienceBosonitText: 'Rediseñé y mantuve interfaces de usuario con Angular e Ionic, mejorando la funcionalidad y accesibilidad en dispositivos móviles y de escritorio, optimizando la experiencia del usuario mediante transiciones de animación y carga con JavaScript y CSS. Además, colaboré estrechamente con los equipos de backend y diseño para integrar nuevas funcionalidades y asegurar el cumplimiento de los estándares de accesibilidad (WCAG) en todo el proyecto.',
    experienceNytelwebText: 'Creé paneles de administración web y aplicaciones móviles con Angular e Ionic, mejorando la eficiencia del usuario final; desarrollé integraciones frontend con APIs optimizando el tiempo de respuesta de las aplicaciones móviles; colaboré con diseñadores en la creación de interfaces que cumplieran con estándares modernos de usabilidad y accesibilidad utilizando Figma; y mantuve una API desarrollada con PHP Laravel, asegurando su integración en proyectos finales.',
    experienceFreelance: 'Desarrollo de proyectos web personalizados',
    footerText: 'Programado en <a href="https://code.visualstudio.com/">Visual Studio Code</a> y diseñado por mí. Creado con <a href="https://vuejs.org/">Vue</a> y CSS. Todo el texto está escrito en la tipografía <a href="https://rsms.me/inter/">Inter</a>.',
    projectArchive: 'Ver archivo de proyectos',
    resume: 'Ver curriculum completo',
    archiveTable: {
      year: 'Año',
      buildWith: 'Hecho con',
      link: 'enlace'
    },
    return: 'Volver',
    memocardsText: 'Web app full stack diseñada para la creación y gestión de Flashcards de aprendizaje,enfocada en facilitar el estudio y la memorización de vocabulario de idiomas. El proyecto incluyó el desarrollo de funcionalidades para crear, editar y organizar tarjetas de estudio, así como un sistema de autenticación de usuarios y almacenamiento seguro de datos.',
    deepSpaceText: 'Tema minimalista azul oscuro / violeta para Visual Studio Code.',
  },
  de: {
    greeting: 'Hallo!',
    description: 'Ich bin ein Webentwickler, der sich auf die Entwicklung barrierefreier Schnittstellen und Produkte für den Menschen spezialisiert hat.',
    language: 'DE',
    experienceBosonitText: 'Ich habe Benutzeroberflächen mit Angular und Ionic neu gestaltet und gewartet, die Funktionalität und Zugänglichkeit auf mobilen und Desktop-Geräten verbessert und die Benutzererfahrung durch Animationen und Ladeübergänge mit JavaScript und CSS optimiert. Darüber hinaus habe ich eng mit Backend- und Designteams zusammengearbeitet, um neue Funktionen zu integrieren und die Einhaltung der Barrierefreiheitsstandards (WCAG) im gesamten Projekt sicherzustellen.',
    experienceNytelwebText: 'Ich habe Web-Administrationspanels und mobile Anwendungen mit Angular und Ionic erstellt, die die Effizienz der Endbenutzer verbesserten; Frontend-Integrationen mit APIs entwickelt, um die Antwortzeiten mobiler Anwendungen zu optimieren; mit Designern zusammengearbeitet, um Schnittstellen zu erstellen, die modernen Standards für Benutzerfreundlichkeit und Barrierefreiheit mit Figma entsprechen; und eine mit PHP Laravel entwickelte API gewartet, um deren Integration in Endprojekte sicherzustellen.',
    experienceFreelance: 'Entwicklung individueller Webprojekte',
    footerText: 'In <a href="https://code.visualstudio.com/">Visual Studio Code</a> codiert und von mir selbst gestaltet. Erstellt mit <a href="https://vuejs.org/">Vue</a> und CSS. Der gesamte Text ist in der Schriftart <a href="https://rsms.me/inter/">Inter</a> gesetzt.',
    projectArchive: 'Projektarchiv ansehen',
    resume: 'Vollständigen Lebenslauf ansehen',
    archiveTable: {
      year: 'Jahr',
      buildWith: 'Gemacht mit',
      link: 'Link'
    },
    return: 'Return',
    memocardsText: 'Full-Stack-Web-App für die Erstellung und Verwaltung von Lernkarten, deren Schwerpunkt auf der Erleichterung des Lernens und Auswendiglernens von Sprachvokabeln liegt. Das Projekt umfasste die Entwicklung von Funktionalitäten zum Erstellen, Bearbeiten und Organisieren von Lernkarten sowie eines Benutzerauthentifizierungssystems und einer sicheren Datenspeicherung.',
    deepSpaceText: 'Minimalistisches dunkelblaues/violettes Design für Visual Studio Code.',
  }
};

const i18n = createI18n({
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'es', // Idioma de respaldo
  messages,
});

export default i18n;
