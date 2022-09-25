<template>
  <div
    style="display: flex; flex-direction: column; height: calc(100vh - 112px)"
  >
    <v-tabs v-model="tab" bg-color="primary" hide-slider>
      <v-tab value="table">課表</v-tab>
      <v-tab value="list">課程清單</v-tab>
      <!-- <v-tab value="search">搜尋</v-tab> -->
      <v-btn
        variant="text"
        :icon="mdiPlus"
        :disabled="isSaving || isFetching"
        size="small"
        @click.prevent="clickAddCourse"
        style="margin: auto; margin-right: 0"
      />
      <v-btn
        v-if="tab === 'table' || tab === 'list'"
        variant="text"
        :icon="mdiContentSave"
        :loading="isSaving"
        :disabled="isSaving || isFetching"
        size="small"
        @click.prevent="saveDomAsImage"
        style="margin: auto 10px auto 0"
      />
    </v-tabs>
    <v-window v-model="tab" :touch="false" style="flex: 1">
      <v-window-item value="table">
        <course-table
          :timetable="timetable"
          :isFetching="isFetching"
          :showInfo="showInfo"
          class="save-to-image"
        />
      </v-window-item>
      <v-window-item value="list">
        <course-list
          :data="data || []"
          :isFetching="isFetching"
          :showInfo="showInfo"
          class="save-to-image"
        />
      </v-window-item>
      <!-- <v-window-item value="search">
        <course-search />
      </v-window-item> -->
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
          <v-card-subtitle>
            <v-row dense>
              <v-col cols="6">教授：{{ course.tea_cname.trim() }} </v-col>
              <v-col cols="6"> 學分：{{ course.credit }} </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="6" v-if="course.cls_time.trim()">
                時間：{{ course.cls_time.trim() }}
              </v-col>
              <!-- <v-col cols="6"> 上課地點：{{ course.cls_room.trim() }} </v-col> -->
            </v-row>
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
    <v-dialog v-model="addCourseDialog">
      <v-card width="350" max-width="calc(100vw - 60px)">
        <v-card-item>
          <v-icon
            :icon="mdiClose"
            size="small"
            style="float: right; margin-top: 4px"
            @click="addCourseDialog = false"
          />
          <v-card-title> 新增課程 </v-card-title>
          <v-form
            ref="form"
            @submit.prevent="addCourse"
            style="display: flex; gap: 12px; margin-top: 8px"
          >
            <v-text-field
              v-model="addCourseCode"
              label="課程流水號"
              variant="outlined"
              density="compact"
              autofocus
            />
            <v-btn
              type="submit"
              color="primary"
              variant="tonal"
              :loading="isFetching"
              :disabled="isFetching || !addCourseCode"
              style="height: 40px"
            >
              新增
            </v-btn>
          </v-form>
        </v-card-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useFetch, useStorage } from '@vueuse/core'
import { computed, onBeforeUnmount, ref } from 'vue'
import { mdiClose } from '@mdi/js'
import CourseTable from '../components/CourseTable.vue'
import CourseList from '../components/CourseList.vue'
import { links } from '../data'
import { linkToColor } from '../utils'
import { CourseInfo } from '../interfaces'
import { mdiPlus, mdiContentSave } from '@mdi/js'
import { toPng } from 'html-to-image'

// 13088, 20938, 32336, 44602, 48143, 51383, 57575, 67883, 77445, 97112
const ser_no = useStorage<number[]>('courseList', [])
const tab = ref('list')
const dialog = ref(false)
const addCourseDialog = ref(false)
const addCourseCode = ref('')
const course = ref<CourseInfo>()
const isSaving = ref(false)

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

const url = computed(() => {
  if (ser_no.value.length === 0) return ''
  return (
    import.meta.env.VITE_API_URL + '/course?ser_no=' + ser_no.value.join(',')
  )
})

const { data, isFetching, canAbort, abort } = useFetch(url, {
  refetch: true,
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
}).json<CourseInfo[]>()

const showInfo = (t: CourseInfo) => {
  course.value = t
  dialog.value = true
}

const saveDomAsImage = () => {
  if (isSaving.value) return
  isSaving.value = true
  const selector =
    tab.value === 'table' ? '.save-to-image table' : '.save-to-image .v-list'
  const dom = document.querySelector(selector) as HTMLElement
  console.log(dom)
  if (!dom) return
  toPng(dom)
    .then(dataUrl => {
      const link = document.createElement('a')
      link.download = '課表.png'
      link.href = dataUrl
      link.click()
    })
    .finally(() => (isSaving.value = false))
}

const clickAddCourse = () => {
  addCourseDialog.value = true
}

const addCourse = () => {
  addCourseDialog.value = false
  if (!addCourseCode.value) return
  ser_no.value = Array.from(
    new Set(ser_no.value.concat(addCourseCode.value.split(',').map(Number)))
  ).filter(Boolean)
  addCourseCode.value = ''
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
