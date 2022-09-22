<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import { useUser } from './hooks'

const { isLoggedIn } = useUser()
</script>

<template>
  <v-app>
    <the-navbar />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive v-if="isLoggedIn">
            <component :is="Component" />
          </keep-alive>
          <component v-else :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">
:root {
  /* font-family: Poppins, Inter, Avenir, Helvetica, Arial, sans-serif; */
  font-synthesis: none;
}
.v-theme--dark,
.v-theme--light {
  --v-high-emphasis-opacity: 1 !important;
}
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease-out;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
.v-tabs .v-btn {
  &.v-btn--active .v-btn__overlay {
    background: transparent !important;
  }
  &:not(.v-btn--active) {
    opacity: 0.6;
  }
}
.v-tab {
  border-radius: 0;
  letter-spacing: 0;
  min-width: 80px;
}
.v-window .v-window__container {
  height: 100%;
  .v-window-item {
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
