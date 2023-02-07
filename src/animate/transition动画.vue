<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
  </div>
  <transition name="why">
    <img src="./feichuan.jpg" v-if="show" class="feichuan" />
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<style scoped>
.feichuan {
  display: block;
  width: 200px;
  height: auto;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
}


</style>