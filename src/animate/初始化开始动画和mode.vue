<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
  </div>
  <transition name="why" type="animation" appear mode="out-in">
    <img src="./feichuan.jpg" v-if="show" class="feichuan" />
    <img src="./123dw.jpg" v-else class="feichuan" />
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
  transition: opacity 1s ease;
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