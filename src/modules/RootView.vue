<template>
  <div class="container">
    <SideBar @close="toggleMenu" :isOpen="isMenuOpen" />
    <router-view class="container-view" />
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
.container-view {
  margin: auto auto auto 30px;
}
</style>
