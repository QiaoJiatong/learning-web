<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>counter = {{ $store.state.counter }}</p>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <exercise />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import exercise from './components/exercise.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    exercise
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
