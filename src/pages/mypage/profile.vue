<template>
  <div class="q-gutter-y-md">
    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input v-model="displayName" outlined dense label="닉네임" />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn
            type="submit"
            label="저장하기"
            flat
            dense
            color="primary"
            :loading="isLoadingProfile"
          />
        </q-card-actions>
      </q-form>
    </BaseCard>
    <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
          <q-input v-model="email" outlined dense label="이메일" />
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-space />
          <q-btn
            type="submit"
            label="저장하기"
            flat
            dense
            color="primary"
            :loading="isLoadingEmail"
          />
        </q-card-actions>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { useQuasar } from 'quasar';
import { updateUserEmail, updateUserProfile } from 'src/services';
import { ref, watchEffect } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { useAsyncState } from '@vueuse/core';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const Sq = useQuasar();
const authStore = useAuthStore();

const displayName = ref('');

// 변수명이 겹칠 수 있으니 : 이용
const { isLoading: isLoadingProfile, execute: executeProfile } = useAsyncState(
  updateUserProfile,
  null,
  {
    immediate: false,
    onSuccess: () => {
      Sq.notify('프로필 수정 완료');
    },
    onError: err => {
      Sq.notify({
        type: 'negative',
        message: getErrorMessage(err.code),
      });
    },
  },
);
const handleSubmitProfile = () => executeProfile(0, displayName.value);

const email = ref('');
const { isLoading: isLoadingEmail, execute: executeEmail } = useAsyncState(
  updateUserEmail,
  null,
  {
    immediate: false,
    onSuccess: () => {
      Sq.notify('이메일 수정 완료');
    },
    onError: err => {
      Sq.notify({
        type: 'negative',
        message: getErrorMessage(err.code),
      });
    },
  },
);

const handleSubmitEmail = () => executeEmail(0, email.value);

// const handleSubmitProfile = async () => {
//   await updateUserProfile(displayName.value);
//   Sq.notify('프로필 수정 완료');
// };

// const handleSubmitEmail = async () => {
//   await updateUserEmail(email.value);
//   Sq.notify('이메일 수정 완료');
// };

watchEffect(() => {
  // 새로고침하게되면 인스턴스가 새로 생성되기떄문에 피어나에 저장되어있는 상태가 초기화가 됨
  // 그래서 null이 되기 때문에 에러가 뜬다. 그걸 방지하기위해 optional chain을 사용 ?
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
});
</script>

<style lang="scss" scoped>
</style>