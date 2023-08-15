<template>
  <div>
    <child ref="childRef" v-if="showChild" :name="childName" />
    <button @click="changeName">改名字</button>
    <button @click="showChild = !showChild">show child</button>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "LifeCycle",
  components: { Child },
  data() {
    return {
      childName: "Joe",
      showChild: true,
    };
  },
  methods: {
    changeName() {
      this.childName = "Jack";
    },
  },
  beforeCreate() {
    console.log("father before create");
  },
  created() {
    console.log("father created");
  },
  beforeMount() {
    console.log("father beforeMount");
  },
  mounted() {
    console.log("father mounted");
    console.log('child age: ', this.$refs.childRef.getAge());
  },
  beforeUpdate() {
    console.log("father beforeUpdate");
  },
  updated() {
    console.log("father updated");
  },
  beforeUnmount() {
    console.log("father beforeUnmount");
  },
  unmounted() {
    console.log("father unmounted");
  },
};
</script>
