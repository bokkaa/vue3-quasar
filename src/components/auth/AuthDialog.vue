<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <!-- @hide // 기본값을 SignInForm으로 설정한다. -->

    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <!-- v-close-popup 아이콘 클릭시 닫힘 속성 -->
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- v-if를 활용한 조건부 렌더링 -v1-->
        <!-- 자식 컴포넌트에서 보낸(emit) changeView를 change-view로 받아오된다. changeView도 상관없음 -->
        <!-- <SignInForm
          v-if="viewMode === 'SignInForm'"
          @change-view="changeViewMode"
        />
        <SignUpForm
          v-else-if="viewMode === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" /> -->

        <!-- 동적 컴포넌트 -->
        <!-- props로 나타내기 :is -->
        <!-- 관리하기 위하여 authViewComponents[viewMode]-->
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import SignInForm from './SignInForm.vue';
// import SignUpForm from './SignUpForm.vue';
// import FindPasswordForm from './FindPasswordForm.vue';
import { defineAsyncComponent, ref } from 'vue';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm'); // SignInForm, SignUpForm, FindPasswordForm
const changeViewMode = mode => {
  viewMode.value = mode;
};

// //동적 컴포넌트 -v1
// const authViewComponents = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// };

// Lazy로딩 - 즉, 아직 방문하지도 않은 혹은 방문할 계획이 없는 페이지의 컴포넌트가 로딩되지 않도록 설정
// 사용시점에 로딩
const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
</script>

<style lang="scss" scoped>
</style>