<template>
  <router-view />
</template>
<script setup>
import {ref, onMounted, onUnmounted, watch} from "vue"
import {useRoute} from 'vue-router'

const route = useRoute()
const currentRouteInfo = ref({})

onMounted(() => {
  currentRouteInfo.value = route
})
onUnmounted(() => {
  console.log("app")
})


watch(route, (value)=>{
  currentRouteInfo.value = value
}, {deep: true})
</script>
<style>
#app {
  font-family: "MiSans", "Microsoft YaHei", "Pingfang", sans-serif;
  color: #2c3e50;
}

a{
  color: unset;
  text-decoration: none;
}

</style>
