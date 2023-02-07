<template>
  <div>
    <!-- <input type="text" :value="modelValue" @input="inputValueChange" /> -->
    <input type="text" v-model="textMessage" />
    <input type="text" v-model="textTitle" />

    <h2>input 的 {{ modelValue }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['modelValue', 'title'])
const emits = defineEmits(['update:modelValue', 'update:title'])

const textMessage = computed({
  set(value) {
    emits('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})

const textTitle = computed({
  set(value) {
    emits('update:title', value)
  },
  get() {
    return props.title
  }
})
</script>

<style scoped>
</style>