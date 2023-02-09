<template>
  <div>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
    <h2>{{ name }} --{{ age }}</h2>
    <h2>{{ infoM }}</h2>
    <button @click="btnclick">点我</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, toRefs, computed } from 'vue'
import useDebounce from './hooks/useDebounce'
const info = reactive({ name: 'coderwhy', age: 18 })
const { name, age } = toRefs(info)
const refAge = toRef(info, 'age')
const message = useDebounce('hello')

const infoM = computed({
  get: () => {
    return name.value + ' ' + age.value
  },
  set: (newValue) => {
    const arr = newValue.split(' ')
    name.value = arr[0]
    age.value = Number(arr[1])
  }
})

function btnclick() {
  info.age++
  console.log(infoM.value)
}
</script>

<style scoped>
</style>