<template>
  <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
  <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
    <q-input v-model="form.email" placeholder="이메일" outlined dense />
    <q-input
      v-model="form.password"
      type="password"
      placeholder="비밀번호"
      outlined
      dense
    />
    <DisplayError :code="error?.code" />
    <div>
      <q-btn
        type="submit"
        label="로그인하기"
        class="full-width"
        unelevated
        color="primary"
        :loading="isLoading"
      />
      <div class="flex justify-between">
        <q-btn
          label="비밀번호 찾기"
          color="secondary"
          flat
          dense
          size="13px"
          @click="$emit('changeView', 'FindPasswordForm')"
        />
        <q-btn
          label="이메일 가입하기"
          color="secondary"
          flat
          dense
          size="13px"
          @click="$emit('changeView', 'SignUpForm')"
        />
      </div>
    </div>

    <q-separator />
    <q-btn
      label="구글 계정으로 로그인"
      class="full-width"
      color="primary"
      unelevated
      outline
      @click="handleSignInGoogle"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithGoogle, signInWithEmail } from 'src/services/auth';
import { useQuasar } from 'quasar';
import DisplayError from '../DisplayError.vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useAsyncState } from '@vueuse/core';

const Sq = useQuasar();
const emit = defineEmits(['changeView', 'closeDialog']);

//에러 관리
// const isLoading = ref(false);
// const error = ref(null);

//프로미스 객체를 반환하는 비동기함수 , 초기값 , option
const { isLoading, error, execute } = useAsyncState(signInWithEmail, null, {
  // 즉시실행 x => execute설정대로 실행됨
  immediate: false,
  // 에러 메시지 표시
  throwError: true,
  //비동기 로직이 성공한 다음에 실행될 로직을 콜백에 넣어준다.
  onSuccess: () => {
    Sq.notify('환영합니다.');
    emit('closeDialog');
  },
  //비동기 로직이 실패한 다음에 실행될 로직을 콜백에 넣어준다.
  onError: err => {
    Sq.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSignInEmail = () =>
  // 두번째 인자(변수)가 useAsyncState의 첫번째 비동기함수의 매개변수로 들어감
  execute(1000, form.value);

//이메일 로그인
const form = ref({
  email: '',
  password: '',
});

// //전역 에러 관리
// const handleSignInEmail = async () => {
//   await signInWithEmail(form.value);
//   Sq.notify('환영합니다.');
//   emit('closeDialog');
// };

// const handleSignInEmail = async () => {
//   try {
//     isLoading.value = true;
//     await signInWithEmail(form.value);
//     Sq.notify('환영합니다.');
//     emit('closeDialog');
//   } catch (err) {
//     error.value = err;
//     Sq.notify({
//       type: 'negative',
//       message: getErrorMessage(err.code),
//     });
//   } finally {
//     isLoading.value = false;
//   }
// };

//로그인(구글)
const handleSignInGoogle = async () => {
  await signInWithGoogle(form.value);
  Sq.notify('환영합니다!');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped>
</style>