<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <!-- posts데이터를 items라는 이름으로 props (자식 컴포넌트로 방출) -->
      <PostList :items="posts" />
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';

const router = useRouter();
const goPostDetails = id => {
  // router.push(`/posts/${id}`);
};

// 더미데이터
const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  title: 'vue3 FireBase 강의' + index,
  contents:
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam eaqueaspernatur quos explicabo expedita recusandae. Harum, exercitationemimpedit reiciendis, corrupti sequi quisquam magnam, non alias modi in abnatus?',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리' + index,
}));
</script>

<style lang="scss" scoped>
</style>