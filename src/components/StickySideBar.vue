<template>
  <aside class="sticty-side-bar">
    <slot></slot>
  </aside>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.sticty-side-bar {
  position: sticky;
  top: 66px;
  z-index: 2;
  overflow-y: none;
  height: fit-content !important;
}
</style>