<template>
  <div>I am {{ name }}</div>
  <div>My age is {{ age }}</div>
  <button ref="buttonRef" @click="changeAge" class="word-red">改年龄</button>
</template>

<script>
export default {
  name: "child",
  props: {
    name: String,
  },
  data() {
    console.log("data");
    return {
      age: 18,
    };
  },
  methods: {
    changeAge() {
      this.age = 19;
    },
    getAge() {
      return this.age;
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    console.log(this.$refs.buttonRef);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
