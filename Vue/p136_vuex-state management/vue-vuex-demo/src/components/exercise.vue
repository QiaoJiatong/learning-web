<script>
let id = 0;
export default {
  name: "exercise",
  data() {
    return {
      newTodo: "",
      todos: [
        { id: id++, text: "learn HTML" },
        { id: id++, text: "learn css" },
        { id: id++, text: "learn javascript" },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removetodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>add Todo</button>
  </form>
  <ul v-for="todo in todos" :key="todo.id">
    <li>{{ todo.text }}</li>
    <button @click="removetodo(todo)">X</button>
  </ul>
</template>
<style scoped>
ul,form{
    display: flex;
}
</style>
