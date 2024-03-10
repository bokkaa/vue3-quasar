<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="category" />
      <section class="col-7">
        <PostHeader v-model:sort="sort" />
        <PostListSkeleton v-if="isLoading" />
        <PostList :items="items" escapeHTML />
        <!-- <q-btn
          v-if="isLoadMore"
          class="full-width q-mt-md"
          label="더보기"
          outline
          @click="loadMore"
        /> -->
        <div v-intersection-observer="handleIntersectionOberver"></div>
      </section>
      <PostRightBar
        class="col-3"
        @open-write-dialog="openWriteDialog"
        v-model:tags="tags"
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
import { computed, ref, watch } from 'vue';
import { getPosts } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { vIntersectionObserver } from '@vueuse/components';
import { usePostQuery } from 'src/composables/userPostQuery';
import { useAuthStore } from 'src/stores/auth';

import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';
import PostListSkeleton from 'src/components/skeletons/PostListSkeleton.vue';

const { category, sort, tags } = usePostQuery();
// category가 변경되면 다시 대입할려면 computed를 사용
const params = computed(() => ({
  category: category.value,
  tags: tags.value,
  sort: sort.value,
  limit: 6,
}));
const authStore = useAuthStore();
const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true);
// useAsyncState(() => getPosts(params.value) / immeditate:true하거나 밑에 같이하거나
//위처럼하면 watch를 그대로 사용가능
const { execute, isLoading } = useAsyncState(getPosts, [], {
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
    // 중복으로 읽어오는 거 방지하기 위해 주석
    // immediate: true,
  },
);

// 새포스트 작성하기
const postDialog = ref(false);
const openWriteDialog = () => {
  if (!authStore.isAuthenticated) {
    alert('로그인이 필요합니다.');
    return;
  }
  postDialog.value = true;
};

const completeRegistrationPost = () => {
  postDialog.value = false;
  start.value = null;
  execute(0, params.value);
};

//** 일반적인 intersetionObserver
// beforMount - 요소가 돔에 삽입되기 직전에 작동되는 메소드
//vue 디렉티브를 사용할 때 동작에 필요한 매개변수 el, binding
// el : 디렉티브가 바인딩된 요소
// binding: 디렉티브의 바인딩 객체
// const vIntersectionObserver = {
//   beforeMount: (el, binding) => {
//     const observer = new IntersectionObserver(binding.value);
//     observer.observe(el);
//   },
// };

//([{ isIntersecting }]) 배열 디스트럭처링 구문
//콜백함수로 전달되는 엔트리 배열에서 첫 번째 엔트리에 접근할 수 있게 해준다.
//따라서 첫 번째 엔트리의 inIntersecting 속성을 가져온다.
const handleIntersectionOberver = ([{ isIntersecting }]) => {
  //화면에 보일 때
  if (isIntersecting && isLoadMore.value) {
    console.log('### handleIntersectionOberver ###');
    loadMore();
  }
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