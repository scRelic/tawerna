<script setup>
import {onMounted, ref} from "vue";
import CardComponent from "./CardComponent.vue";
import db from "../../services/db.js";
import {useRoute} from "vue-router";

const route = useRoute();

const items = ref(db);

const emit = defineEmits(["update:open-modal"]);
const handleClick = (item) => {
  emit("update:open-modal", item);
};

const setCategory = () => {
  const nameCategory = route.params.nameCategory;

  switch (nameCategory) {
    case "bows":
      items.value = db.bows;
      break;
    case "crossbows":
      items.value = db.crossbows;
      break;
    case "axes":
      items.value = db.axes;
      break;
    case "swords":
      items.value = db.swords;
      break;
  }
};

onMounted(() => {
  setCategory();
});
</script>

<template>
  <div class="wrapper global-container">
    <CardComponent @click="handleClick(item)" v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px 14px;
  margin-bottom: 40px;
}
</style>
