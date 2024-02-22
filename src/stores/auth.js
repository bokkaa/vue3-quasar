import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  // const user = ref(null);
  //로컬스토리지에 key로 auth/user로 저장
  //초기값은 null
  //마지막은 options
  const user = useLocalStorage('auth/user', null, {
    //입출력할 때 데이터 변환
    //String 형식을 오브젝트형식으로 변환
    serializer: StorageSerializers.object,
  });
  //!! => boolean 타입 반환
  const isAuthenticated = computed(() => !!user.value);
  const uid = computed(() => user.value?.uid || null);
  const setUser = userData => {
    user.value = userData;

    if (userData) {
      user.value = {
        uid: userData.uid,
        phothURL: userData.phothURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
    } else {
      user.value = null;
    }
  };

  return {
    user,
    uid,
    isAuthenticated,
    setUser,
  };
});
