<template>
  <div style="display: flex;">
    <div>
      <textarea v-model="newItem" placeholder="请输入待办事件"></textarea>
      <button @click="addNewItem">添加事件</button>
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
        :key="completedList.id"
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
    // clickHandle1(index) {
    //   this.show = false
    //   this.completedList.push(this.todoList[index])
    //   this.todoList.splice(index, 1)
    // },
    // clickHandle2(index) {
    //   this.todoList.push(this.completedList[index])
    //   this.completedList.splice(index, 1)
    // },
    // clickHandle3(index) {
    //   if (this.setTime === '设置时间') {
    //     this.Time = true
    //     this.setTime = '提交'
    //   } else if (this.setTime === '提交') {
    //     this.showPopup(index)
    //     this.setTime = '隐藏'
    //   }
    // },
    // clickHandle4() {
    //   this.setTime = '提交'
    // },
    showPopup(index) {
      this.show = false
      this.age = Math.round(new Date(this.AgreedDate).getTime() - Date.now())
      console.log(this.age)
      setTimeout(() => {
        this.show = true
      }, this.age)
    }
  }
}
</script>

<style scoped>
fieldset {
  width: 400px;
  height: 200px;
  margin: 30px;
}

legend {
  text-align: center;
  background-color: rgb(135, 135, 232);
  padding: 2px;
}


</style>
