<template>
  <div class="lq-root">
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
    <h2>{{ name }} --{{ age }}</h2>
    <h2 ref="info2">{{ infoM }}</h2>
    <button @click="btnclick">点我</button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  toRef,
  toRefs,
  computed,
  watchEffect,
  watch,
  onMounted
} from 'vue'
import useDebounce from './hooks/useDebounce'
const info = reactive({ name: 'coderwhy', age: 18 })
const { name, age } = toRefs(info)
const refAge = toRef(info, 'age')
const message = useDebounce('hello')

const infoM = computed({
  get() {
    return name.value + ' ' + age.value
  },
  set(newValue) {
    const arr = newValue.split(' ')
    name.value = arr[0]
    age.value = Number(arr[1])
  }
})

function btnclick() {
  info.age++
  if (info.age > 25) stop()
}

const info2 = ref(null)

const stop = watchEffect(
  (onInvalidate) => {
    const requestTimer = setTimeout(() => {
      console.log('网络请求')
    }, 2000)
    onInvalidate(() => {
      clearTimeout(requestTimer)
    })
    console.log(infoM.value)
  },
  {
    flush: 'post'
  }
)

onMounted(() => console.log(info2.value))
</script>

<style scoped>
</style>