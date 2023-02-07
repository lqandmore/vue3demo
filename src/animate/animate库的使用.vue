<template>
  <div class="bar">
    <button @click="show = !show">显示/隐藏</button>
    <transition
      name="why"
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__backInLeft"
    >
      <img src="./feichuan.jpg" v-if="show" class="feichuan" />
      <!-- <img src="./123dw.jpg" v-else class="feichuan" /> -->
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'

const show = ref(true)
</script>

<style scoped>
button {
  display: block;
  margin-bottom: 50px;
}
.bar {
  display: block;
  width: 100vw;
  height: 300px;
  
}
.feichuan {
  display: block;
  width: 200px;
  height: auto;
}
.animate__backInLeft {
  animation-direction: reverse;
}
</style>