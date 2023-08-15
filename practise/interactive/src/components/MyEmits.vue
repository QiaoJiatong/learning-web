<template>
  <child-comp @response="(msg) => childMsg = msg"></child-comp>
  <p>{{ childMsg }}</p>
</template>

<script>
import ChildComp from './ChildComp.js'
export default {
  name: "emits",
  components: {
    ChildComp,
  },
  data() {
    return {
      childMsg: "No child msg yet",
    };
  },
};
</script>
