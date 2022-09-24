<template>
  <v-table fixed-header height="calc(100vh - 160px)">
    <thead>
      <tr>
        <th>111-1</th>
        <th v-for="day in '一二三四五六'" :key="day">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(time, timeKey) in times" :key="time">
        <td>
          <p>{{ time }}</p>
          <p>{{ timeKey }}</p>
        </td>
        <template v-for="day in 6" :key="day">
          <template v-if="isFetching">
            <td
              v-if="day === 1 && timeKey === '0'"
              rowspan="15"
              colspan="5"
              style="vertical-align: middle; text-align: center"
            >
              <v-progress-circular indeterminate />
            </td>
          </template>
          <template v-else>
            <td v-if="timetable[timeKey]?.[day] === undefined" />
            <td
              v-else-if="timetable[timeKey]?.[day]"
              :rowspan="timetable[timeKey][day]!.span"
              :style="`background-color: ${getCourseColor(
                timetable[timeKey][day]!.cou_cname
              )};`"
              @click="showInfo(timetable[timeKey][day]!)"
            >
              <div
                :style="`max-height: ${
                  42 * timetable[timeKey][day]!.span
                }px; overflow: scroll;
                `"
              >
                {{ timetable[timeKey][day]!.cou_cname }}
                <p>{{ timetable[timeKey][day]!.room }}</p>
              </div>
            </td>
          </template>
        </template>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { times } from '../data'
import type { CourseInfo } from '../interfaces'
import { getCourseColor } from '../utils'

defineProps<{
  timetable: {
    [key: string]: {
      [key: string]:
        | (CourseInfo & {
            span: number
            room: string
          })
        | null
    }
  }
  isFetching: boolean
  showInfo: (t: CourseInfo) => void
}>()
</script>

<style scoped lang="scss">
.v-table {
  $width: 40px;
  border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  :deep(.v-table__wrapper) {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  tr {
    background-color: rgb(var(--v-theme-background));
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
        z-index: 1;
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
      text-align: center !important;
      &:first-child {
        z-index: 2;
      }
    }
    td {
      vertical-align: top;
      height: unset !important;
      background-color: rgb(var(--v-theme-background));
      p {
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
