<script setup>
import { ref } from "vue";

const newTodo = ref("");
const activeTodos = ref([]);
const doneTodos = ref([]);
const starredTodos = ref([]);

function addTodo() {
  console.log(newTodo.value);
  activeTodos.value.push({ content: newTodo.value, active: true, done: false, starred: false });
}

function removeTodo(index) {
  activeTodos.value.splice(index, 1);
}

function removeDoneTodo(index) {
  doneTodos.value.splice(index, 1);
}

function starTodo(todo, index) {
  todo.starred = true;
  console.log("starred", todo);
  activeTodos.value.splice(index, 1);
  starredTodos.value.push(todo);
}

function unStarTodo(todo, index) {
  todo.starred = false;
  console.log(index);
  starredTodos.value.splice(index, 1);
  activeTodos.value.push(todo);

}

function toggleTodo(todo, index) {
  todo.active = !todo.active;
  if (!todo.active) {
    todo.done = true;
    console.log("done", todo);
    activeTodos.value.splice(index, 1);
    doneTodos.value.push(todo);
  } else {
    todo.done = false;
    console.log("active", todo);
    doneTodos.value.splice(index, 1);
    activeTodos.value.push(todo);
  }
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="addTodo()">
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
        <font-awesome-icon icon="fa-solid fa-star" @click="unStarTodo(todo, index)" class="icon" />
          <font-awesome-icon icon="fa-solid fa-xmark" @click="removeTodo(index)" class="icon" />
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
          <font-awesome-icon icon="fa-regular fa-star" @click="starTodo(todo, index)" class="icon" />
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
