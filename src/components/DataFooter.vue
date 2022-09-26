<template>
  <p>
    <template v-if="source">
      <span>資料來源：{{ source }}</span>
      <br />
    </template>
    <span class="click" @click="execute()">
      <slot />
    </span>
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
  margin: 10px 0;
}
span.click {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
