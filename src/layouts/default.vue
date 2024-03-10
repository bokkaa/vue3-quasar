<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/icons/favicon-16x16.png" />
            </q-avatar>
            복코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://google.com"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          v-if="!authStore.isAuthenticated"
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        />
        <!-- {{ authStore.user }} -->
        <q-btn v-if="authStore.isAuthenticated" round flat>
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 140px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                to="/mypage/profile"
              >
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup>
                <q-item-section class="text-red" @click="verifyEmail"
                  >이메일을 인증해주세요</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup @click="hadleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleDeleteUser">
                <q-item-section>회원탈퇴</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
  </q-layout>
  <AuthDialog v-model="authDialog" />
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import AuthDialog from 'src/components/auth/AuthDialog.vue';
import {
  logout,
  generateDefaultPhotoURL,
  sendVerificationEmail,
} from 'src/services/index';
import { removeUserInfo } from 'src/services/index';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import router from 'src/router';

const authStore = useAuthStore();
const Sq = useQuasar();
const route = useRoute();
const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

const authDialog = ref(false);
const openAuthDialog = () => {
  authDialog.value = true;
};

const hadleLogout = async () => {
  Sq.notify('로그아웃 되었습니다.');
  await logout();
};

// 회원탈퇴
const { execute: executeDeleteUser } = useAsyncState(
  removeUserInfo,
  {},
  {
    immediate: false,
    onSuccess: () => {
      Sq.notify('정상적으로 탈퇴처리 되었습니다.');
      router.push('/');
    },
  },
);

const handleDeleteUser = async () => {
  if (confirm('탈퇴하시겠습니까?') == false) {
    return;
  }
  executeDeleteUser(0);
};

const verifyEmail = async () => {
  await sendVerificationEmail();
  Sq.notify('이메일을 확인해주세요.');
};
</script>