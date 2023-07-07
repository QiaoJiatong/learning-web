<template>
  <div class="hello">
    <RedHead content="hello, world" />
    <RedHead content="hello, vue" />
  </div>
</template>

<script>
import RedHead from "./RedHead.vue";
export default {
  name: 'HelloWorld',
  components: { RedHead }
}
</script>

<style scoped></style>
