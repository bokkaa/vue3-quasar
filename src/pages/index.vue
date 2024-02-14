<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>

    <!-- **컴포넌트***에 v-model로 혹은 :model-value, @update:model-value 바인딩하면 해당 컴포넌의 루트 태그에 까지 상속된다. -->
    <!-- 즉 PostWriteDialog.vue에 q-dialog 태그에 상속됨 q-dialog에는 명시적으로 선언되지 않음 =>명시적으로 나타내기위해 자식컴포넌트 루트태그에 v-bind="$attrs"-->
    <!-- 이것을 Fallthrough라고 한다. -->
    <!-- script setup에 프롭스와 에밋이 선언하지 않아도 된다. -->
    <!-- 둘중하나 사용하면됨 -->
    <!-- <PostWriteDialog 
    v-model="postDialog"
    /> -->
    <PostWriteDialog 
    :model-value="postDialog" 
    @update:model-value="val => (postDialog = val)"
    />

  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import { ref } from 'vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';

const router = useRouter();
const goPostDetails = id => {
  // router.push(`/posts/${id}`);
};

// 더미데이터
const posts = Array.from(Array(20), (_, index) => ({
  id: 'A'+index,
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

// 새포스트 작성하기
const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
}
</script>

<style lang="scss" scoped>
</style>