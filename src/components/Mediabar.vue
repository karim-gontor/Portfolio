<script setup>
    defineProps({
        hoverWhite: Boolean,
    })


</script>


<template>
    <div class="bar-wrapper">
        <a :class="hoverWhite ? 'h-white' : ''" href="https://www.linkedin.com/in/karim-gontor/">
            <v-icon class="icon" name="fa-linkedin" scale="2" label="linkedin icon" animation="float" hover/>
        </a>
        <a :class="hoverWhite ? 'h-white' : ''" href="https://www.github.com/karim-aitt">
            <v-icon class="icon" name="fa-github-square" scale="2" label="github icon" animation="float" hover/>
        </a>
        <a :class="hoverWhite ? 'h-white' : ''" href="mailto:karim-gontor@gmail.com">
            <v-icon class="icon" name="co-gmail" scale="2" label="email icon" animation="float" hover/>
        </a>
    </div>

</template>


<style scoped>
.bar-wrapper{
    display: flex;
    justify-content: center;
    gap: 1.3rem;
    font-size: 1.2rem;
}

.h-white:hover{
    color: white;
}
</style>