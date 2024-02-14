<template>
  <q-item class="bg-white q-pt-md" clickable :to="`/posts/${id}`">
    <q-item-section avatar top>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex items-center">
        <span>닉네임 &middot; &nbsp;3일 전</span>
        <q-chip class="q-ml-sm" dense color="primary" text-color="white">
          {{ category }}
        </q-chip>
      </div>
      <div class="text-h6 qmt-sm">{{ title }}</div>
      <div class="text-primary text-caption">
        <span v-for="tag in tags" :key="tag" class="q-mr-sm">#{{ tag }}</span>
      </div>
      <div class="text-grey-6 q-my-sm ellipsis-2-lines">{{ contents }}</div>
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon name="sym_o_visibility" :label="readCount" tooltip="조회수"/>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon name="sym_o_sms" :label="commentCount" tooltip="댓글수"/>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn flat dense class="full-width" @click.prevent>
              <PostIcon name="sym_o_favorite" :label="likeCount" tooltip="좋아요수"/>
            </q-btn>
          </div>
      </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn flat dense class="full-width" @click.prevent>
              <PostIcon name="sym_o_bookmark" :label="bookmarkCount" tooltip="북마크"/>
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import PostIcon from './PostIcon.vue';

//Composition API에서는 props를 정의할 때 definProps를 사용
//이 함수는 자동으로 props변수를 바인딩함. 
//때문에 props에 정의되어있는 변수는 위 template에서 : 를 붙일 필요가 없음
//위의 경우 label은 defineProps내에서 정의되지 않았기떄문에 :를 붙여야하고
//tooltip의 경우 props에 정의가 되어있어서 안해도된다.
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  readCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  bookmarkCount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
  },
  createTime: {
    type: Date,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  uid: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
</style>