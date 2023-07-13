<template>
  <div class="todo-item">
    <input @click="clickHandler" type="checkbox" :id="item.id" check class="box" />
    <label :for="item.id">{{ item.content }}</label>
    <input v-model="item.time" type="datetime-local" class="box" />
    <button @click="showPopup" class="box">完成</button>
    <div v-if="show" class="popup">{{ item.content + ' ' + item.time }}</div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  data() {
    return {
      show: false
    }
  },
  emits: ['item-complete'],
  methods: {
    clickHandler() {
      this.$emit('item-complete')
    },
    showPopup() {
      this.show = false
      this.age = Math.round(new Date(this.item.time).getTime() - Date.now())
      console.log(this.age)
      setTimeout(() => {
        this.show = true
      }, this.age)
    }
  }
}
</script>

<style scoped>
.todo-item {
  padding-right: 20px;
}

.popup {
  position: fixed;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
}
.box {
  margin-left: 10px;
}
</style>
