<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id" @click="goPostDetails(id)">
        <q-card-section>{{ id }}번 게시글</q-card-section>
      </q-card>
      <!-- <q-card v-for="id in 100" :key="id" @click="goPostDetails(id)">
        <router-link :to="`/posts/${id}`">
          <q-card-section>{{ id }}번 게시글</q-card-section>
        </router-link>
      </q-card> -->
    </section>
  </q-page>
</template>

<!-- router-link vs router.push -->
<!-- 검색엔진 노출 =>  router-link 사용 (href 속성을 참고함)-->
<!-- 관리자 페이지 같이 노출될 필요가 없는 경우 router.push -->

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPostDetails = id => {
  router.push(`/posts/${id}`);
};
</script>

<style lang="scss" scoped>
</style>