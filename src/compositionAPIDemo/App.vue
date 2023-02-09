<template>
  <div>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
    <h2>{{ name }} --{{ age }}</h2>
    <button @click="btnclick">点我</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, toRefs } from 'vue'
import useDebounce from './hooks/useDebounce'
const info = reactive({ name: 'coderwhy', age: 18 })
const { name, age } = toRefs(info)
const refAge = toRef(info, 'age')
const message = useDebounce('hello')
function btnclick() {
  info.age++
}
</script>

<style scoped>
</style>