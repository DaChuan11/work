<template>
  <div id="app">
    <navigation style="height:100%" />
  </div>
</template>

<script>
import navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    navigation
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

</style>
