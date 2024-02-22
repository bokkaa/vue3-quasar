<template>
  <div class="text-h5 text-center text-weight-bold q-mb-xl">비밀번호 찾기</div>
  <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
    <q-input v-model="email" placeholder="가입한 이메일" outlined dense />

    <q-btn
      type="submit"
      label="비밀번호 재설정하기"
      class="full-width"
      unelevated
      color="primary"
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
import { sendPasswordReset } from 'src/services';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const emit = defineEmits(['changeView', 'closeDialog']);

const Sq = useQuasar();

const email = ref('');
// firebase 콘솔 - Authentication에서 내용 설정가능
const handleSubmit = async () => {
  await sendPasswordReset(email.value);
  Sq.notify('이메일로 비밀번호 재설정 링크를 전송하였습니다.');
  emit('closeDialog');
};
</script>
    
<style lang="scss" scoped>
</style>