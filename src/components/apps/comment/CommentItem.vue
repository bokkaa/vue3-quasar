<template>
  <q-item class="q-py-md">
    <q-item-section side top>
      <q-avatar size="md">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>복어</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">{{
          date.formatDate(createdAt, 'YYYY/MM/DD HH:mm:ss')
        }}</span>
      </div>
      <div class="q-mt-sm">
        {{ message }}
      </div>
    </q-item-section>
    <q-item-section side top v-if="hasOwnContent(uid)">
      <q-btn
        flat
        color="grey"
        icon="sym_o_delete"
        round
        dense
        @click="$emit('delete', id)"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth';
import { date } from 'quasar';
defineProps({
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
</script>

<style lang="scss" scoped>
</style>