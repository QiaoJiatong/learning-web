<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Mycomponent :title="title" :age="age" :names="names" />
</template>

<script>

import Mycomponent from './components/Mycomponent.vue';

export default {
  name: 'App',
  data() {
    return {
      title: "我是一个标题",
      age: 20,
      names:["iwen","ime","frank"]
    }
  },
  components: {
    Mycomponent
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
