<script setup>
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div class="stats main-bg-color">
    <h2 class="stats-title">Statistics</h2>
    <ul class="stats-list">
      <li class="stats-item">
        <img class="w-6" src="@/assets/icons/market-purchase.svg" alt="market-purchase" /> Number of purchases: <span class="stats-item-value">{{ userStore.user.number_of_purchases }}</span>
      </li>
      <li class="stats-item">
        <img class="w-6" src="@/assets/icons/coin-receive.svg" alt="coin-receive" />Total spent: <span class="stats-item-value">{{ userStore.user.total_spent }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-radius: 12px;
  width: 100%;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.stats-title {
  font-weight: 700;
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
}

.stats-item {
  color: #ffffff;
  font-size: 20px;
  display: flex;
  gap: 10px;
  text-align: center;
}
</style>
