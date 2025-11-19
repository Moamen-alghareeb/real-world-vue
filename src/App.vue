<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <div>
            <span class="logo">EFG</span>
          </div>
          <div>
            <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <!-- <h1>Events For Good</h1> -->
    <!-- new element -->
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
.logo {
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  font-weight: bold;
}
.logo {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
}
.logo:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
