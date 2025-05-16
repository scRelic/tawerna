<script setup>
import {ref} from "vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-left">
        <!-- <img class="header-burger" src="@/assets/icons/burger-menu.svg" alt="burger menu" /> -->
        <router-link to="/">
          <h1 class="header-logo">Tawerna Shop</h1>
        </router-link>
      </div>

      <div class="header-right">
        <div class="flex items-center gap-2 header-balance-wrapper">
          <img class="w-6" src="@/assets/icons/coin.svg" alt="coin" />
          <span class="header-balance">{{ userStore.user.balance }}</span>
        </div>
        <router-link to="/profile">
          <img class="header-avatar" src="@/assets/images/avatars/avatar-1.svg" alt="avatar" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 10px 0;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 30px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* .header-burger {
  width: 34px;
  height: 34px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.header-burger:hover {
  transform: scale(1.1);
} */

.header-logo {
  font-size: 36px;
  font-weight: 700;
  color: #1c89c9;
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.header-avatar {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.header-avatar:hover {
  transform: scale(1.1);
}

.header-balance {
  font-size: 24px;
  font-weight: 700;
  color: rgb(221, 183, 59);
}

@media (max-width: 590px) {
  .header-balance-wrapper {
    display: none;
  }
}

@media (max-width: 440px) {
  .header-logo {
    font-size: 28px;
  }

  .header-avatar {
    width: 44px;
    height: 44px;
  }
}
</style>
