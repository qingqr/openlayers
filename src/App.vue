<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MapTest />
  </div>
</template>

<script>
import MapTest from './components/MapTest.vue'

export default {
  name: 'App',
  components: {
    MapTest
  }
}
</script>

<style>
*{padding:0; margin:0;}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
</style>
