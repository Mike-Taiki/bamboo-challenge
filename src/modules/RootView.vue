<template>
  <div class="container">
    <SideBar @close="toggleMenu" :isOpen="isMenuOpen" />
    <router-view :class="isMenuOpen ? 'closed' : 'open'" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "RootView",
  components: {
    SideBar,
  },
  data() {
    return {
      isMenuOpen: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.closed {
  margin-left: 30px;
}

.open {
  margin-left: 315px;
}
</style>
