<script setup>
import ArchiveProject from '@/components/ArchiveProject.vue';
import Titlebar from '@/components/Titlebar.vue';

import { useIsMobile } from '@/composables/useIsMobile';
const { isMobile } = useIsMobile();

</script>

<template>
    <Titlebar title="All Projects" left />
    <div class="grid-container">
        <table class="table">
            <thead class="thead">
                <tr>
                    <th>Year</th>
                    <th class="h-project">Project</th>
                    <th v-if="!isMobile">Built with</th>
                    <th >Link</th>
                </tr>
            </thead>
            <tbody class="tbody">
                <tr>
                    <ArchiveProject background="" year="2024" name="Deep space theme"
                        Link="https://github.com/karim-gontor/Deep-Space-Theme/"
                        :techs="['Vs Code', 'Javascript', 'CSS']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2024" name="Memocards" Link="#"
                        :techs="['Vue', 'Tailwind', 'Express.js', 'Node.js', 'PostgreSQL']" />
                </tr>
                <tr>
                    <ArchiveProject background="" year="2024" name="Client System"
                        Link="https://github.com/karim-gontor/Client-System-DAO-CRUD-Simple" :techs="['JAVA']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2024" name="CRUD SpringBoot"
                        Link="https://github.com/karim-gontor/CRUD-System-Spring-SpringBoot"
                        :techs="['JAVA', 'SpringBoot']" />
                </tr>
                <tr>
                    <ArchiveProject background="" year="2024" name="Desktop Client System"
                        Link="https://github.com/karim-gontor/Desktop-Client-System-JAVA-SWING"
                        :techs="['JAVA', 'SWING', 'SPRING']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2024" name="Client System w/ Primefaces"
                        Link="https://github.com/karim-gontor/Client-System-PRIMEFACES-SPRING"
                        :techs="['JAVA', 'Primefaces', 'SPRING']" />
                </tr>
                <tr>
                    <ArchiveProject background="" year="2024" name="Desktop Task List"
                        Link="https://github.com/karim-gontor/Desktop-Task-List-JAVAFX-SPRING"
                        :techs="['JAVA', 'JAVAFX', 'SPRING']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2022" name="CRM Clients App"
                        Link="https://reliable-valkyrie-b34511.netlify.app/"
                        :techs="['React', 'Javascript', 'Json-server', 'Tailwind']" />
                </tr>
                <tr>
                    <ArchiveProject background="" year="2022" name="Spend Control"
                        Link="https://beautiful-paprenjak-3aaa26.netlify.app/"
                        :techs="['React', 'Javascript', 'Tailwind']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2022" name="Pet Administrator"
                        Link="https://heroic-rabanadas-4fe1ac.netlify.app/"
                        :techs="['React', 'Javascript', 'Tailwind']" />
                </tr>
                <tr>
                    <ArchiveProject background="" year="2022" name="Crypto Cotizator"
                        Link="https://subtle-meerkat-46f7db.netlify.app/"
                        :techs="['React', 'Javascript', 'Tailwind', 'API']" />
                </tr>
                <tr>
                    <ArchiveProject background="bg-soft" year="2022" name="Beer Project" Link="https://github.com/Karim-aitt/beer-club"
                        :techs="['React', 'Bootstrap', 'Flask', 'SQLAlchemy', 'PostgreSQL']" />
                </tr>
                

            </tbody>
        </table>
    </div>

</template>

<style scoped>
table {
    
    border-collapse: collapse;

}


.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid var(--color-border);
    padding: 0 1rem;
    margin: 0 auto;
    color: var(--color-text);
    background-color: var(--color-background-mute);

}

@media (max-width: 912px) {
    .grid-container {
        display: flex;
        flex-direction: column;
        min-height: 1vh;
        border: 1px solid var(--color-border);
    }

    thead tr{
        
        th.h-project{
            
            margin: 0 auto;
        }
    }
}

table thead {
    text-align: left;

    tr {
        background-color: var(--color-background-mute);
        th {
            padding: 0.6rem 0;
            
        }
        th:nth-child(3){
            
        }
        th:nth-child(4){
            
            
        }
    }
}

table tbody {
    tr {

        th {
            text-align: left;
        }

        td.tech-container {
            display: flex;
            gap: 0.5rem;

            .tech {
                padding: 3px 0.5rem;
                border: 1px solid var(--color-background-yellow);
                background-color: var(--color-background-mute);
            }
        }
    }
}

.bg-soft{
    background-color: var(--color-background-soft);
}

</style>