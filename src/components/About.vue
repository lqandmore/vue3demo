<template>
    <div>
        <h2 ref="title">I'm About</h2>
        <navbar ref="foo"></navbar>
        <button @click="getel">点击</button>
    </div>
</template>

<script setup lang="ts">
import navbar from './navbar.vue'
import {ref} from 'vue'
const title = ref(null)
const foo = ref(null)
function getel() {

    console.log(title.value)

    foo.value.sayHello()


}
</script>

<style scoped>

</style>