<template>
  <v-fade-transition leave-absolute>
    <div v-if="isFetching" style="text-align: center">
      <v-progress-circular indeterminate style="height: 200px" />
    </div>
    <draggable
      v-else
      :data="props.data"
      sortKey="ser_no"
      storageKey="courseOrder"
      :itemClick="props.showInfo"
    >
      <template #default="{ element }">
        {{ element.cou_cname }}
      </template>
      <template #subtitle="{ element }">
        {{ element.tea_cname }}
        {{ element.cls_time }}
        {{ element.dpt_abbr?.trim() }}{{ element.cou_teacno }}
      </template>
    </draggable>
  </v-fade-transition>
</template>

<script setup lang="ts">
import { CourseInfo } from '../interfaces'
import Draggable from '../components/Draggable.vue'

const props = defineProps<{
  data: CourseInfo[]
  isFetching: boolean
  showInfo: (course: CourseInfo) => void
}>()
</script>
