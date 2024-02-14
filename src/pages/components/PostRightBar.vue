<template>
  <StickySideBar>
    <q-btn
      padding="8px 12px 8px 8px"
      unelevated
      color="primary"
      text-color="white"
      class="full-width"
    >
      <q-avatar class="q-mr-sm" color="white" text-color="primary" size="22px">
        <q-icon name="edit" size="14px" />
      </q-avatar>
      <span class="text-weight-bold">새 포스트 작성하기</span>
    </q-btn>
    <q-card class="q-mt-md bg-grey-1 q-pb-none" bordered flat>
      <q-card-section class="flex items-center"
        ><div class="text-weight-bold">태그</div>
        <q-space />
        <q-btn icon="refresh" dense size="sm" flat round color="grey"
      /></q-card-section>
      <q-card-section class="q-pb-sm">
        <q-card class="q-px-sm" bordered flat square>
          <q-input
            borderless
            dense
            input-style="font-size: 12px"
            placeholder="태그로 검색해보세요"
          />
          <div class="q-gutter-sm q-pb-sm">
            <q-btn
              size="10px"
              padding="2px 4px 2px 7px"
              color="grey"
              text-color="dark"
              unelevated
            >
              vue js <q-icon name="clear" size="12px" color="grey"></q-icon>
            </q-btn>
          </div>
        </q-card>
      </q-card-section>
      <q-list padding>
        <q-item clickable dense v-for="tag in tags" :key="tag.name">
          <q-item-section class="text-teal text-caption">
            #{{ tag.name }}
          </q-item-section>
          <q-item-section side class="text-teal text-caption">
            {{ tag.count }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import { ref } from 'vue';
import StickySideBar from 'src/components/StickySideBar.vue';

const tags = ref([
  {
    name: 'vuejs',
    count: 10,
  },
  {
    name: 'react',
    count: 15,
  },
  {
    name: 'angular',
    count: 12,
  },
  {
    name: 'html',
    count: 18,
  },
  {
    name: 'css',
    count: 22,
  },
]);
</script>

<style lang="scss" scoped>
</style>