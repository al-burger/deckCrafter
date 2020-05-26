<template>
  <div id="app">
    <Navbar />
    <MainLayout/>
    <myFooter />
  </div>
</template>
<script>
import MainLayout from './components/MainLayout.vue'
import Navbar from './components/navbar.vue';  
import myFooter from './components/myFooter.vue'
  export default {
    name: 'navbar',
    components: {
      Navbar,
      MainLayout,
      myFooter
    }
  }
</script>

<style lang="scss" scoped>
#app {
  background-color:$main-grey
}
</style>