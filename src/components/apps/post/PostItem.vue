<template>
  <q-item class="bg-white q-pt-md" clickable :to="`/posts/${item.id}`">
    <q-item-section avatar top>
      <q-avatar>
        <img :src="postUser?.photoURL" alt="" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span>{{ postUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span>{{ formatRelativeTime(item.createdAt) }}</span>
        <q-chip class="q-ml-sm" dense color="primary" text-color="white">
          {{ item.category }}
        </q-chip>
      </div>
      <div class="text-h6 qmt-sm">{{ item.title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in item.tags" :key="tag" class="q-mr-sm"
          >#{{ tag }}</span
        >
      </div>
      <div class="text-grey-6 q-my-sm ellipsis-2-lines">
        {{ item.content }}
      </div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_visibility"
              :label="item.readCount"
              tooltip="조회수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_sms"
              :label="item.commentCount"
              tooltip="댓글수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn flat dense class="full-width" @click.prevent="toggleLike">
              <PostIcon
                :name="isLike ? 'favorite' : 'sym_o_favorite'"
                :label="likeCount"
                tooltip="좋아요수"
              />
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn
              flat
              dense
              class="full-width"
              @click.prevent="toggleBookmark"
            >
              <PostIcon
                :name="isBookmark ? 'bookmark' : 'sym_o_bookmark'"
                :label="bookmarkCount"
                tooltip="북마크"
              />
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import PostIcon from './PostIcon.vue';
import { formatRelativeTime } from 'src/utils/relative-time-format';
import { useLike } from 'src/composables/useLike';
import { useBookmark } from 'src/composables/useBookmark';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { useAsyncState } from '@vueuse/core';
import { getUserById } from 'src/services';

//Composition API에서는 props를 정의할 때 definProps를 사용
//이 함수는 자동으로 props변수를 바인딩함.
//때문에 props에 정의되어있는 변수는 위 template에서 : 를 붙일 필요가 없음
//위의 경우 label은 defineProps내에서 정의되지 않았기떄문에 :를 붙여야하고
//tooltip의 경우 props에 정의가 되어있어서 안해도된다.
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const { uid, isAuthenticated } = storeToRefs(useAuthStore());

const { isLike, likeCount, toggleLike } = useLike(props.item.id, {
  initialCount: props.item.likeCount,
});

const { isBookmark, bookmarkCount, toggleBookmark } = useBookmark(
  props.item.id,
  {
    initialCount: props.item.bookmarkCount,
  },
);

const { state: postUser } = useAsyncState(
  () => getUserById(props.item.uid),
  {},
);
</script>

<style lang="scss" scoped>
</style>