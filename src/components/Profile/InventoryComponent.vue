<script setup>
import {onMounted, ref} from "vue";

import {useUserStore} from "@/stores/user";
const userStore = useUserStore();

const items = ref([]);

const emit = defineEmits(["update:open-modal"]);
const handleClick = (item) => {
  emit("update:open-modal", item);
};

onMounted(() => {
  items.value = userStore.inventory;
});
</script>

<template>
  <div class="inventory main-bg-color">
    <h2 class="inventory-title">Inventory</h2>
    <div>
      <div v-if="!items.length">
        <h2 class="text-[22px] text-red-600 text-center">There's nothing here.</h2>
      </div>

      <div v-else class="inventory-content">
        <div class="inventory-item" v-for="item in items" :key="item.id" @click="handleClick(item)" :class="item.rarity">
          <img class="item-image" :src="item.img" alt="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inventory {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  width: fit-content;
  padding: 20px;
  width: 100%;
  min-width: 500px;
  min-height: 200px;
}

.inventory-title {
  font-weight: 700;
  color: #ffffff;
  font-size: 36px;
  margin: 10px 0;
  text-align: center;
}

.inventory-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  overflow: auto;
  max-height: 500px;
}

.inventory-item {
  /* background-color: #ababb165; */

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #fff;
  padding: 10px;
  width: 100px;
  height: 100px;
}

.item-image {
  width: 100%;
  height: 100%;
}

/* Стилізація для WebKit (Chrome, Safari, Edge) */
.inventory-content::-webkit-scrollbar {
  width: 8px; /* Ширина скролбара */
  height: 8px; /* Висота скролбара (для горизонтального) */
}

.inventory-content::-webkit-scrollbar-thumb {
  background-color: #c205c9; /* Колір "бігунка" */
  border-radius: 4px; /* Заокруглення кутів "бігунка" */
}

.inventory-content::-webkit-scrollbar-track {
  background-color: #cc03d3; /* Колір "доріжки" */
  border-radius: 4px;
}

.inventory-content::-webkit-scrollbar-thumb:hover {
  background-color: #ff00dd; /* Колір "бігунка" при наведенні */
}

/* Стилізація для Firefox */
.inventory-content {
  scrollbar-width: thin; /* auto | thin | none */
  scrollbar-color: #ffffff #040824; /* thumb track */
}

@media (max-width: 550px) {
  .inventory {
    min-width: 0;
  }
}
</style>
