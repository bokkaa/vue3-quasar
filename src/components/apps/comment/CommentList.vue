<template>
  <q-list class="q-mt-lg bg-white" bordered separator>
    <CommentItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @delete="handleDeleteComment"
    />
  </q-list>
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import { deleteComment } from 'src/services';
import CommentItem from './CommentItem.vue';

const props = defineProps({
  postId: {
    type: String,
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['deleted']);

const { execute } = useAsyncState(deleteComment, null, {
  immediate: false,
  throwError: true,
  onSuccess: () => {
    emit('deleted');
  },
});

//commentItem.vue에서 emit된 commentId를 받음
const handleDeleteComment = async commentId => {
  if (confirm('해당 댓글을 삭제하시겠습니까?') === false) {
    return;
  }

  await execute(0, props.postId, commentId);
};
</script>

<style lang="scss" scoped>
</style>