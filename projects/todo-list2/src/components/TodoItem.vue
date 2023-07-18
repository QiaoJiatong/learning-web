<template>
  <div class="todo-item">
    <input
      @click="clickHandler"
      class="box"
      type="checkbox"
      :id="item.id"
      check
    />
    <label :for="item.id" style="margin-top: 6px">{{ item.content }}</label>
    <div class="box">
      <el-date-picker
        v-model="item.time"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
    <el-button @click="showPopup" type="success" circle>完成</el-button>
    <div v-if="show" class="popup" @click="show = false;">{{ item.content + " " + new Date() }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: Object,
  },
  data() {
    return {
      show: false,
      timer:null
    };
  },
  emits: ["item-complete"],
  methods: {
    clickHandler() {
      this.$emit("item-complete");
    },
    showPopup() {
      // debugger
      this.show = false; 
      this.age = Math.round(new Date(this.item.time).getTime() - Date.now());
      console.log(this.age);
      this.timer=setTimeout(() => {
        this.show = true;
      }, this.age);
    }
  },
    beforeUnmount(){
      this.timer = null
     console.log('定时器清除');
    }
};
</script>

<style scoped>
.todo-item {
  padding-right: 20px;
  display: flex;
}

.popup {
  position: fixed;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: #d36767;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  z-index: 999;
}
.box {
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: block;
}
</style>
