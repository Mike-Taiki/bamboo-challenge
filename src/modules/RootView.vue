<template>
  <div class="wrapper">
    <SideBar @close="toggleMenu" :isOpen="isMenuOpen" />
    <button class="button-lines" @click="toggleMenu">
      <div
        class="lines-wrapper__menu"
        v-for="(item, key) in 3"
        :key="key"
      ></div>
    </button>
    <router-view />
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
      isMenuOpen: false,
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
@keyframes close {
  to {
    margin-left: 0;
  }
}

@keyframes open {
  to {
    margin-left: 315px;
  }
}
.content--animation-close {
  animation-name: close;
  animation-duration: 0.6s;
}

.content--animation-open {
  animation-name: open;
  animation-duration: 0.6s;
}

.button-lines {
  margin-left: 300px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.lines-wrapper__menu {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
</style>
