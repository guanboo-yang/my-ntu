<template>
  <div
    style="display: flex; flex-direction: column; height: calc(100vh - 112px)"
  >
    <v-tabs v-model="tab" bg-color="primary" hide-slider>
      <v-tab value="table">課表</v-tab>
      <v-tab value="list">課程清單</v-tab>
      <v-btn
        variant="text"
        :icon="mdiPlus"
        size="small"
        @click.prevent=""
        style="margin: auto; margin-right: 10px"
      />
    </v-tabs>
    <v-window v-model="tab" :touch="false" style="flex: 1">
      <v-window-item value="table">
        <timetable
          :timetable="timetable"
          :isFetching="isFetching"
          :showInfo="showInfo"
        />
      </v-window-item>
      <v-window-item value="list">
        <course-list
          :data="data || []"
          :isFetching="isFetching"
          :showInfo="showInfo"
        />
      </v-window-item>
    </v-window>
    <v-dialog v-model="dialog">
      <v-card v-if="course" width="350" max-width="calc(100vw - 60px)">
        <v-card-item>
          <v-icon
            :icon="mdiClose"
            size="small"
            style="float: right; margin-top: 4px"
            @click="dialog = false"
          />
          <v-card-title>
            {{ course.cou_cname }}
          </v-card-title>
          <v-card-subtitle style="padding-bottom: 0">
            {{ course.cou_ename }}
          </v-card-subtitle>
          <v-card-subtitle>
            <span> {{ course.tea_cname.trim() }} </span>
            <span class="dot">{{ course.credit }}學分</span>
            <span class="dot" v-if="course.cls_time.trim()">
              {{ course.cls_time.trim() }}
            </span>
            <!-- <span class="dot" v-if="course.visit">旁聽</span> -->
          </v-card-subtitle>
          <v-divider style="margin: 8px 0" />
          <div style="margin: -4px 0 8px 0">
            <v-chip-group disabled column variant="tonal">
              <v-chip
                v-for="link in links[course.ser_no]"
                :key="link.url"
                size="small"
                :style="`color: ${linkToColor(link.name)}`"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.name }}
              </v-chip>
              <v-chip size="small" style="width: 26px; padding: 0 9px">
                +
              </v-chip>
            </v-chip-group>
          </div>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { onBeforeUnmount, ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Timetable from '../components/Timetable.vue'
import CourseList from '../components/CourseList.vue'
import { links } from '../data'
import { linkToColor } from '../utils'
import { CourseInfo } from '../interfaces'
import { mdiPlus } from '@mdi/js'

const tab = ref('list')
const dialog = ref(false)
const course = ref<CourseInfo>()
const timetable = ref<{
  [key: string]: {
    [key: string]:
      | (CourseInfo & {
          span: number
          room: string
        })
      | null
  }
}>({})

const ser_no = [
  13088, 20938, 32336, 44602, 48143, 51383, 57575, 67883, 77445, 97112
]

const { data, isFetching, canAbort, abort } = useFetch(
  import.meta.env.VITE_API_URL + '/course?ser_no=' + ser_no.join(','),
  {
    afterFetch: ({ data, response }) => {
      if (!response.ok) throw new Error(data.message)
      data.forEach((course: CourseInfo) => {
        for (let i = 1; i < 7; i++) {
          const dayKey = ('day' + i) as keyof CourseInfo
          const clsKey = ('clsrom_' + i) as keyof CourseInfo
          const time = course[dayKey].trim()
          if (!time) continue
          for (let j = 0; j < time.length; j++) {
            timetable.value[time[j]] = timetable.value[time[j]] || {}
            timetable.value[time[j]][i] = null
          }
          timetable.value[time[0]][i] = {
            span: time.length,
            room: course[clsKey].trim() || '無教室資訊',
            ...course
          }
        }
      })
      return { data, response }
    }
  }
).json<CourseInfo[]>()

const showInfo = (t: CourseInfo) => {
  course.value = t
  dialog.value = true
}

onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped lang="scss">
.dot::before {
  content: '・';
}
.v-dialog :deep(.v-overlay__content) {
  margin: 0;
  width: unset;
}
.v-dialog :deep(.v-overlay__scrim) {
  background: #000;
}
</style>
