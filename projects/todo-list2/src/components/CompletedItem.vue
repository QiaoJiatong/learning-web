<template>
  <div>
    <input
      @click="clickHandler"
      type="checkbox"
      :id="item.id"
      checked
      class="box"
    />
    <label :for="item.id" style="text-decoration: line-through;">{{ item.content }}</label>
    <el-button  @click="del" type="danger" style="margin-left: 10px;" circle >
      <el-icon><Delete /></el-icon>
    </el-button>
  </div>
</template>

<script>

import { Delete } from '@element-plus/icons-vue'

export default {
  name: "CompletedItem",
  props: {
    item: Object,
  },
  data() {
    return {
      Delete
    }
  },
  emits: ["item-todo"],
  methods: {
    clickHandler() {
      this.$emit("item-todo");
    },
    del() {
      this.$emit("item-del");
    },
  },
};
</script>

<style scoped>
.box {
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
