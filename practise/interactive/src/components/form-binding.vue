<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "FormBinding",
  data() {
    return {
      text: ''
    };
  },
  methods: {
    onInput(e) {
      this.text = e.target.value;
    },
  },
};
</script>
