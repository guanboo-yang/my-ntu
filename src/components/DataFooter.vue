<template>
  <p>
    <template v-if="source">
      <span>資料來源：{{ source }}</span>
      <br />
    </template>
    <a @click="execute()">
      <slot />
    </a>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  execute: (throwOnFailed?: boolean | undefined) => Promise<any>
  source?: string
}>()
</script>

<style scoped>
p {
  opacity: 0.5;
  font-size: 14px;
  text-align: center;
}
a {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
