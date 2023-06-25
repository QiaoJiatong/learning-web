<template>
  <div class="hello">
    <h3>Helloworld</h3>
    <p>counter={{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <button @click="addClickHandle">增加</button>
    <button @click="addAsyncClickHandle">异步增加</button>
  </div>
</template>

<script>

import { mapGetters,mapMutations,mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  components: {
  },
  computed:{
    ...mapGetters(["getCounter"])
  },
  methods:{
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    addClickHandle(){
      //固定调用方式
      // this.$store.commit("addCounter",15)
      this.addCounter(15)
    },
    addAsyncClickHandle(){
      // this.$store.dispatch("asyncAddCounter")
      this.asyncAddCounter();
    }
  }
}
</script>

<style scoped>

</style>
