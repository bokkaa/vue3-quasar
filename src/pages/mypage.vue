<!-- 중첩라우팅 -->
<!-- mypage.vue가 맨처음 렌더링이 되고 mypage 디렉토리를 찾아가서 그 하위 컴포넌트를 렌더링한다. -->
<template>
  <div>
    <div class="text-h5">MyPage</div>
  </div>
  <ul>
    <li>
      <router-link to="/mypage/profile">Profile</router-link>
    </li>
    <li>
      <router-link to="/mypage/password">Password</router-link>
    </li>
    <li>
      <router-link to="/mypage/bookmark">Bookmark</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>