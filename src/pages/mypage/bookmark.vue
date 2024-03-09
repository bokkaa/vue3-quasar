<template>
  <PostList :items="posts" />
</template>
 
 <script setup>
import { useAsyncState } from '@vueuse/core';
import PostList from 'src/components/apps/post/PostList.vue';
import { getUserBookmark } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import { ref } from 'vue';

const posts = ref([]);
const authStore = useAuthStore();

const { state: itmes } = useAsyncState(() =>
  getUserBookmark(authStore.uid).then(result => (posts.value = result)),
);
</script>
 
 <style lang="scss" scoped>
</style>