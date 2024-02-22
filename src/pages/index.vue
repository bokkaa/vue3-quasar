<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="params.category" />
      <section class="col-7">
        <PostHeader v-model:sort="params.sort" />
        <PostList :items="items" />
        <q-btn
          v-if="isLoadMore"
          class="full-width q-mt-md"
          label="더보기"
          outline
          @click="loadMore"
        />
      </section>
      <PostRightBar
        class="col-3"
        @open-write-dialog="openWriteDialog"
        v-model:tags="params.tags"
      />
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
      v-model="postDialog"
      @complete="completeRegistrationPost"
    />
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import { ref, watch } from 'vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';
import { getPosts } from 'src/services';
import { useAsyncState } from '@vueuse/core';

const params = ref({
  category: null,
  tags: [],
  sort: 'createdAt',
  limit: 1,
});
const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true);
// useAsyncState(() => getPosts(params.value) / immeditate:true하거나 밑에 같이하거나
//위처럼하면 watch를 그대로 사용가능
const { execute } = useAsyncState(getPosts, [], {
  immediate: false,
  throwError: true,
  // result는 getposts의 반환값
  onSuccess: result => {
    if (start.value) {
      // concat() 배열에 다른 배열이나 값들을 이어붙여서 새로운 배열을 만듦, 원본 배열에 붙이는게아닌 추가될 때마다 새로운 배열을 만듦
      items.value = items.value.concat(result.items);
    } else {
      items.value = result.items;
    }
    isLoadMore.value = result.items.length >= params.value.limit;
    start.value = result.lastItem;
  },
});

watch(
  params,
  () => {
    start.value = null;
    execute(0, params.value);
  },
  {
    deep: true,
    immediate: true,
  },
);

// 새포스트 작성하기
const postDialog = ref(false);
const openWriteDialog = () => {
  postDialog.value = true;
};

const completeRegistrationPost = () => {
  postDialog.value = false;
  execute(0, params.value);
};

const loadMore = () => {
  //버튼을 누를때마다 start시작점을 업데이트시킴
  //즉 마지막문서
  // params.value값들을 가져오며 start를 params의 하위변수로 넣으면서 start값을 넣는다.
  execute(0, { ...params.value, start: start.value });
};
</script>

<style lang="scss" scoped>
</style>