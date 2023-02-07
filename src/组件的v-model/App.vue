<template>
  <div>
    <lq-input v-model="message" v-model:title="titletext"></lq-input>
    <h2>{{ message }}</h2>
    <h2>{{ titletext }}</h2>
  </div>
</template>

<script setup lang="ts">
import LqInput from './components/LqInput.vue'
import { ref } from 'vue'
const message = ref('hello world')
const titletext = ref('小明爱吃大米')
</script>

<style scoped>
</style>