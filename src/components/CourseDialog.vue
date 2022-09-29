<template>
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
        <v-card-subtitle
          style="padding: 0; cursor: pointer"
          @click="dialogExpand = !dialogExpand"
        >
          <v-row>
            <v-col cols="12"> {{ course.cou_ename }} </v-col>
            <v-col cols="6">
              時間：{{
                course.cls_time.trim() ? course.cls_time.trim() : '無地點資訊'
              }}
            </v-col>
            <v-col cols="6"> 地點：{{ getCoursePlace(course) }} </v-col>
          </v-row>
          <v-expand-transition>
            <v-row v-if="dialogExpand">
              <v-col cols="6"> 教授：{{ course.tea_cname.trim() }} </v-col>
              <v-col cols="6"> 學分：{{ course.credit }} </v-col>
              <v-col cols="6"> 流水號：{{ course.ser_no }} </v-col>
              <v-col cols="6"> 識別碼：{{ course.cou_code }} </v-col>
              <v-col cols="6">
                代碼：{{ course.dpt_abbr?.trim() }}{{ course.cou_teacno }}
              </v-col>
            </v-row>
          </v-expand-transition>
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
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { mdiClose } from '@mdi/js'
import { linkToColor } from '../utils'
import { links } from '../data'
import { CourseInfo } from '../interfaces'

const props = defineProps<{
  course: CourseInfo
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const dialog = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const dialogExpand = ref(false)

const getCoursePlace = (t: CourseInfo) => {
  const place = []
  for (let i = 1; i < 7; i++) {
    const clsKey = ('clsrom_' + i) as keyof CourseInfo
    place.push(t[clsKey].trim())
  }
  return place.filter(v => v).join(', ') || '無教室資訊'
}

watch(
  () => dialog.value,
  value => {
    if (!value) dialogExpand.value = false
  }
)
</script>

<style scoped>
.v-row {
  margin: 0 !important;
}
.v-col {
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px !important;
}
.v-dialog :deep(.v-overlay__content) {
  margin: 0;
  width: unset;
}
.v-dialog :deep(.v-overlay__scrim) {
  background: #000;
}
</style>
