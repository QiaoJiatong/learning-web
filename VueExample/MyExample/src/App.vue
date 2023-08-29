<script>
import Counter from "./components/MyCounter.vue";
import TemperatureConverter from "./components/TemperatureConverter.vue";
export default {
  components: {
    Counter,
    TemperatureConverter,
  },
};
</script>

<template>
  <div>
    <Counter />
    <TemperatureConverter />
  </div>
</template>

<style scoped></style>
