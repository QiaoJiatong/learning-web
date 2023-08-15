<script>
export default {
  name: " HelloWorld",
  data() {
    return {
      msg: "",
      count: 0,
      show: true,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<template>
  <p v-if="show">你好</p>
  <p v-else>你是谁</p>
  <button @click="toggle">toggle</button>
  <input v-model="msg" />
  <h3>{{ msg }}</h3>
  <button @click="increment">count is:{{ count }}</button>
</template>

<style scoped></style>
