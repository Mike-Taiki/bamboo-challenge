<script setup>
import { RouterLink } from "vue-router";

function close() {
  alert("closed");
}
</script>

<template>
  <aside class="sidebar">
    <section class="sidebar-heading">
      <section class="sidebar-heading__title">Menu</section>
      <button class="sidebar-heading__button" @click="close">x</button>
    </section>
    <nav class="navbar-menu">
      <ul class="navbar-list">
        <li class="navbar-list-item">
          <router-link to="/" class="navbar-list-item__link">Home</router-link>
        </li>
        <li class="navbar-list-item">
          <router-link to="/dashboard" class="navbar-list-item__link"
            >Dashboard</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  background-color: var(--soft-gray);
  font-family: Verdana, sans-serif;
}

.sidebar-heading {
  height: 50px;
  display: flex;
  background-color: var(--dark-gray);
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.sidebar-heading__title {
  padding-left: 10px;
  color: var(--white);
}

.sidebar-heading__button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  color: var(--white);
  padding: 15px;
  font-family: Verdana, sans-serif;
  font-size: 18px;
}

.sidebar-heading__button:hover {
  background-color: var(--medium-gray);
  color: #000;
}

.navbar-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-list-item__link {
  padding: 10px;
  border-bottom: 1px solid var(--medium-gray);
  display: block;
  text-decoration: none;
}

.router-link-exact-active {
  background: #4caf50;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}
</style>
