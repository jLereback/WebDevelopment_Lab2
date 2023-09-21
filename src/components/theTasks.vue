<script setup>
import { ref } from "vue";

const newTodo = ref("");
const activeTodos = ref(JSON.parse(localStorage.getItem("active")) || []);
const doneTodos = ref(JSON.parse(localStorage.getItem("done")) || []);
const starredTodos = ref(JSON.parse(localStorage.getItem("starred")) || []);

function addTodo() {
  if (newTodo.value === "") return;
  activeTodos.value.push({ content: newTodo.value, active: true, done: false, starred: false });
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("active", JSON.stringify(activeTodos.value));
  localStorage.setItem("done", JSON.stringify(doneTodos.value));
  localStorage.setItem("starred", JSON.stringify(starredTodos.value));
}

function removeTodo(index) {
  activeTodos.value.splice(index, 1);
  updateLocalStorage();
}

function removeDoneTodo(index) {
  doneTodos.value.splice(index, 1);
  updateLocalStorage();
}

function removeStarredTodo(index) {
  starredTodos.value.splice(index, 1);
  updateLocalStorage();
}

function starTodo(todo, index) {
  todo.starred = true;
  activeTodos.value.splice(index, 1);
  starredTodos.value.push(todo);
  updateLocalStorage();
}

function unStarTodo(todo, index) {
  todo.starred = false;
  starredTodos.value.splice(index, 1);
  activeTodos.value.push(todo);
  updateLocalStorage();
}

function toggleTodo(todo, index) {
  todo.active = !todo.active;
  if (!todo.active) {
    todo.done = true;
    if (todo.starred === true) {
      todo.starred = false;
      starredTodos.value.splice(index, 1);
    } else {
      activeTodos.value.splice(index, 1);
    }
    doneTodos.value.push(todo);
    updateLocalStorage()
  } else {
    todo.done = false;
    doneTodos.value.splice(index, 1);
    activeTodos.value.push(todo);
    updateLocalStorage();
  }
}
</script>

<template>
  <div class="container">
    <form @submit="addTodo()">
      <input class="form" type="text" v-model="newTodo" placeholder="Enter text">
      <button class="form">Add Todo</button>
    </form>
    <ul>
      <li v-for="(todo, index) in starredTodos" :key="todo" class="todo_frame">
        <div class="todo">
          <input class="checkbox" type="checkbox" :checked="todo.done" @click="toggleTodo(todo, index)">
          <h3 :class="{ starred: todo.starred }" @click="toggleTodo(todo, index)">{{ todo.content }}</h3>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-star" @click="unStarTodo(todo, index)" class="icon star" />
          <font-awesome-icon icon="fa-solid fa-xmark" @click="removeStarredTodo(index)" class="icon" />
        </div>
      </li>
    </ul>
    <ul>
      <li v-for="(todo, index) in activeTodos" :key="todo" class="todo_frame">
        <div class="todo">
          <input class="checkbox" type="checkbox" :checked="todo.done" @click="toggleTodo(todo, index)">
          <h3 :class="{ active: todo.active }" @click="toggleTodo(todo, index)">{{ todo.content }}</h3>
        </div>
        <div>
          <font-awesome-icon icon="fa-regular fa-star" @click="starTodo(todo, index)" class="icon star" />
          <font-awesome-icon icon="fa-solid fa-xmark" @click="removeTodo(index)" class="icon" />
        </div>
      </li>
    </ul>
    <ul>
      <li v-for="(todo, index) in doneTodos" :key="todo" class="todo_frame">
        <div class="todo">
          <input class="checkbox" type="checkbox" :checked="todo.done" @click="toggleTodo(todo, index)">
          <h3 :class="{ done: todo.done }" @click="toggleTodo(todo, index)">{{ todo.content }}</h3>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-xmark" @click="removeDoneTodo(index)" class="icon" />
        </div>
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
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;
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
}

.todo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  margin-right: 10px;
  cursor: pointer;
  display: none;
}

.icon {
  margin-left: 10px;
  cursor: pointer;
}

.star {
  margin-left: 7px;
  padding-right: 5px;
}

.done {
  text-decoration: line-through;
  color: #4c4c4c;
}

@media screen and (min-width: 500px) {
  ul {
    width: 400px;
    padding: 0;
  }
}

@media screen and (min-width: 600px) {
  ul {
    width: 500px;
    padding: 0;
  }
}

@media screen and (min-width: 800px) {
  ul {
    width: 700px;
    padding: 0;
  }
}

@media screen and (min-width: 1000px) {
  ul {
    width: 900px;
    padding: 0;
  }
}

@media screen and (min-width: 1200px) {
  ul {
    width: 1100px;
    padding: 0;
  }
}
</style>
