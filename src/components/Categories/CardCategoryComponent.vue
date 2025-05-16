<script setup>
import {ref} from "vue";

defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/products/${category.nameUrl}`">
    <div class="card-wrapper">
      <img class="card-img" :src="category.img" alt="sword" />
      <div class="card-content">
        <h2 class="card-title">{{ category.name }}</h2>
        <p class="card-description">{{ category.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card-wrapper {
  background-color: #1c89c9;
  color: #ffffff;
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  gap: 26px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-wrapper:hover {
  background-color: #1e6c99;
}

.card-img {
  width: 100px;
  height: 100px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 16px;
  line-height: 30px;
  color: #ebe8e8;
}

@media (max-width: 660px) {
  .card-wrapper {
    flex-direction: column;
    gap: 14px;
    padding: 14px 16px;
  }

  .card-title {
    text-align: center;
  }
}
</style>
