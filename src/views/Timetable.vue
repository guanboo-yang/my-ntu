<template>
  <div>
    <v-tabs v-model="tab" bg-color="primary" hide-slider>
      <v-tab value="table">時數表</v-tab>
      <v-tab value="list">課程清單</v-tab>
      <v-btn
        class="v-tab"
        variant="text"
        :icon="mdiPlus"
        size="small"
        @click.prevent=""
        min-width="70px"
      />
    </v-tabs>
    <v-window v-model="tab" :touch="false">
      <v-window-item value="table">
        <v-table fixed-header>
          <thead>
            <tr>
              <th>111-1</th>
              <th v-for="day in '一二三四五六'" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, key) in times" :key="time">
              <td>
                <p>{{ time }}</p>
                <p>{{ key }}</p>
              </td>
              <template v-for="day in 6" :key="day">
                <template v-if="isFetching">
                  <td
                    v-if="day === 1 && key === '0'"
                    rowspan="15"
                    colspan="5"
                    style="vertical-align: middle; text-align: center"
                  >
                    <v-progress-circular indeterminate />
                  </td>
                </template>
                <template v-else>
                  <td v-if="timetable[key]?.[day] === undefined" />
                  <td
                    v-else-if="timetable[key]?.[day]"
                    :rowspan="timetable[key][day].span"
                    :style="`background-color: ${getCourseColor(
                      timetable[key][day].cou_cname
                    )};`"
                    @click="showInfo(timetable[key][day])"
                  >
                    <div
                      :style="`max-height: ${
                        42 * timetable[key][day].span
                      }px; overflow: scroll;
                `"
                    >
                      {{ timetable[key][day].cou_cname }}
                      <p>{{ timetable[key][day].room }}</p>
                    </div>
                  </td>
                </template>
              </template>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item value="list">
        <v-list>
          <div v-if="isFetching" style="text-align: center">
            <v-progress-circular indeterminate style="height: 200px" />
          </div>
          <v-list-item
            v-for="course in data"
            :key="course.ser_no"
            :title="course.cou_cname"
            :subtitle="
              course.ser_no +
              ' ' +
              course.tea_cname +
              ' ' +
              course.cls_time +
              ' ' +
              course.cou_code +
              ' ' +
              course.dpt_abbr.trim() +
              course.cou_teacno
            "
            prepend-avatar="/ntu.png"
            style="padding: 8px 16px"
            @click="showInfo(course)"
          />
        </v-list>
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
import { links, times } from '../data'
import { linkToColor, getCourseColor } from '../utils'
import { CourseInfo } from '../interfaces'
import { mdiPlus } from '@mdi/js'

const dialog = ref(false)
const course = ref<CourseInfo>()
const timetable = ref<any>({})
const tab = ref('table')

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
          console.log(time)
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
:deep(.v-list-item-title) {
  font-size: 14px;
}
:deep(.v-list-item-subtitle) {
  font-size: 12px;
}
.v-dialog :deep(.v-overlay__content) {
  margin: 0;
  width: unset;
}
.v-dialog :deep(.v-overlay__scrim) {
  background: #000;
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
      padding-bottom: 0 !important;
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
      &:not(:first-child) {
        // min-width: calc((100vw - $width) / v-bind(showDays));
        min-width: calc((100vw - $width) / 5);
        transition: min-width 0.3s ease;
        font-size: 13px !important;
      }
    }
    th {
      height: 42px !important;
      color: #fff !important;
      background-color: rgb(var(--v-theme-primary)) !important;
      text-align: center !important;
      &:first-child {
        z-index: 1001;
      }
    }
    td {
      vertical-align: top;
      height: unset !important;
      background-color: $background;
      p {
        line-height: 1.42;
        &:nth-child(1) {
          opacity: 0.5;
        }
        &:nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
