<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">
      댓글 6
      <q-form @submit.prevent="handleAddComment">
        <div v-if="isActive">
          <q-input
            type="textarea"
            outlined
            hide-bottom-space
            v-model="message"
            :rules="[validateRequired]"
          />
          <div class="flex justify-end q-gutter-x-sm q-mt-sm">
            <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
            <q-btn
              type="submit"
              label="등록"
              color="primary"
              unelevated
              :loading="isLoading"
            />
          </div>
        </div>
      </q-form>
    </div>
    <BaseCard class="cursor-pointer" v-if="!isActive" @click="toggleActive">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>

    <CommentList
      :items="comments"
      :post-id="$route.params.id"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import { addComment, getComments, deleteComment } from 'src/services';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { validateRequired } from 'src/utils/validate-rules';

const Sq = useQuasar();
const authStore = useAuthStore();
const route = useRoute();
const isActive = ref(false);
const toggleActive = () => {
  if (!isActive.value && !authStore.isAuthenticated) {
    alert('로그인이 필요합니다.');
    return;
  }
  isActive.value = !isActive.value;
};

const { state: comments, execute: executeGetComments } = useAsyncState(
  () => getComments(route.params.id),
  [],
  {
    // default값은 true
    // 즉 중간에 초기화했다가 데이터를 삽입함
    // false로 해놓으면 초기값인 []을 다시 초기화하지 않는다.
    // 즉 새로운 데이터만 추가된다.
    resetOnExecute: false,
  },
);
const message = ref('');
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      message.value = '';
      isActive.value = false;
      executeGetComments(0);
    },
  },
);
const handleAddComment = () =>
  executeAddComment(0, route.params.id, {
    message: message.value,
    uid: authStore.uid,
  });

const deletedComment = () => executeGetComments(0);
</script>

<style lang="scss" scoped>
</style>