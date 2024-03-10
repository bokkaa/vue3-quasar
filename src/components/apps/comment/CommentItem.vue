<template>
  <q-item class="q-py-md">
    <q-item-section side top>
      <q-avatar size="md">
        <img :src="commentUser?.photoURL" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>{{ commentUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">{{
          date.formatDate(props.createdAt, 'YYYY/MM/DD HH:mm:ss')
        }}</span>
      </div>
      <div class="q-mt-sm">
        {{ props.message }}
      </div>
    </q-item-section>
    <q-item-section side top v-if="hasOwnContent(props.uid)">
      <q-btn
        flat
        color="grey"
        icon="sym_o_delete"
        round
        dense
        @click="$emit('delete', props.id)"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth';
import { date } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import { getUserById } from 'src/services';
const props = defineProps({
  id: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  uid: {
    type: String,
  },
});
defineEmits('delete');

const { hasOwnContent } = useAuthStore();

const { state: commentUser } = useAsyncState(() => getUserById(props.uid), {});
</script>

<style lang="scss" scoped>
</style>