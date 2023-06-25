<template>
  <div class="hello">
    <p>{{ message }}</p>
  </div>
</template>

<script>

import { inject, onMounted } from 'vue';

export default {
  name: 'HelloWorld',
  setup() {

    onMounted(() =>{
      console.log("我是生命周期函数：onMounted1 ");
    })
    onMounted(() =>{
      console.log("我是生命周期函数：onMounted2 ");
    })


    const message = inject("message");
    return {
      message
    }
  }

}
</script>

<style scoped></style>
