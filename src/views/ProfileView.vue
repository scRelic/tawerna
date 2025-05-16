<script setup>
import {ref} from "vue";

import MainLayout from "@/layouts/MainLayout.vue";
import InfoComponent from "@/components/Profile/InfoComponent.vue";
import StatsComponent from "@/components/Profile/StatsComponent.vue";
import InventoryComponent from "@/components/Profile/InventoryComponent.vue";
import ModalWindowComponent from "@/components/ModalWindowComponent.vue";

const modal = ref(null);
const targetItem = ref({});
const openModal = (item) => {
  modal.value.openModal();
  targetItem.value = item;
};
</script>

<template>
  <MainLayout>
    <div class="wrapper-mainLayout profile-wrapper">
      <div class="flex flex-col gap-10">
        <InfoComponent />
        <StatsComponent />
      </div>
      <InventoryComponent @update:open-modal="openModal" />

      <ModalWindowComponent ref="modal">
        <div class="modal-wrapper">
          <h2 class="title">{{ targetItem?.name }}</h2>
          <div class="modal-content">
            <img class="img" :src="targetItem?.img" alt="sword" />
            <div class="w-full">
              <ul class="list">
                <li class="list-item">
                  Цена: <span class="list-item-value">{{ targetItem?.price }}</span>
                </li>
                <li class="list-item">
                  Редкость: <span class="list-item-value">{{ targetItem?.rarity }}</span>
                </li>
                <li class="list-item">
                  Тип: <span class="list-item-value">{{ targetItem?.type }}</span>
                </li>
                <li class="list-item">Локация: <span class="list-item-value">Forest</span></li>
                <li class="list-item">Уровень: <span class="list-item-value">4</span></li>
                <li class="list-item">Количество: <span class="list-item-value">1</span></li>
              </ul>
            </div>
          </div>
          <div class="bttns">
            <div class="bttn-buy" @click="buyItem(targetItem)">Buy</div>
            <div class="bttn-close" @click="modal.closeModal">Close</div>
          </div>
        </div>
      </ModalWindowComponent>
    </div>
  </MainLayout>
</template>

<style scoped>
.profile-wrapper {
  display: flex;
  gap: 40px;
  margin-top: 15px;
}

@media (max-width: 1200px) {
  .profile-wrapper {
    flex-direction: column;
  }
}

.modal-wrapper {
  border-radius: 18px;
  padding: 20px;
  background-color: #1c89c9;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  border: 1px solid rgb(0, 0, 0);
  color: #fff;
  width: 500px;
  min-height: 365px;
}

.modal-content {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.img {
  width: 180px;
  height: 180px;
}

.title {
  font-weight: 700;
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.list-item {
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
}

.list-item-value {
  font-weight: 700;
  color: #f3ad16;
  font-size: 16px;
  text-transform: uppercase;
}

.bttns {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bttn-buy {
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: #11be37;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.bttn-buy:hover {
  background-color: #0f9c2e;
}

.bttn-close {
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: #be3411;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.bttn-close:hover {
  background-color: rgb(146, 45, 20);
}

@media (max-width: 650px) {
  .modal-wrapper {
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-content {
    flex-direction: column;
    gap: 20px;
  }

  .list-item {
    font-size: 18px;
    text-align: center;
  }

  .title {
    font-size: 34px;
  }
}
</style>
