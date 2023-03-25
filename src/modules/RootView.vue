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
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1199px) {
  .container-view {
    margin-left: 30px;
  }
}
</style>
