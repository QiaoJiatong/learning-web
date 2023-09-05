<script>
import Counter from "./components/MyCounter.vue";
import TemperatureConverter from "./components/TemperatureConverter.vue";
import MyTimer from "./components/MyTimer.vue";
import AirTicket from "./components/Air-ticket-reservation.vue";
export default {
  components: {
    Counter,
    TemperatureConverter,
    MyTimer,
    AirTicket
  },
};
</script>

<template>
  <div>
    <!-- <Counter />
    <TemperatureConverter />
    <MyTimer /> -->
    <AirTicket />
  </div>
</template>

<style scoped></style>
