<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Person from './components/Person.vue'
import { ref,reactive,computed,defineAsyncComponent } from 'vue'
const tabs = [{name:"HelloWorld", component: HelloWorld},{name:"About",component: About},{name:"Person",component: Person}]
const currentTab = ref(0)
const asyncTab = defineAsyncComponent(()=>import('./components/AsyncTab.vue'))
let isshow = ref(true)
function btnclick(item: number) {
  currentTab.value = item
}


</script>

<template>
  <div>
    <button v-for="(item,index) in tabs" :key="item.name" @click="btnclick(index)"   :class="{active:currentTab===index}"  >{{ item.name }}</button>
    <button @click="isshow = !isshow">显示/隐藏</button>
  </div>
  <div>
    <component :is="tabs[currentTab].component"></component>
    <template v-if="isshow">
      
      <async-tab></async-tab>
    </template>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
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
