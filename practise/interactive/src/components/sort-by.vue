<template></template>

<script>
export default {
  name: "SortBy",
  data() {
    return {
      nums: [],
      newNum: "",
    };
  },
  methods: {
    addNum() {
      this.nums.push(this.newNum);
      this.newNum = "";
    },
  },
};
</script>
