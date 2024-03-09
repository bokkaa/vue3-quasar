import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { readonly, ref, watch } from 'vue';
import { addBookmark, hasBookmark, removeBookmark } from 'src/services';

export const useBookmark = (id, options) => {
  const { initialCount } = options || {};
  const { uid, isAuthenticated } = storeToRefs(useAuthStore());
  const isBookmark = ref(false);
  const bookmarkCount = ref(initialCount);
  const postId = ref(id);

  const initBookmark = async () => {
    if (isAuthenticated.value === false) {
      isBookmark.value = false;
      return;
    }
    isBookmark.value = await hasBookmark(uid.value, postId.value);
  };

  const toggleBookmark = async () => {
    if (isAuthenticated.value === false) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    if (isBookmark.value === true) {
      await removeBookmark(uid.value, postId.value);
      bookmarkCount.value--;
    } else {
      await addBookmark(uid.value, postId.value);
      bookmarkCount.value++;
    }
    isBookmark.value = !isBookmark.value;
  };

  watch(isAuthenticated, () => initBookmark(), {
    immediate: true,
  });

  return {
    isBookmark,
    // 카운트는 불변값
    bookmarkCount: readonly(bookmarkCount),
    // 이 업데이트 메소드를 통해 값을 변경하도록 수정
    updateBookmarkCount: count => (bookmarkCount.value = count),
    toggleBookmark,
  };
};
