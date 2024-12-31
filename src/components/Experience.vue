<script setup>
import { ref } from 'vue';

const pdfUrl = ref(null);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    pdfUrl.value = URL.createObjectURL(file);
  }
};

</script>

<template>
    <main>
        <div class="container">
            <div class="date-container">
                <span>SEPT 2024 — NOW</span>
            </div>
            <div class="text-container">

                <a href="#" class="title">
                    Freelance Developer
                    <v-icon class="title-icon" name="bi-arrow-up-right" />
                </a>
                <p class="text">{{ $t('experienceFreelance') }}</p>

                <div class="tech-container">
                    <span class="tech">React</span>
                    <span class="tech">Tailwind</span>
                    <span class="tech">Node.js</span>
                    <span class="tech">Express</span>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="date-container">
                <span>JULY — SEPT 2024</span>
            </div>
            <div class="text-container">

                <a href="https://www.nytelweb.es/" class="title">
                    Junior Frontend Dev. · Nytelweb
                    <v-icon class="title-icon" name="bi-arrow-up-right" />
                </a>
                <p class="text">{{ $t('experienceNytelwebText') }}</p>

                <div class="tech-container">
                    <span class="tech">Angular</span>
                    <span class="tech">Ionic</span>
                    <span class="tech">PrimeNg</span>
                    <span class="tech">Figma</span>
                    <span class="tech">PHP — Laravel</span>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="date-container">
                <span>DEC 2022 — MARCH 2023</span>
            </div>
            <div class="text-container">

                <a href="https://bosonit.com/" class="title">
                    Associate Consultant · Bosonit
                    <v-icon class="title-icon" name="bi-arrow-up-right" />
                </a>
                <p class="text">{{ $t('experienceBosonitText') }}</p>

                <div class="tech-container">
                    <span class="tech">Angular</span>
                    <span class="tech">Ionic</span>
                    <span class="tech">Javascript</span>
                    <span class="tech">CSS Transitions</span>
                </div>
            </div>
        </div>

        <div class="link-cv-container">
            <a href="https://drive.google.com/file/d/16Ry3X5jHtfNNi7x-F2ydS5mP7t8dqFCn/view?usp=sharing" target="_blank" class="link-cv">{{ $t('resume') }}
                <v-icon class="link-icon" name="bi-arrow-right" label="icon arrow right" />
            </a>
            
        </div>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    border-top: 0px;

    .link-cv-container {
        width: 100%;
        margin: 1rem 0;

        .link-cv {
            margin-left: 2rem;
            cursor: pointer;
            font-weight: bold;
        }

        .link-cv:hover {
            .link-icon {
                transition: transform 0.5s;
                transform: translateX(7px);
                font-weight: bold;
            }
        }
    }
}

@media (max-width: 912px) {
    main {
        display: flex;
        flex-direction: column;
        justify-items: center;
        background-color: var(--color-background-soft);
        color: var(--color-text);
        border: 1px solid var(--color-border);
        border-top: 0px;
    }
}

.container {
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    text-wrap: wrap;
    background-color: var(--color-background-mute);
    box-shadow: 0px 0px 10px 1px var(--vt-c-divider-light-1);

    width: 95%;

    margin: 0.5rem;
    line-height: 1.6rem;
    padding: 1rem;
    gap: 2rem;


    .date-container {
        margin: 0 auto;
        font-weight: bold;

        span {
            font-size: small;
            color: var(--color-text);
        }
    }

    .text-container {

        .title {
            font-weight: bold;
            font-size: 1.2rem;
            margin: 0;
        }

        .title:hover {
            .title-icon {
                transition: transform 0.5s;
                transform: translateY(-3px) translateX(3px);
            }
        }

        .text {
            text-align: justify;
            margin-top: 0.5rem;
        }

        .tech-container {
            display: flex;
            gap: 0.5rem;

            .tech {
                padding: 3px 0.5rem;
                border: 1px solid var(--color-tech);
                background-color: var(--color-background-mute);
            }
        }
    }


}

@media (max-width: 912px) {
    .container {
        display: flex;
        flex-direction: column;
        text-wrap: wrap;
        background-color: var(--color-background-mute);
        box-shadow: 0px 0px 10px 1px var(--vt-c-divider-light-1);

        width: auto;

        margin: 0.5rem;
        line-height: 1.6rem;
        padding: 1rem;
        gap: 0.5rem;

        .date-container {
            margin: 0;

            span {

                font-weight: bold;
                font-size: small;
                color: var(--color-text);
            }
        }

        .text-container {

            .title {
                font-weight: bold;
                font-size: 1.2rem;
                margin: 2rem 0;
            }

            .title:hover {
                .title-icon {
                    transition: transform 0.5s;
                    transform: translateY(-3px) translateX(3px);
                }
            }

            .text {
                margin-top: 0.5rem;
            }

            .tech-container {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;

                .tech {
                    padding: 3px 0.5rem;
                    border: 1px solid var(--color-background-yellow);
                    background-color: var(--color-background-mute);
                }
            }
        }


    }
}



a {
    text-decoration: none;
    font-weight: normal;
}

.container:hover {
    color: var(--color-text);
    background-color: var(--color-background);

}
</style>