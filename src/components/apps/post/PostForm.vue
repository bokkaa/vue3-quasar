<template>
  <q-form @submit.prevent="handleSubmit">
    <q-card-section class="q-pa-md q-gutter-y-sm">
      <q-input
        v-model="titleModel"
        outlined
        placeholder="제목"
        hide-bottom-space
        :rules="[validateRequired]"
        counter
        maxlength="40"
      />
      <!-- value값만 가져오기 -->
      <q-select
        outlined
        v-model="categoryModel"
        :options="categories"
        emit-value
        map-options
        hide-bottom-space
        :rules="[validateRequired]"
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 선택하세요</span>
        </template>
      </q-select>

      <TiptapEditor v-model="contentModel" />
      <q-input
        outlined
        placeholder="태그를 입력해주세요! (입력 후 Enter)"
        prefix="#"
        @keypress.enter.prevent="addTag"
      />
      <q-chip
        v-for="(tag, index) in tags"
        :key="tag"
        outline
        dense
        color="teal"
        removable
        @remove="removeTag(index)"
        >{{ tag }}
      </q-chip>

      <q-separator />
      <q-card-actions align="right">
        <slot name="actions">
          <q-btn flat label="취소하기" v-close-popup />
          <q-btn
            type="submit"
            flat
            label="저장하기"
            color="primary"
            :loading="loading"
          />
        </slot>
      </q-card-actions>
    </q-card-section>
  </q-form>
</template>

<script setup>
import { computed, ref, toRef } from 'vue';
import { getCategories } from 'src/services/category';
import TiptapEditor from 'src/components/tiptap/TiptapEditor.vue';
import { validateRequired } from 'src/utils/validate-rules';
import { useQuasar } from 'quasar';
import { useTag } from 'src/composables/useTag';

const Sq = useQuasar();
const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
  'submit',
]);

const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});

const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

const { addTag, removeTag } = useTag({
  // options 설정
  // toRef props에 있는 tags를 반응형으로 꺼내줭~
  tags: toRef(props, 'tags'),
  updateTag: tags => emit('update:tags', tags),
  maxLengthMessage: '태그는 최대 10까지 등록할 수 있습니다.',
});

const categories = getCategories();

const handleSubmit = () => {
  if (!contentModel.value) {
    Sq.notify('내용을 입력해주세요');
    return;
  }

  // 부모컴포넌트에서 해당 함수가 실행되게끔 방출
  emit('submit');
};
</script>

<style lang="scss" scoped>
</style>