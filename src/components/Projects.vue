<script setup>
import { useIsMobile } from '@/composables/useIsMobile'
const { isMobile } = useIsMobile();

</script>

<template>
    <main>
        <div class="wrapper">
            <div class="img-container">
                <h4 v-if="isMobile" class="text-title">Memocards</h4>
                <img src="@/assets/memocards-image.jpg" alt="memocards image" />
            </div>
            <div class="text-container">
                <h4 v-if="!isMobile" class="text-title">Memocards</h4>
                <p class="text">
                    {{ $t('memocardsText') }}
                </p>
                <div class="tech-container">
                    <span class="tech">Vue.js</span>
                    <span class="tech">Bootstrap</span>
                    <span class="tech">Node.js</span>
                    <span class="tech">Express</span>
                    <span class="tech">PostgreSQL</span>
                </div>
                <div class="link-wrapper">
                    <div class="link-container">
                        <a href="https://github.com/Karim-aitt/memocards" class="title">

                            Github repository <v-icon class="title-icon" name="bi-arrow-up-right" />
                        </a>
                    </div>
                    <div class="link-container">
                        <a href="https://kg-memocards.netlify.app" class="title">

                            Memocards Link <v-icon class="title-icon" name="bi-arrow-up-right" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div class="img-container">
                <h4 v-if="isMobile" class="text-title">Deep Space Theme</h4>
                
                    <img src="@/assets/deep-space-theme-image.jpg" alt="deep space image" />

               

            </div>
            <div class="text-container">
                <h4 v-if="!isMobile" class="text-title">Deep Space Theme</h4>
                <p class="text">
                    {{ $t('deepSpaceText') }}
                </p>

                <div class="link-wrapper">
                    <div class="link-container">
                        <a href="https://github.com/karim-gontor/Deep-Space-Theme/" class="title" target="_blank">

                            Github repository <v-icon class="title-icon" name="bi-arrow-up-right" />
                        </a>
                    </div>
                    <div class="link-container">
                        <a href="https://ibb.co/CKtcsgv" class="title" target="_blank">

                            Watch image <v-icon class="title-icon" name="bi-arrow-up-right" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="link-archive-container">
            <RouterLink to="/archive" class="link-archive">{{ $t('projectArchive') }}
                <v-icon class="link-icon" name="bi-arrow-right" label="icon arrow right" />
            </RouterLink>
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
    text-align: justify;

    .link-archive-container {
        width: 100%;
        margin: 1rem 0;

        .link-archive {
            margin-left: 2rem;
            cursor: pointer;
        }

        .link-archive:hover {
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


.wrapper {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    background-color: var(--color-background-mute);
    box-shadow: 0px 0px 10px 1px var(--vt-c-divider-light-1);
    overflow: hidden;
    width: auto;
    max-height: 308px;

    margin: 0.5rem;
    line-height: 1.6rem;

    .text-container {
        padding: 5px 2rem;
        border: none;
    }

    .text-container {
        .text-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            margin-top: 0.4rem;
        }

        .text {
            margin-top: 0;

        }

    }

    .text-container .tech-container {
        display: flex;
        gap: 0.5rem;

        .tech {
            padding: 3px 0.5rem;
            border: 1px solid var(--color-tech);
            background-color: var(--color-background-mute);
        }
    }

    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 95%;
            height: 93%;
            border: 3px solid var(--color-resalt);
            object-fit: cover;

        }
        
        
    }

    .link-container {
        margin: 1rem 0;
    }

    .link-wrapper {
        display: flex;
        gap: 0.5rem;
    }

}

.img-container:hover {
    img {
        border: 3px solid var(--color-background-yellow);
    }
}

@media (max-width: 912px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        max-height: none;
        width: auto;

        .text-title {
            font-size: 1.5rem;
            margin: 0;
            margin-bottom: 1rem;
        }

        .text-container {
            margin: 0;
            padding: 1rem;
            padding-top: 0;
            padding-bottom: 0;
        }

        .text-container .tech-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            .tech {
                padding: 3px 0.5rem;
                border: 1px solid var(--color-background-yellow);
                background-color: var(--color-background-mute);

            }
        }

        .img-container {
            display: flex;
            flex-direction: column;

            padding: 1rem;
            padding-right: 1rem;
            padding-bottom: 0;
            margin-bottom: 1rem;

            img {
                width: 100%;
                object-fit: scale-down;
            }
        }

        .link-container {
            margin: 1.5rem 0;
        }

        .link-wrapper {
            display: flex;
            justify-content: space-between;

        }
    }
}

.title:hover {
    .title-icon {
        transition: transform 0.5s;
        transform: translateY(-3px) translateX(3px);
    }
}
</style>