<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import CategoriesListComponent from "@/components/Categories/CategoriesListComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

import categoryIcon from "@/assets/icons/category-icon.svg";
</script>

<template>
  <MainLayout>
    <div class="wrapper-mainLayout">
      <TitleComponent :title="'Categories'" :icon="categoryIcon" />
      <CategoriesListComponent />
    </div>
  </MainLayout>
</template>

<style scoped></style>
