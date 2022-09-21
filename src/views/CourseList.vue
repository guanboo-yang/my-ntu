<template>
  <div>
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
    <v-dialog v-model="dialog">
      <v-card v-if="course" width="350">
        <v-card-item>
          <v-icon
            :icon="mdiClose"
            size="small"
            style="float: right; margin: 4px"
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
import { links } from '../data'
import { linkToColor } from '../utils'

type CourseInfo = {
  ser_no: string
  cou_code: string
  cou_cname: string
  cou_ename: string
  dpt_abbr: string
  cou_teacno: string
  tea_cname: string
  cls_time: string
  credit: string
}

const dialog = ref(false)
const course = ref<CourseInfo>()

const ser_no = [
  13088, 20938, 32336, 44602, 48143, 51383, 57575, 67883, 77445, 97112
]

const { data, isFetching, canAbort, abort } = useFetch(
  import.meta.env.VITE_API_URL + '/course?ser_no=' + ser_no.join(',')
).json()

const showInfo = (t: CourseInfo) => {
  course.value = t
  dialog.value = true
}

onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped>
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
</style>
