import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { readonly, ref, watch } from 'vue';
import { addLike, hasLike, removeLike } from 'src/services';

export const useLike = (id, options) => {
  const { initialCount } = options || {};
  const { uid, isAuthenticated } = storeToRefs(useAuthStore());
  const isLike = ref(false);
  const likeCount = ref(initialCount);
  const postId = ref(id);

  const initLike = async () => {
    if (isAuthenticated.value === false) {
      isLike.value = false;
      return;
    }
    isLike.value = await hasLike(uid.value, postId.value);
  };

  const toggleLike = async () => {
    if (isAuthenticated.value === false) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    if (isLike.value === true) {
      await removeLike(uid.value, postId.value);
      likeCount.value--;
    } else {
      await addLike(uid.value, postId.value);
      likeCount.value++;
    }
    isLike.value = !isLike.value;
  };

  watch(isAuthenticated, () => initLike(), {
    immediate: true,
  });

  return {
    isLike,
    // 카운트는 불변값
    likeCount: readonly(likeCount),
    // 이 업데이트 메소드를 통해 값을 변경하도록 수정
    updateLikeCount: count => (likeCount.value = count),
    toggleLike,
  };
};
