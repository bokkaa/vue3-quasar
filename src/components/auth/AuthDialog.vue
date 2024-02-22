<template>
  <!-- 사용할려면 props와 emit이 정의되어있어야함 -->
  <!-- <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"    
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  > -->

  <!-- 여기도 마찬가지로 fallthroug속성 사용 가능 / props, emit 정의 필요X -->
  <q-dialog
    v-bind="$attrs"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <component
          @close-dialog="closeDialog"
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

// defineProps({
//   modelValue: {
//     type: Boolean,
//     default: false,
//   },
// });
// defineEmits(['update:modelValue']);

const emit = defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm'); // SignInForm, SignUpForm, FindPasswordForm
const changeViewMode = mode => {
  viewMode.value = mode;
};

// Lazy로딩 - 즉, 아직 방문하지도 않은 혹은 방문할 계획이 없는 페이지의 컴포넌트가 로딩되지 않도록 설정
// 사용시점에 로딩
const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};

const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
</style>