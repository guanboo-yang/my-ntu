<template>
  <v-container>
    <v-card style="text-align: center; transition: none; margin-bottom: 10px">
      <v-card-item>
        <v-avatar size="80" style="background: #bbb3; margin-bottom: 12px">
          <v-img src="/ntu.png" />
        </v-avatar>
        <h3>{{ profile.name || '訪客' }}</h3>
        <p style="opacity: 0.5">{{ profile.id || '請先登入' }}</p>
      </v-card-item>
      <v-divider />
      <v-fade-transition leave-absolute hide-on-leave>
        <v-progress-circular
          v-if="isFetching"
          indeterminate
          style="height: 100px"
        />
        <v-card-item v-else-if="error">
          <p>{{ error }}</p>
        </v-card-item>
        <v-card-item
          v-else
          style="text-align: left; font-size: 15px; cursor: pointer"
          @click="expand = !expand"
        >
          <v-row dense>
            <v-col cols="6">
              系所：{{ profile.department?.replace(/\s/g, ' ') }}
            </v-col>
            <v-col cols="6">
              年級：{{ profile.grade?.replace(/\s/g, ' ') }}
            </v-col>
            <v-col cols="6"> 性別：{{ profile.sex }}</v-col>
            <v-col cols="6"> 狀態：{{ profile.status }} </v-col>
            <v-col cols="12">
              身分別：{{ profile.identity?.replace(/\s/g, ' ') }}
            </v-col>
          </v-row>
          <v-expand-transition>
            <v-row v-show="expand">
              <!-- ! id and birthday are incorrect -->
              <v-col cols="6"> 生日：{{ profile.idNumber }} </v-col>
              <v-col cols="6"> 身份證字號：{{ profile.birthday }} </v-col>
              <v-col cols="12"> 英文名字：{{ profile.english }} </v-col>
              <v-col cols="12" style="display: flex">
                <span style="white-space: nowrap">地址：</span>
                {{ profile.address }}
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-card-item>
      </v-fade-transition>
      <v-divider />
      <v-card-item>
        <v-btn color="primary" @click="logout" :to="{ name: '登入' }" replace>
          登出
        </v-btn>
      </v-card-item>
    </v-card>
    <data-footer :execute="execute" source="NTU ePortfolio">
      嘗試刷新資料
    </data-footer>
  </v-container>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import DataFooter from '../components/DataFooter.vue'
import { useUser } from '../hooks'
import type { Profile } from '../interfaces'

const expand = ref(false)

const { logout, profile, cookies } = useUser()

const { execute, error, isFetching, canAbort, abort } = useFetch(
  import.meta.env.VITE_API_URL + '/profile',
  {
    method: 'POST',
    body: JSON.stringify({ cookies: cookies.value })
  },
  {
    immediate: false,
    afterFetch: ({ data, response }) => {
      if (response.ok) {
        profile.value = data.profile
        cookies.value = data.cookies
      }
      return { data, response }
    }
  }
).json<Profile>()

onMounted(() => {
  if (!profile.value.name) execute()
})

onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped lang="scss">
.v-card-item {
  padding: 1rem;
}
.v-row {
  margin: 0 !important;
}
.v-col {
  /* text-overflow: ellipsis; */
  overflow: auto;
  padding: 2px !important;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
