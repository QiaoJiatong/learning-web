<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
    <MyComponent />
    <button @click="increment">counts:{{ counts }}</button>

  </nav>
  <router-view />
</template>
<script>

import MyComponent from './components/MyComponent.vue'

 
export default {
  name: "App",
  components:{
    MyComponent,
  },
  data(){
    return{
      counts:1
    }
  },
  methods: {
    increment(){
      this.counts++
    }
    },
    mounted(){
      console.log('The initial count is ${this.counts}.');
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
