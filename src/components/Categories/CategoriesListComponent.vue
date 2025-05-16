<script setup>
import {ref} from "vue";
import CardCategoryComponent from "./CardCategoryComponent.vue";

import sword from "@/assets/icons/categories/sword.svg";
import bow from "@/assets/icons/categories/bow.svg";
import axe from "@/assets/icons/categories/axe.svg";
import crossbow from "@/assets/icons/categories/crossbow.svg";

const categories = ref([
  {
    name: "Swords",
    img: sword,
    description:
      "Forged from the light of dawn and the shadow of night, this sword is not just a weapon, but an extension of a warrior's will. Its blade, like a frozen river of silver, carries the reflections of ancient battles and unbreakable determination. Each curve of its steel tells a story of strength and grace, and every touch of its hilt evokes a sense of power and control.",
    nameUrl: "swords",
  },
  {
    name: "Axes",
    img: axe,
    description:
      "A faithful assistant and tireless worker. Each notch on its blade is a story of work done, each touch to the smooth shaft is a feeling of reliability and confidence. This axe is not just a tool, but an extension of the master's hand, capable of conquering wood and building the future.",
    nameUrl: "axes",
  },
  {
    name: "Bows",
    img: bow,
    description:
      "The flexible limbs of the bow spring with ease, ready to release a rapid flow of energy. It is light in the hand, like an extension of the shooter's will, allowing the arrow to be directed quickly and accurately to the target. Its simplicity conceals the dynamics and speed of the hunt.",
    nameUrl: "bows",
  },
  {
    name: "Crossbows",
    img: crossbow,
    description:
      "Combining wood and steel, gears and levers, the crossbow is a triumph of engineering in an elegant form. Its cocking mechanism conceals the power to send an arrow to its target with surgical precision. Its static beauty conceals the dynamics of the energy released.",
    nameUrl: "crossbows",
  },
]);
</script>

<template>
  <div class="global-container">
    <div class="categories-wrapper">
      <CardCategoryComponent v-for="category in categories" :key="category" :category="category" />
    </div>
  </div>
</template>

<style scoped>
.categories-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
