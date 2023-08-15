<template>
  <div>
    <label> Elapsed Time: <progress :value="progressRate"></progress> </label>
    <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
    <div>duration:<input type="range" v-model="duration" max="30000" min="1"/></div>
    <div>{{ (duration / 1000).toFixed(1) }}s</div>
    <button @click="reSet">Reset</button>
  </div>
</template>

<script>
export default {
  name: "MyTimer",
  data() {
    return {
      elapsed: 0,
      duration: 15 * 1000,
    };
  },
  created() {
    this.reSet();
  },
  computed: {
    progressRate() {
      return Math.min(this.elapsed / this.duration, 1);
    },
  },
  methods: {
    reSet() {
      this.elapsed = 0;
      this.lastTime = performance.now();
      this.update();
    },
    update() {
      this.elapsed = performance.now() - this.lastTime;
      if (this.elapsed >= this.duration) {
        cancelAnimationFrame(this.handle);
      } else {
        this.handle = requestAnimationFrame(this.update);
      }
    },
  },
};
</script>

<style scoped></style>
