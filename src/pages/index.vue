<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" />
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';

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