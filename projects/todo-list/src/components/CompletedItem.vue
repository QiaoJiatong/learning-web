<template>
  <div>
    <input @click="clickHandler" type="checkbox" :id="item.id" checked class="box" />
    <label :for="item.id">{{ item.content }}</label>
    <button @click="del" class="box">删除</button>
  </div>
</template>

<script>
export default {
  name: 'CompletedItem',
  props: {
    item: Object
  },
  emits: ['item-todo'],
  methods: {
    clickHandler() {
      this.$emit('item-todo')
    },
    del() {
        this.$emit('item-del')
    }
  }
}
</script>

<style scoped>

.box{
    margin-left: 10px;
}

</style>
