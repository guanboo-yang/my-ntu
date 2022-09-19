<template>
  <v-table fixed-header height="calc(100vh - 112px)">
    <thead>
      <tr @click="choose = true">
        <th class="bg-primary">{{ semester }}</th>
        <th class="bg-primary" v-for="day in weekdays" :key="day">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in 15" :key="row">
        <td>
          <p style="opacity: 0.6">{{ timeStamp[row - 1] }}</p>
          <span v-if="row < 12">{{ row - 1 }}</span>
          <span v-else>{{ (row - 2).toString(16).toUpperCase() }}</span>
        </td>
        <template v-for="col in 6" :key="col">
          <template v-for="t in [timetable[row + col * 15 - 16]]">
            <td v-if="t === undefined" />
            <td
              v-else-if="t"
              :rowspan="t.time.length"
              :style="`background-color: ${getCourseColor(t.name)}; ${
                t.visit && 'opacity: 0.5'
              }`"
              @click="showInfo(t)"
            >
              <p>{{ t.name }}</p>
              <p style="opacity: 0.6">{{ t.location }}</p>
            </td>
          </template>
        </template>
      </tr>
      <tr v-if="noTime">
        <td :colspan="showDays === 5 ? 6 : 7">
          「{{
            noTime?.map(n => n.name).join('、')
          }}」因上課時間特殊而未能顯示於時間表，請留意上課時間並避免衝堂。
        </td>
      </tr>
    </tbody>
    <v-dialog v-model="dialog">
      <v-card v-if="course" width="300" style="margin: auto">
        <v-card-item>
          <v-icon
            :icon="mdiClose"
            size="small"
            style="float: right; margin: 4px"
            @click="dialog = false"
          />
          <v-card-title style="padding-bottom: 0">
            {{ course.name }}
          </v-card-title>
          <p style="font-size: 14px">
            <span>{{ course.location }}</span>
            <span class="dot" v-if="course.professor">
              {{ course.professor }}
            </span>
            <span class="dot" v-if="course.credits">
              {{ course.credits }}學分
            </span>
            <span class="dot" v-if="course.visit">旁聽</span>
            <!-- <span>
              {{
                [course.location, course.professor].filter(Boolean).join(' ・ ')
              }}
            </span> -->
          </p>
          <v-divider style="margin: 8px 0" />
          <div style="margin: -4px 0 8px 0">
            <v-chip-group disabled column variant="tonal">
              <v-chip
                v-for="link in course.links"
                :key="link.url"
                size="small"
                :style="`color: ${linkToColor(link.name)}`"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.name }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-card-item>
      </v-card>
    </v-dialog>
    <v-dialog v-model="choose">
      <v-card width="300" style="margin: auto">
        <v-card-text style="text-align: center">
          <v-card-title style="padding: 0 0 10px 0">設定</v-card-title>
          <v-select
            v-model="semester"
            :items="semestersOptions"
            variant="outlined"
            density="comfortable"
            hide-details
          />
          <v-switch
            v-model="showDays"
            :falseValue="5"
            :trueValue="6"
            label="顯示星期六"
            inset
            hide-details
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { data } from '../data'
import { Semester, CourseInfo } from '../interfaces'
import { generateRandomColor, parseInfo } from '../utils'
import { mdiClose } from '@mdi/js'
import { useRouteQuery } from '@vueuse/router'
// defineProps<{}>()
const semester: Readonly<any> = useRouteQuery('s', '111-1')
const dialog = ref(false)
const choose = ref(false)
const showDays = ref(5)
const course = ref<CourseInfo>()
const weekdays = ['一', '二', '三', '四', '五', '六']
const timeStamp = [
  '07:10',
  '08:10',
  '09:10',
  '10:20',
  '11:20',
  '12:20',
  '13:20',
  '14:20',
  '15:30',
  '16:30',
  '17:30',
  '18:25',
  '19:20',
  '20:15',
  '21:10'
]
const semesters = data.reduce((acc, cur) => {
  acc[`${cur.year}-${cur.semester}`] = cur
  return acc
}, {} as Record<string, Semester>)
const semestersOptions = computed(() =>
  Object.keys(semesters)
    .map(s => ({
      title: `${semesters[s].year}學年 ${
        semesters[s].semester === 1 ? '上' : '下'
      }學期`,
      value: s
    }))
    .sort((a, b) => b.value.localeCompare(a.value))
)
const timetable = computed(() =>
  semesters[semester.value].courses.reduce((acc, cur) => {
    const info = parseInfo(cur.info)
    // console.log(info)
    for (const i of info) {
      for (let d = 0; d < i.time.length; d++) {
        if (d == 0) acc[i.time[d]] = { ...cur, ...i }
        else acc[i.time[d]] = null
      }
    }
    return acc
  }, {} as Record<number, CourseInfo | null>)
)
const noTime = computed(() => {
  const noTime = semesters[semester.value].courses.filter(
    c => !parseInfo(c.info).length
  )
  return noTime.length ? noTime : null
})
const courseColorMap = new Map<string, string>()
const getCourseColor = (name: string) => {
  if (!courseColorMap.has(name)) courseColorMap.set(name, generateRandomColor())
  return courseColorMap.get(name)
}
const showInfo = (t: CourseInfo) => {
  course.value = t
  dialog.value = true
}
const linkColorMap = new Map<string, string>([
  ['Ceiba', '#82c400'],
  ['Cool', '#003366'],
  ['Gather Town', '#00a0e9'],
  ['Github', ''],
  ['Gradescope', '#1ca0a0'],
  ['Judge', ''],
  ['Mail', ''],
  ['Meet', ''],
  ['Slido', '#39ac37'],
  ['Webex', '#00bbed'],
  ['YouTube', '#ff3200']
])
const linkToColor = (link: string) => {
  return linkColorMap.get(link) || '#000'
}
</script>

<style scoped lang="scss">
.dot::before {
  content: '・';
}
:deep(.v-overlay__scrim) {
  background: #000 !important;
}
.v-table {
  $width: 42px;
  $background: rgb(var(--v-theme-background));
  background-color: $background;
  border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  :deep(.v-table__wrapper) {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  tr {
    &:hover {
      background: none !important;
    }
    th,
    td {
      padding: 2px !important;
      border-right: thin solid
        rgba(var(--v-border-color), var(--v-border-opacity));
      &:first-child {
        z-index: 1000;
        min-width: $width;
        position: sticky;
        left: 0;
        text-align: center;
        border-left: thin solid
          rgba(var(--v-border-color), var(--v-border-opacity));
      }
    }
    th {
      text-align: center !important;
      height: 50px !important;
      &:first-child {
        z-index: 1001;
      }
    }
    td {
      background-color: $background;
      &:not(:first-child) {
        min-width: calc((100vw - $width) / v-bind(showDays));
        transition: min-width 0.3s ease;
        vertical-align: top;
        font-size: 13px !important;
      }
    }
  }
}
</style>
