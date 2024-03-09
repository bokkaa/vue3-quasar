import { storeToRefs } from 'pinia';
import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth';

function requiredAuth(to) {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  //우리가 접근해야할 url과 라우터 정보와 비교
  // debugger;
  if (
    //to라는 객체는 우리가 이동할 페이지 정보를 담고있다.
    //matched 이동할 페이지와 연결되어있는 모든 페이지정보가 배열형태로 담겨있음
    // some()모든 배열 중에 하나라도 일치하면 true

    // 최상위 컴포넌트에 설정한 meta: requiresAuth:true를 확인     // 로그인 여부
    to.matched.some(record => record.meta.requiresAuth) &&
    !isAuthenticated.value
  ) {
    alert('로그인이 필요합니다.');
    return;
  }

  return true;
}

export default boot(async ({ app, router }) => {
  router.beforeEach(requiredAuth);
});
