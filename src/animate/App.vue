<template>
  <div class="bar">
    <button @click="show = !show">显示/隐藏</button>
    <transition
      name="why"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforLeave"
      @leave="leave"
      @after-leave="afterLeave"
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
function beforeEnter() {
  console.log('beforeEnter')
}
function enter() {
  console.log('enter')
}
function afterEnter() {
  console.log('afterEnter')
}
function beforLeave() {
  console.log('beforLeave')
}
function leave() {
  console.log('leave')
}
function afterLeave() {
  console.log('afterLeave')
}
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