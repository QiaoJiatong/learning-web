<template>
  <div>
    <!-- <HelloWorld /> -->
    <!-- <exercise /> -->
    <!-- <FormBinding />
    <listener />
    <LifeCycle /> -->
    <temperature />
    <!-- <userInput /> -->
    <!-- <AirTicket /> -->
    <!-- <drawCircle /> -->
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import exercise from "./components/exercise.vue";
import FormBinding from "./components/form-binding.vue";
import listener from "./components/listener.vue";
import emits from "./components/MyEmits.vue";
import LifeCycle from "./components/life-cycle/index.vue";
import userInput from "./components/user-input.vue";
import AirTicket from "./components/Air-ticket-reservation.vue";
import drawCircle from "./components/draw-circle.vue";
import temperature from "./components/temperature-converter.vue";

export default {
  components: {
    HelloWorld,
    exercise,
    FormBinding,
    listener,
    emits,
    LifeCycle,
    temperature,
    userInput,
    AirTicket,
    drawCircle,
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
