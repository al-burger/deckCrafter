<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <sideMenu />
      <MainLayout />
    </div>
    <myFooter />
  </div>
</template>
<script>
import MainLayout from "./components/MainLayout.vue";
import Navbar from "./components/navbar.vue";
import myFooter from "./components/myFooter.vue";
import sideMenu from "./components/sideMenu.vue";
export default {
  name: "navbar",
  components: {
    sideMenu,
    Navbar,
    MainLayout,
    myFooter
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: $main-grey;
  .main {
    display:flex
  }
}
</style>