<template>
  <div>
    <h2>{{ refAge }}</h2>
    <h2>{{ name }} --{{ age }}</h2>
    <button @click="btnclick">点我</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, toRefs } from 'vue'
const info = reactive({ name: 'coderwhy', age: 18 })
const { name, age } = toRefs(info)
const refAge = toRef(info, 'age')

function btnclick() {
  info.age++
}
</script>

<style scoped>
</style>