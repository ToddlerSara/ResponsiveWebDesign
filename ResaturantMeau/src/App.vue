<script setup>
import HeadUp from '../src/components/HeadUp.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <HeadUp />
  <div id="app">
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
.body {
  position: relative;
}
</style>
