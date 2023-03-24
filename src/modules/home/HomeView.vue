<script setup>
import SideBar from "./components/SideBar.vue";
</script>
<template>
  <div class="grid">
    <div class="left">
      <SideBar />
    </div>
    <div class="right">
      <nav class="navbar">navbar</nav>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 300px 900px;
}

.navbar {
  height: 50px;
}
</style>
