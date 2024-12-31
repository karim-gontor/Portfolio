<script setup>
import Mediabar from './Mediabar.vue';

import {computed} from 'vue';

import {useIsMobile} from '@/composables/useIsMobile.js'
const {isMobile} = useIsMobile();


</script>

<template>

    <footer class="footer">
        <p  v-if="!isMobile" v-html="$t('footerText')"></p>
        <div>
            <span>
                Karim — 2025
            </span>
            <div>
                <Mediabar :hoverWhite="true" />
            </div>

        </div>
    </footer>
</template>

<style scoped>
.footer {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;
    margin-top: 1rem;
    background-color: var(--color-background-yellow);

    p {
        text-align: justify;
        font-size: small;
        max-width: 30%;
        opacity: 0.8;
    }

    div {
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        div {
            opacity: 1;
            flex-direction: row;
        }

    }


}

@media (max-width: 912px) {
    .footer {
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        background-color: var(--color-background-yellow);
        padding: 0;

        p {
            text-align: justify;
            font-size: small;
            max-width: none;
            opacity: 0.8;
        }

        div {
            text-align: center;
            opacity: 0.8;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            div {
                opacity: 1;
                flex-direction: row;
            }

        }


    }
}
</style>

<style>
.footer p a:hover {
    color: var(--vt-c-white) !important;
}
</style>