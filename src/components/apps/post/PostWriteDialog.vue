<template>
  <!-- persistent 영역밖을 클릭해도 창이 닫히지않음 -->
  <!-- fallthrough 속성을 명시적으로 나타내기 위해 $attrs 사용 -->
  <!-- 트랜지션효과를 삭제할려면 q-dialog 태그에 transition-show="none" transition-hide="none"-->
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ minWidth: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />

      <!-- 자식컴포넌트로부터 emit된 submit을 @submit으로 가져오며
      execute()를 실행한다 -->
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit="
          execute(1000, {
            ...form,
            uid: authStore.uid,
          })
        "
        :loading="isLoading"
      />
      <q-separator />
    </q-card>
  </q-dialog>
</template>


<!-- inheriAttrs:false를 사용하면 fallthrough속성을 막을 수 있다.-->
<!-- <script>
export default {
    inheritAttrs: false
}
</script> -->

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
import PostForm from './PostForm.vue';
import { createPost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const emit = defineEmits(['complete']);

const router = useRouter();
const form = ref(getInitialForm());
const authStore = useAuthStore();
const onHide = () => {
  form.value = getInitialForm();
};

const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  // execute() 두번째 인자에서 받아오는 매개변수가 해당 onSuccess로 반환
  onSuccess: postId => {
    console.log('postId :', postId);
    // router.push(`/posts/${postId}`);
    emit('complete');
  },
});

//글로벌 에러를 터뜨릴려면 async await 또는 {} 삭제, 즉 한 줄 표현식 사용
// const handleSubmit = async () => {
//   await execute(1000, {
//     ...form.value, //전개구문으로 form에 있는 값들을 뿌려주고 uid값을 사용
//     uid: authStore.uid,
//   });
// };
</script>


<style lang="scss" scoped>
</style>