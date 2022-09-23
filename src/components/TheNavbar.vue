<template>
  <v-app-bar color="primary" density="comfortable" location="top" flat>
    <v-app-bar-title>
      <b>MY NTU</b>
    </v-app-bar-title>
    <span style="margin: 0 10px">{{ profile.name || '訪客' }}</span>
    <v-btn
      size="small"
      :icon="mode === 'light' ? mdiBrightness2 : mdiWhiteBalanceSunny"
      @click="nextMode()"
    />
  </v-app-bar>
  <v-bottom-navigation bgColor="primary" mandatory grow class="elevation-24">
    <v-btn v-for="link in routes" :key="link.name" :to="{ name: link.name }">
      <v-icon size="large">{{ link.meta?.icon }}</v-icon>
      <span style="margin-top: 2px; text-transform: uppercase">
        {{ link.name }}
      </span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { mdiBrightness2, mdiWhiteBalanceSunny } from '@mdi/js'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { useMyTheme, useUser } from '../hooks'

const router = useRouter()
const { profile } = useUser()
const { mode, nextMode } = useMyTheme()

const routes = router
  .getRoutes()
  .filter((route: RouteRecordRaw) => route.meta?.icon)
</script>

<style scoped lang="scss">
.v-bottom-navigation .v-btn {
  &.v-btn--active :deep(.v-btn__overlay) {
    background: transparent !important;
  }
  &:not(.v-btn--active) {
    opacity: 0.6;
  }
}
</style>
