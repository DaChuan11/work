<template>
  <div id="app">
    <div id="backimg" />
    

    <masterControl style="height:100%" />
    <!-- <test /> -->
  </div>
</template>

<script>
// import $ from "jquery";
import masterControl from "./components/masterControl";
export default {
  name: "App",
  components: {
    masterControl
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#backimg{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: url('./assets/back.gif');
  background-size:cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
}
</style>
