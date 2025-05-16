<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const rarity = ref(null);

const setRarityColor = (rarity) => {
  switch (rarity) {
    case "uncommon":
      return "uncommon";
    case "rare":
      return "rare";
    case "epic":
      return "epic";
    case "legendary":
      return "legendary";
    case "mythic":
      return "mythic";
  }
};

onMounted(() => {
  rarity.value = setRarityColor(props.item.rarity);
});
</script>

<template>
  <div class="card" :class="rarity">
    <div class="img-wrapper">
      <img class="img" :src="item.img" alt="sword" />
      <div class="img-decoration"></div>
    </div>
    <div class="flex flex-col items-center">
      <h2 class="title">{{ item.name }}</h2>
      <div class="price-wrapper">
        <img class="w-5" src="@/assets/icons/coin.svg" alt="coin" />
        <span class="price">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  min-width: 200px;
  min-height: 260px;
  border-radius: 12px;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}

.img-wrapper {
  position: relative;
  margin-bottom: 15px;
}

.img-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  margin: 5%;
  background-color: #ffffff4f;
  border-radius: 50%;
  z-index: 1;
}

.img {
  width: 80%;
  z-index: 5;
  position: relative;
  margin: 0 auto;
}

.title {
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin-bottom: 10px;
}

.price-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.price {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 18px;
  color: #fae20b;
}

.card-uncommon {
  background: #0d9919;
  background: linear-gradient(to bottom, #0d9919, #022505);
  border: 2px solid #0d9919;
}

.card-rare {
  background: #202de2;
  background: linear-gradient(to bottom, #0f48b1, #0a163b);
  border: 2px solid #4f1ffa;
}

.card-epic {
  background: #8704a1;
  background: linear-gradient(to bottom, #8704a1, #2a0431);
  border: 2px solid #af1dcc;
}

.card-legendary {
  background: #e6bd06;
  background: linear-gradient(to bottom, #e6bd06, rgb(62, 63, 3));
  border: 2px solid #e6bd06;
}

.card-mythic {
  background: #a11515;
  background: linear-gradient(to bottom, #da2525, #250606);
  border: 2px solid #a11515;
}
</style>
