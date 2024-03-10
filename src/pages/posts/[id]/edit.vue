<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>
      <!-- 양방향 다중 모델  : 사용-->
      <PostForm
        @submit="hadnleSubmit"
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn
            type="submit"
            flat
            label="수정"
            color="primary"
            :loading="isLoading"
          />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>



<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>

<script setup>
import { ref } from 'vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import PostForm from 'src/components/apps/post/PostForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { getPost, updatePost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useQuasar } from 'quasar';

const router = useRouter();
const route = useRoute();
const Sq = useQuasar();
const form = ref(getInitialForm());

useAsyncState(
  () => getPost(route.params.id),
  {},
  {
    onSuccess: post => {
      form.value.title = post.title;
      form.value.category = post.category;
      form.value.content = post.content;
      form.value.tags = post.tags;
    },
  },
);

const { isLoading, execute: executeUpdatePost } = useAsyncState(
  updatePost,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      Sq.notify('수정완료');
    },
  },
);
const hadnleSubmit = async () => {
  if (confirm('수정을 완료하시겠습니까?') === false) {
    return;
  }
  await executeUpdatePost(1000, route.params.id, form.value);
  router.push(`/posts/${route.params.id}`);
};
</script>


<style lang="scss" scoped>
</style>
<route lang="yaml">
meta:
  width: 800px
</route>