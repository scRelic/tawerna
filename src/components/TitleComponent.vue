<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title-wrapper">
    <h1 class="title">{{ title }}</h1>
    <img class="title-icon" :src="icon" alt="icon" />
  </div>
</template>

<style scoped>
.title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
}

.title {
  color: #fff;
  font-size: 32px;
  font-weight: 600;
}

.title-icon {
  width: 40px;
  height: 40px;
}

@media (max-width: 460px) {
  .title {
    font-size: 28px;
  }

  .title-icon {
    width: 30px;
    height: 30px;
  }

  .title-wrapper {
    margin-bottom: 14px;
  }
}
</style>
