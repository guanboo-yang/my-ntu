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
        <v-fade-transition mode="out-in">
          <keep-alive v-if="isLoggedIn">
            <component :is="Component" />
          </keep-alive>
          <component v-else :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">
:root {
  font-synthesis: none;
}
.v-theme--dark,
.v-theme--light {
  // make text more clear
  --v-high-emphasis-opacity: 1 !important;
}
.v-tab:not(.v-tab--selected) {
  // update in vuetify 3.0.0-beta.12
  opacity: 0.6;
}
.v-tab {
  border-radius: 0;
  // letter-spacing: 0;
  min-width: 80px !important;
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
.v-dialog .v-overlay__content {
  width: unset !important;
}
.v-dialog .v-overlay__scrim {
  background: #000;
}
.v-input__details {
  padding-bottom: 3px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px rgb(var(--v-theme-background)) inset !important;
}
</style>
