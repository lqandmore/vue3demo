<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Person from './components/Person.vue'
import { ref,reactive,computed } from 'vue'
const tabs = ["HelloWorld", "About","Person"]
const currentTab = ref(0)

function btnclick(item: number) {
  currentTab.value = item
}

let activeI = computed(()=>{
  return currentTab.value
})
</script>

<template>
  <div>
    <button v-for="(item,index) in tabs" :key="item" @click="btnclick(index)"   :class="{active:currentTab===index}"  >{{ item }}</button>

  </div>
  <div>
    <component :is="tabs[activeI]"></component>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

.active {
  color: aquamarine;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
