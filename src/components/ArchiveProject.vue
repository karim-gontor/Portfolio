<script setup>
import { ref } from 'vue'
const props = defineProps({
    name: String,
    year: String,
    techs: Array,
    Link: String,
    background: String
})

import { useIsMobile } from '@/composables/useIsMobile';
const { isMobile } = useIsMobile();

const bgSoft = ref('col padding')
const bgHead = ref('col head padding')
const bgLast = ref('padding')
const techCon = ref('tech-container col-tech padding')
if (props.background) {
    bgSoft.value = 'col padding ' + props.background
    bgHead.value = 'col head padding ' + props.background
    bgLast.value = 'padding ' + props.background
    techCon.value = 'tech-container col-tech padding ' + props.background
}
</script>
<template>
    <td :class="bgSoft">{{ year }}</td>
    <th :class="bgHead">{{ name }}</th>
    <td v-if="!isMobile" :class="techCon">
        <span v-for="tech in techs" :key="tech" class="tech">
            {{ tech }}
        </span>
    </td>
    <td :class="bgLast">
        <a :href="Link" target="_blank">
            Link
        </a>
    </td>
</template>

<style scoped>
.col {
    width: 10%;
    
}

.padding {
    padding-bottom: 1rem;
    padding-top: 1rem;
}

.head {
    width: 25%;
}

.col-tech {
    width: 40%;
    margin: 0 1rem 0 0;
}

table thead {
    text-align: left;

    tr {
        th {
            

        }
    }
}

table tbody {
    tr {
        td {
            border-top: 1px solid var(--color-border);
        }

        th {
            border-top: 1px solid var(--color-border);
            text-align: left;
        }

        td.tech-container {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: 100%;

            .tech {
                padding: 3px 0.5rem;
                border: 1px solid var(--color-tech);
                background-color: var(--color-background-mute);
            }
        }
    }
}

@media (max-width: 912px) {
    .col {
        width: 20%;
    }

    .padding {
        padding-bottom: 2rem;
    }

    .head {
        width: 100%;

    }

    .col-tech {
        width: 40%;
        margin: 0 1rem 0 0;
    }
}

.bg-soft {
    background-color: var(--color-background-mute);
}
</style>