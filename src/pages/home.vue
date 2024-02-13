<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}</q-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
<route lang="yaml">
name: home-page
meta:
    requiresAuth: true
    width: 600px
</route>