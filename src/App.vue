<script setup lang="ts">
import GlobalesLayout from '@/components/GlobalesLayout.vue'
</script>

<template>
  <!-- Das GlobaleLayout liegt über allen anderen Routen und ist immer vorhanden -->
  <GlobalesLayout>
    <RouterView />
  </GlobalesLayout>
</template>
