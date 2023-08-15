<script>
let id = 0;
export default {
  name: "exercise",
  data() {
    return {
      newTodo: "",
      hidecompleted: false,
      todos: [
        { id: id++, text: "learn HTML", done: true },
        { id: id++, text: "learn css", done: true },
        { id: id++, text: "learn javascript", done: false },
      ],
    };
  },
  computed: {
    filteredtodos: function () {
      console.log("filterdtodos");
      return this.hidecompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos;
    },
  },
  methods: {
    addTodo() {
      console.log("addTodo");
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removetodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredtodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removetodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hidecompleted = !hidecompleted">
      {{ hidecompleted ? "show all" : "hide Completed" }}
    </button>
  </div>
</template>
<style scoped>
form,
li {
  display: flex;
}
.done {
  text-decoration: line-through;
}
</style>
