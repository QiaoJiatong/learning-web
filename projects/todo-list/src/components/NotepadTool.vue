<template>
  <div style="display: flex;">
    <div>
      <textarea v-model="newItem" placeholder="请输入待办事件"></textarea>
      <button @click="addNewItem" style=" border-radius: 5px;">添加事件</button>
    </div>
    <fieldset>
      <legend>待办事件</legend>
      <todo-item
        v-for="(todoItem, index) in todoList"
        :key="todoItem.id"
        :item="todoItem"
        @item-complete="completeItem(index)"
      />
    </fieldset>
    <fieldset>
      <legend>已完成事件</legend>
      <completed-item
        v-for="(completedItem, index) in completedList"
        :key="completedItem.id"
        :item="completedItem"
        @item-todo="todoItem(index)"
        @item-del = del(index)
      />
    </fieldset>
  </div>
</template>
<script>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import CompletedItem from './CompletedItem.vue'

export default {
  name: 'NotepadTool',
  components: { TodoItem, CompletedItem },
  data() {
    return {
      todoList: [
        {
          id: Date.now(),
          content: '提醒我',
          time: new Date('2023-10-01')
        }
      ],
      completedList: [
        {
          id: Date.now(),
          content: ''
        }
      ],
      newItem: '',
      completedList: [],
      show: false,
      message: '',
      age: 10000,
      setTime: '设置时间',
      Time: false
    }
  },
  methods: {
    addNewItem() {
      const item = {
        id: Date.now(),
        content: this.newItem,
        time: null
      }
      this.todoList.push(item)
      this.newItem = ''
    },
    completeItem(index) {
      this.completedList.push(this.todoList[index])
      this.todoList.splice(index, 1)
    },
    todoItem(index) {
      this.todoList.push(this.completedList[index])
      this.completedList.splice(index, 1)
    },
    del(index){
      this.completedList.splice(index, 1)
    },
  }
}
</script>

<style scoped>
fieldset {
  width: 400px;
  height: 200px;
  margin: 30px;
  border-radius: 10px;
  background-color: rgb(125, 222, 148);
}

legend {
  text-align: center;
  background-color: rgb(135, 135, 232);
  padding: 2px;
  border-radius: 5px;
}


</style>
