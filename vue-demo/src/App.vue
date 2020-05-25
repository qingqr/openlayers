<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <open-map></open-map>
  </div>
</template>

<script>
import OpenMap from '../src/components/OpenMap'
export default {
  name: 'App',
  components: {
    'open-map': OpenMap
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
