<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Personal from './components/Personal.vue'
import About from './components/About.vue'
import { ref } from 'vue'

let currentTab = ref('HelloWorld')
// let currentTab = 'HelloWorld'
const tabs = ['HelloWorld', 'About', 'Personal']
function changeCurrentTab(tab: string) {
  currentTab.value = tab
  console.log(currentTab.value)
}
</script>

<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="changeCurrentTab(item)"
      :class="{active: currentTab === item}"
    >{{ item }}</button>
  </div>
  <component :is="currentTab" class="tab"></component>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
button {
  height: 40px;
  width: 100px;
}
.tab {
  display: block;
  width: 100vw;
  height: 50vh;
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
