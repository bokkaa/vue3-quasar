<template>
  <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
  <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
    <q-input
      v-model="form.email"
      placeholder="이메일"
      outlined
      dense
      hide-bottom-space
      :rules="[validateRequired, validateEmail]"
    />
    <q-input
      v-model="form.password"
      type="password"
      placeholder="비밀번호(문자, 숫자조합 8자 이상)"
      outlined
      dense
      hide-bottom-space
      :rules="[validateRequired, validatePassword]"
    />

    <q-input
      v-model="passwordConfirm"
      type="password"
      placeholder="비밀번호 확인"
      outlined
      dense
      hide-bottom-space
      :rules="[
        validateRequired,
        val => validatePasswordConfirm(form.password, val),
      ]"
    />
    <q-btn
      type="submit"
      label="가입하기"
      class="full-width"
      unelevated
      color="primary"
      :loading="isLoading"
    />

    <q-separator />
    <q-btn
      label="로그인 하기"
      class="full-width"
      unelevated
      flat
      @click="$emit('changeView', 'SignInForm')"
    />
  </q-form>
</template>
  
<script setup>
import { ref } from 'vue';
import { signUpWithEmail } from 'src/services';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';

const emit = defineEmits(['changeView', 'closeDialog']);

const Sq = useQuasar();

const form = ref({
  nickname: '',
  email: '',
  password: '',
});

//프로미스 객체를 반환하는 비동기 함수가 첫번째 인자
//초기값
//options
const { isLoading, execute } = useAsyncState(signUpWithEmail, null, {
  immediate: false,
  onSuccess: () => {
    Sq.notify('가입을 환영합니다.');
    Sq.notify('이메일에서 인증 링크를 확인해주세요.');
    emit('closeDialog');
  },
  onError: err => {
    Sq.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

//execute 두번째 파라미터는 useAsyncState함수 첫번째 인자인 프로미스 객체를 반환하는 비동기함수의 파라미터로 들어간다.
const handleSubmit = () => execute(1000, form.value);

// const handleSubmit = async () => {
//   await signUpWithEmail(form.value);
//   Sq.notify('가입을 환영합니다.');
//   Sq.notify('이메일에서 인증 링크를 확인해주세요.');
//   emit('closeDialog');
// };

const passwordConfirm = ref('');
</script>


<style lang="scss" scoped>
</style>