

<template>
  <div>
    <button @click="num++"></button>
    <h2>I'm Person {{ num }}</h2>
    <h2>{{ num }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)
</script>

<style scoped>
</style>