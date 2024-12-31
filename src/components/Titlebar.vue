<script setup>
    defineProps({
        title: String,
        left: Boolean
    })

</script>

<template>
    <div :class="left ? 'title-right-container' : 'title-container'">
            <p class="title">{{ title }}</p>
    </div>
    
</template>

<style scoped>

.title{
    letter-spacing: 5px;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem;
}

.title-container{
    display: flex;
    justify-content: end;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-yellow);
}

.title-right-container{
    display: flex;
    justify-content: start;
    margin: 1rem 0 0 0;
    
    border-right: none;
    border-left: none;
    background: linear-gradient(
    to right, 
    var(--color-background-yellow), 
    var(--color-background)
    );
}

</style>