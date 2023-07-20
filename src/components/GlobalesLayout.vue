<template>
    <div>
        GlobalesLayout
        <RouterLink :to="{ name: 'layout2' }">Layout 2</RouterLink>
        <RouterLink :to="{ name: 'layout3' }">Layout 3</RouterLink>
        <RouterLink :to="{ name: 'layout4' }">Layout 4</RouterLink>
        <RouterLink :to="{ name: 'layout5' }">Layout 5</RouterLink>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
// Schreibe hier die Logik für globale Stores die im Speicher gehalten werden sollen. 

</script>

<style scoped>

</style>