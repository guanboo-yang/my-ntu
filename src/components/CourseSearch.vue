<template>
  <v-container>
    <v-form
      v-model="valid"
      lazy-validation
      ref="form"
      @submit.prevent="execute()"
      style="margin: 6px 0"
    >
      <v-row style="margin: -8px; margin-bottom: -14px">
        <v-col style="padding: 8px">
          <v-select
            v-model="input.semester"
            :items="option.semesters"
            density="compact"
            variant="outlined"
            label="學期"
          />
        </v-col>
        <v-col style="padding: 8px">
          <v-select
            v-model="input.type"
            :items="option.types"
            density="compact"
            variant="outlined"
            label="查詢方式"
          />
        </v-col>
      </v-row>
      <v-text-field
        v-model="input.keyword"
        variant="outlined"
        density="compact"
        label="輸入關鍵字"
        name="csname"
        :rules="[
          v => !!v || '輸入關鍵字不可為空',
          v => v.length >= 2 || '輸入關鍵字長度至少為2'
        ]"
        required
        type="text"
        clearable
      />
      <v-btn-toggle
        v-model="input.day"
        multiple
        density="comfortable"
        variant="outlined"
        color="primary"
        style="width: 100%; margin-bottom: 12px"
      >
        <v-btn
          v-for="day in option.days"
          :key="day"
          :value="day"
          min-width="36"
          style="flex-grow: 1"
        >
          {{ day }}
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle
        v-model="input.time"
        multiple
        variant="outlined"
        density="comfortable"
        color="primary"
        style="width: 100%; margin-bottom: 12px"
      >
        <v-btn
          v-for="time in option.times"
          :key="time"
          :value="time"
          min-width="36"
          style="flex-grow: 1"
        >
          {{ time }}
        </v-btn>
      </v-btn-toggle>
      <v-btn
        color="primary"
        type="submit"
        :disabled="!valid"
        :loading="isFetching"
        style="width: 100%"
      >
        查詢
      </v-btn>
    </v-form>
    <!-- <v-list>
      <v-list-item
        v-for="course in data"
        :key="course.ser_no"
        :title="course.crs_cname"
        :subtitle="course.teacher_cname + ' ' + course.course_no"
        style="padding: 8px 0px 8px 6px; max-height: 999999px"
      >
        <template #append>
          <v-btn flat size="x-small" :icon="mdiPlus" @click="" />
        </template>
      </v-list-item>
    </v-list> -->
    <v-expansion-panels variant="accordion" style="padding: 12px 0">
      <v-expansion-panel v-for="course in data" :key="course.ser_no">
        <v-expansion-panel-title
          style="min-height: 32px; line-height: 1.5; padding: 8px 16px"
        >
          <p>
            {{ course.crs_cname }}
            <br />
            <span style="opacity: 0.5">
              {{ course.teacher_cname + ' ' + course.course_no }}
            </span>
          </p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          流水號：{{ course.ser_no }}
          <br />
          開課系所：{{ course.dpt_code }} {{ course.dpt_sname }}
          <br />
          上課時間：{{ getCourseTime(course) }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { mdiPlus } from '@mdi/js'

type Course = {
  course_no: string
  ser_no: string
  crs_cname: string
  teacher_cname: string
  dpt_code: string
  dpt_sname: string
  day1: string
  day2: string
  day3: string
  day4: string
  day5: string
  day6: string
}

const input = reactive({
  semester: '111-1',
  type: '課程名稱',
  keyword: '',
  day: ['一', '二', '三', '四', '五', '六'],
  time: ['上午', '下午', '晚上']
})
const valid = ref(false)
const form = ref<typeof import('vuetify/components')['VForm'] | null>(null)
const option = {
  semesters: [
    '111-1',
    ...Array.from({ length: 18 }, (_, i) => 110 - i).flatMap(x => [
      `${x}-2`,
      `${x}-1`
    ])
  ],
  types: ['課程名稱', '教師姓名', '課程識別碼', '課程流水號'],
  days: ['一', '二', '三', '四', '五', '六'],
  times: ['上午', '下午', '晚上']
}

// use query string
const { data, isFetching, execute } = useFetch(
  import.meta.env.VITE_API_URL + '/search',
  { method: 'POST' },
  {
    immediate: false,
    beforeFetch: ({ url, options, cancel }) => {
      if (!valid.value) cancel()
      const day = option.days
        .map(day => (input.day.includes(day) ? '1' : '0'))
        .join('')
      const time = option.times
        .map(time => (input.time.includes(time) ? '1' : '0'))
        .join('')
      const query = {
        op: 'list',
        semester: input.semester,
        type: 'crs_cname',
        inputStr: input.keyword,
        week: day,
        time
      }
      options.body = JSON.stringify(query)
      return { url, options }
    },
    afterFetch: ({ data, response }) => {
      if (!response.ok) throw new Error(data.message)
      console.log(data)
      if (data.length === 0) throw new Error('查無資料')
      return { data, response }
    }
  }
).json<Course[]>()

const getCourseTime = (course: Course) => {
  return Object.entries(course)
    .filter(([key, value]) => key.startsWith('day') && value !== '')
    .map(([key, value]) => `${option.days[+key.slice(-1) - 1]}${value}`)
    .join(' ')
}
</script>

<style scoped>
.v-btn:hover > :deep(.v-btn__overlay) {
  opacity: 0;
}
.v-btn--active:hover > :deep(.v-btn__overlay) {
  opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
}
.v-expansion-panel-title--active > :deep(.v-expansion-panel-title__overlay) {
  opacity: calc(0.08 * var(--v-theme-overlay-multiplier));
}
.v-expansion-panel-title--active:hover
  > :deep(.v-expansion-panel-title__overlay) {
  opacity: calc(0.08 * var(--v-theme-overlay-multiplier));
}
:deep(.v-expansion-panel-text__wrapper) {
  padding: 8px 24px;
}
:deep(.v-list-item-title) {
  font-size: 14px;
}
:deep(.v-list-item-subtitle) {
  font-size: 13px;
}
</style>

<style>
.v-overlay .v-list {
  max-height: 300px;
}
</style>
