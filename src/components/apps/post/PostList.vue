<template>
  <q-list bordered separator>
    <PostItem v-for="item in items" :key="item.id" :item="item" />
  </q-list>
</template>

<script setup>
import PostItem from './PostItem.vue';

// 받아온 props 데이터 정의
defineProps({
  items: Array,
  // 기본값 빈 배열
  default: () => [],
});
</script>

<style lang="scss" scoped>
</style>