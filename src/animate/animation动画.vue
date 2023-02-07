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
.why-enter-active {
  animation: bounce 1s;
}
.why-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>