<template>
  <v-container style="text-align: center">
    <v-card style="transition: none">
      <v-card-item>
        <h3 style="margin: 10px 0 20px 0">登入學校帳號</h3>
        <v-form
          v-model="valid"
          lazy-validation
          style="margin: 0 auto; max-width: 250px"
          ref="form"
          @submit.prevent="execute()"
        >
          <v-text-field
            v-model="input.name"
            variant="outlined"
            density="compact"
            label="學號"
            autocomplete="username"
            :rules="[
              v => !!v || '學號不可為空',
              v => v.length === 9 || '學號長度為9',
              v => /^[a-zA-Z]/.test(v) || '學號必須以英文字母開頭'
            ]"
            required
            type="text"
            style="margin-bottom: 5px"
          />
          <v-text-field
            v-model="input.pass"
            variant="outlined"
            density="compact"
            label="密碼"
            autocomplete="current-password"
            :rules="[
              v => !!v || '密碼不可為空',
              v => v.length >= 5 || '密碼長度至少為5'
            ]"
            required
            :append-inner-icon="showPass ? mdiEye : mdiEyeOff"
            @click:append-inner="showPass = !showPass"
            :type="showPass ? 'text' : 'password'"
            style="margin-bottom: 5px"
          />
          <v-btn color="primary" type="reset" style="margin: 0 5px 10px 5px">
            重置
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
            style="margin: 0 5px 10px 5px"
            :disabled="!valid"
            :loading="isFetching"
          >
            登入
          </v-btn>
        </v-form>
      </v-card-item>
    </v-card>
    <p
      style="
        opacity: 0.5;
        font-size: 14px;
        margin: 10px 40px;
        text-align: center;
      "
    >
      <span>
        聲明：本網頁不儲存使用者密碼，僅用於首次登入學校系統爬取資料。
      </span>
    </p>
  </v-container>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, ref } from 'vue'
import { useUser } from '../hooks'
import { mdiEye, mdiEyeOff } from '@mdi/js'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'

const router = useRouter()
const input = reactive({ name: '', pass: '' })
const showPass = ref(false)
const valid = ref(false)
const form = ref<typeof import('vuetify/components')['VForm'] | null>(null)

const { login } = useUser()

const { isFetching, execute, canAbort, abort } = useFetch(
  import.meta.env.VITE_API_URL + '/login',
  { method: 'POST' },
  {
    immediate: false,
    beforeFetch: ({ url, options, cancel }) => {
      options.body = JSON.stringify(input)
      return { url, options, cancel }
    },
    afterFetch: ({ data, response }) => {
      login(data.cookies)
      router.replace({ name: '帳號' })
      form.value?.reset()
      form.value?.resetValidation()
      return { data, response }
    }
  }
).json()

onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped>
:deep(.v-btn__overlay) {
  background-color: rgb(var(--v-theme-background));
}
</style>
