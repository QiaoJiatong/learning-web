<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ message }}</p>
  <Mycomponent @onEvent="getDataHandle"/>
</template>

<script>
import Mycomponent from './components/Mycomponent.vue';
export default {
  name: 'App',
  data(){
    return{
      message:""
    }
  },
  components: {
    Mycomponent
  },
  methods:{
    getDataHandle(data){
      console.log(data);
      this.message = data;
    }
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
