<template>
  <!-- <h1>{{ message }}</h1> -->
  <!-- <button @click="reverseMessage">ReverseMessage</button>
  <button @click="message += '!'">Append !</button>
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a> -->
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </p>
  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<script>
export default {
  name: "UserInput",
  data() {
    return {
      message: "Hello World",
      isRed: true,
      color: "green",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    notify() {
      alert("navigation was prevented.");
    },
    toggleRed() {
      this.isRed = !this.isRed;
    },
    toggleColor() {
      this.color = this.color === "green" ? "blue" : "green";
    },
  },
};
</script>
