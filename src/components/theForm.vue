<script setup>
import { ref } from "vue";

const newTodo = ref("");
const activeTodos = ref([]);
const doneTodos = ref([]);

function addTodo() {
  console.log(newTodo.value);
  activeTodos.value.push({ content: newTodo.value, active: true, done: false });
}

function removeTodo(index) {
  activeTodos.value.splice(index, 1);
}

function removeDoneTodo(index) {
  doneTodos.value.splice(index, 1);
}

function toggleTodo(todo, index) {
  todo.active = !todo.active;
  if (!todo.active) {
    console.log("done", todo);
    todo.done = true;
    activeTodos.value.splice(index, 1);
    doneTodos.value.push(todo);
  } else {
    console.log("active", todo);
    todo.done = false;
    doneTodos.value.splice(index, 1);
    activeTodos.value.push(todo);
  }
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="addTodo()">
      <label class="form">New Todo</label>
      <input class="form" type="text" v-model="newTodo" placeholder="Enter text">
      <button class="form">Add Todo</button>
    </form>
    <ul>
      <li v-for="(todo, index) in activeTodos" :key="todo" class="todo_frame">
        <div class="todo">
          <input class="checkbox" type="checkbox" :checked="todo.done" @click="toggleTodo(todo, index)">
          <h3 :class="{ active: todo.active }" @click="toggleTodo(todo, index)">{{ todo.content }}</h3>
        </div>
        <button @click="removeTodo(index)" class="remove">X</button>
      </li>
    </ul>
    <ul>
      <li v-for="(todo, index) in doneTodos" :key="todo" class="todo_frame">
        <div class="todo">
          <input class="checkbox" type="checkbox" :checked="todo.done" @click="toggleTodo(todo, index)">
          <h3 :class="{ done: todo.done }" @click="toggleTodo(todo, index)">{{ todo.content }}</h3>
        </div>
        <button @click="removeDoneTodo(index)" class="remove">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.form {
  padding: 5px;
  margin: 10px;
}

.todo_frame {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
}

.todo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.remove {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #4c4c4c;
}
</style>
