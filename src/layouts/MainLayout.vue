<script setup>
import HeaderComponent from "../components/Layouts/HeaderComponent.vue";
import FooterComponent from "../components/Layouts/FooterComponent.vue";
</script>

<template>
  <div class="flex">
    <!-- <TheLeftSideBar /> -->
    <div class="wrapper-layout w-full flex flex-col min-h-screen justify-between">
      <HeaderComponent />
      <slot></slot>
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.wrapper-layout {
  /* margin-left: 230px; */
}
</style>
