<script setup>
import {onMounted, ref} from "vue";

import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";

import {useUserStore} from "@/stores/user";
const userStore = useUserStore();

const name = ref("");
const email = ref("");
const password = ref("");

const visiblePassword = ref(false);
const isEdit = ref(false);

const saveChanges = () => {
  isEdit.value = false;
  userStore.saveChangesProfile({name: name.value, email: email.value, password: password.value});
};

const chengeIsEdit = () => {
  isEdit.value = !isEdit.value;
};

onMounted(() => {
  name.value = userStore.user.name;
  email.value = userStore.user.email;
  password.value = userStore.user.password;
});
</script>

<template>
  <div class="info main-bg-color">
    <div class="info-bttn-edit" v-if="!isEdit">
      <img @click="chengeIsEdit" class="w-6 cursor-pointer hover:opacity-50 transition" src="@/assets/icons/pencil.svg" alt="pencil" />
    </div>
    <div class="w-[90%]">
      <swiper :slides-per-view="1" v-if="isEdit">
        <swiper-slide><img class="info-avatar" src="@/assets/images/avatars/avatar-1.svg" alt="avatar" /></swiper-slide>
        <swiper-slide><img class="info-avatar" src="@/assets/images/avatars/avatar-muslim-paranja.svg" alt="avatar" /></swiper-slide>
        <swiper-slide><img class="info-avatar" src="@/assets/images/avatars/anime-away-face.svg" alt="avatar" /></swiper-slide>
        <swiper-slide><img class="info-avatar" src="@/assets/images/avatars/animal-avatar-bear.svg" alt="avatar" /></swiper-slide>
        <swiper-slide><img class="info-avatar" src="@/assets/images/avatars/avatar-bug-insect.svg" alt="avatar" /></swiper-slide>
      </swiper>
      <div v-else>
        <img class="info-avatar" src="@/assets/images/avatars/avatar-1.svg" alt="avatar" />
      </div>
    </div>

    <div class="info-container">
      <div class="w-full">
        <div v-if="!isEdit" class="info-name">
          <img class="w-5" src="@/assets/icons/name.svg" alt="name" />
          <h2 class="info-name-text">{{ name }}</h2>
        </div>
        <div v-else>
          <span class="text-white">Name</span>
          <input class="info-input" v-model="name" placeholder="Name" type="text" />
        </div>
      </div>
      <div class="w-full">
        <div v-if="!isEdit" class="info-email">
          <img class="w-6" src="@/assets/icons/email.svg" alt="email" />
          <p class="info-email-text">{{ email }}</p>
        </div>
        <div v-else>
          <span class="text-white">Email</span>
          <input class="info-input" v-model="email" placeholder="random@email.com" type="email" />
        </div>
      </div>
      <div class="w-full">
        <div v-if="!isEdit" class="info-pass">
          <img @click="visiblePassword = !visiblePassword" class="w-6 cursor-pointer" src="@/assets/icons/password-lock.svg" alt="password-lock" />
          <p class="info-pass-text">{{ visiblePassword ? password : "***********" }}</p>
        </div>
        <div v-else>
          <span class="text-white">Password</span>
          <input class="info-input" v-model="password" placeholder="***********" type="text" />
        </div>
      </div>

      <div v-if="isEdit" @click="saveChanges" class="info-bttn-save">Save changes</div>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  width: 600px;
  position: relative;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 12px;
}

.info-bttn-edit {
  position: absolute;
  top: 20px;
  right: 20px;
}

.info-avatar {
  width: 160px;
  height: 160px;
  margin: auto;
}

.info-name {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.info-name-text {
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  overflow-wrap: break-word;
  width: 100%;
}

.info-email {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.info-email-text {
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  overflow-wrap: break-word;
  width: 100%;
}

.info-pass {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.info-pass-text {
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  overflow-wrap: break-word;
  width: 100%;
}

.info-input {
  width: 100%;
  height: 36px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 10px 14px;
  outline: none;
  margin-bottom: 10px;
  background: transparent;
  margin-top: 5px;
  color: #fff;
}

.info-input::placeholder {
  color: #afafaf;
}

.info-bttn-save {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #17af09;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.info-bttn-save:hover {
  background-color: #0f8b06;
}

@media (max-width: 1200px) {
  .info {
    width: 100%;
  }
}
</style>
