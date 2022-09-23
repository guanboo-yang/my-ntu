<template>
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
</template>

<script setup lang="ts">
import { CourseInfo } from '../interfaces'

defineProps<{
  data: CourseInfo[] | null
  isFetching: boolean
  showInfo: (course: CourseInfo) => void
}>()
</script>

<style scoped>
:deep(.v-list-item-title) {
  font-size: 14px;
}
:deep(.v-list-item-subtitle) {
  font-size: 12px;
}
</style>
