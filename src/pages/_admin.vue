<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

<!-- 해당 컴포넌트는 루트레벨에 있기때문에 즉 pages폴더안에 바로 들어있음, 레이아웃을 설정할 수 있다. -->
<!-- 따라서 레이아웃을 admin으로 설정한 경우 layouts에서 admin을 찾고 admin이라는 이름과 동일한 디렉토리 안에서 컴포넌트를 찾는다. -->
<!-- 결과적으로 layout은 admin.vue고 router-view에 나오는 컴포넌트는 admin디렉토리 안에 있는 index.vue -->
<!--  -->
<!-- <route lang="yaml">
meta:
  layout: admin
</route> -->