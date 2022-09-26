<template>
  <div
    style="display: flex; flex-direction: column; height: calc(100vh - 112px)"
  >
    <v-tabs v-model="tab" centered bg-color="primary" hide-slider>
      <v-tab value="summary">總覽</v-tab>
      <v-scale-transition leave-absolute group hide-on-leave origin="left">
        <v-tab v-if="isFetching" disabled>努力爬取中...</v-tab>
        <v-tab v-else v-for="option of options" :key="option" :value="option">
          {{ grades[option]?.year }}學年
          <br />
          {{ grades[option]?.semester === '1' ? '上學期' : '下學期' }}
        </v-tab>
      </v-scale-transition>
    </v-tabs>
    <v-window v-model="tab" style="flex: 1">
      <v-window-item value="summary">
        <v-fade-transition leave-absolute group>
          <div
            v-if="error"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 5px 10px 5px 5px;
              border-bottom: 1px solid #aaaaaa80;
            "
          >
            <v-btn
              variant="text"
              color="error"
              @click="logout"
              :to="{ name: '帳號' }"
            >
              重新登入
            </v-btn>
            <v-btn
              variant="plain"
              color="error"
              :icon="mdiClose"
              size="x-small"
              @click="error = ''"
            />
          </div>
          <div v-if="isFetching" style="text-align: center">
            <v-progress-circular indeterminate style="height: 200px" />
          </div>
          <v-list v-else variant="elevated" style="padding: 0">
            <v-list-item
              v-for="option of options"
              :key="option"
              @click="tab = option"
              class="secondary"
            >
              <v-row>
                <v-col cols="3" style="text-align: center">
                  <span>{{ grades[option]?.year }}學年</span>
                  <br />
                  <span>
                    {{ grades[option]?.semester === '1' ? '上學期' : '下學期' }}
                  </span>
                </v-col>
                <v-col cols="3" style="text-align: center">
                  <span>學分</span>
                  <br />
                  <span>{{ grades[option]?.credits || '--' }}</span>
                </v-col>
                <v-col cols="3" style="text-align: center">
                  <span>排名</span>
                  <br />
                  <span>{{ grades[option]?.rank || '--' }}</span>
                </v-col>
                <v-col cols="3" style="text-align: center">
                  <span>平均</span>
                  <br />
                  <span>{{ grades[option]?.gpa || '--' }}</span>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <data-footer
            :execute="execute"
            source="NTU ePortfolio"
            style="margin-top: auto"
          >
            嘗試刷新成績
          </data-footer>
        </v-fade-transition>
      </v-window-item>
      <v-window-item v-for="option of options" :key="option" :value="option">
        <v-list variant="elevated" style="padding: 0">
          <v-list-item class="secondary">
            <v-row>
              <v-col cols="4">
                <span>學分</span>
                <br />
                <span style="font-weight: 500">
                  {{ grades[option]?.credits || '--' }}
                </span>
              </v-col>
              <v-col cols="4">
                <span>排名</span>
                <br />
                <span style="font-weight: 500">
                  {{ grades[option]?.rank || '--' }}
                </span>
              </v-col>
              <v-col cols="4">
                <span>平均</span>
                <br />
                <span style="font-weight: 500">
                  {{ grades[option]?.gpa || '--' }}
                </span>
              </v-col>
            </v-row>
          </v-list-item>
          <v-list-item
            v-for="(course, index) in grades[option]?.courses"
            :key="index"
            style="text-align: left"
          >
            <v-list-item-title>{{ course.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ course.credits }}學分
            </v-list-item-subtitle>
            <template #append>
              <span style="opacity: 0.6; font-size: 14px">
                {{ course.grade || '成績未到' }}
              </span>
            </template>
          </v-list-item>
        </v-list>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { mdiAlertCircle, mdiClose } from '@mdi/js'
import DataFooter from '../components/DataFooter.vue'
import { useUser } from '../hooks'

const { logout, grades, cookies } = useUser()

const tab = ref<string>('summary')
const { error, isFetching, execute, canAbort, abort } = useFetch(
  import.meta.env.VITE_API_URL + '/grade',
  {
    method: 'POST',
    body: JSON.stringify({ cookies: cookies.value })
  },
  {
    immediate: false,
    onFetchError: ({ response, error }) => {
      return { response, error }
    },
    afterFetch: ({ data, response }) => {
      if (response.ok) {
        grades.value = data.grades
        cookies.value = data.cookies
      }
      return { data, response }
    }
  }
).json<{}>()

onMounted(() => {
  if (!Object.keys(grades.value).length) execute()
})

const options = computed(
  () =>
    grades.value &&
    Object.keys(grades.value).sort((a, b) => Number(b) - Number(a))
)

onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped lang="scss">
// customize item font size
:deep(.v-list-item-title) {
  font-size: 15px;
}
:deep(.v-list-item-subtitle) {
  font-size: 14px;
}
.v-window-item {
  flex-direction: column;
  text-align: center;
}
// align banner text to middle
:deep(.v-banner__content) {
  display: table;
}
span.click {
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.v-list-item {
  padding: 6px 16px !important;
  margin: 12px;
  border-radius: 4px;
  font-size: 14px;
  &.secondary {
    background: rgba(var(--v-theme-secondary));
  }
}
// allow scrolling on tabs
:deep(.v-slide-group__content) {
  /* flex: 0 1 auto; */
  /* overflow-x: auto; */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
