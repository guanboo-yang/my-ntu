<template>
  <v-list>
    <div v-if="isFetching" style="text-align: center">
      <v-progress-circular indeterminate style="height: 200px" />
    </div>
    <draggable
      v-else
      :list="list"
      item-key="cou_cname"
      class="list-group"
      ghost-class="ghost"
      :move="checkMove"
      @end="onEnd"
      handle=".handle"
    >
      <template #item="{ element }">
        <v-list-item
          :title="element.cou_cname"
          :subtitle="
            element.ser_no +
            ' ' +
            element.tea_cname +
            ' ' +
            element.cls_time +
            ' ' +
            element.cou_code +
            ' ' +
            element.dpt_abbr.trim() +
            element.cou_teacno
          "
          prepend-avatar="/ntu.png"
          style="padding: 8px 16px"
          class="list-group-item"
          @click="showInfo(element)"
        >
          <template #append>
            <v-icon class="handle" size="small">
              {{ iconDrag }}
            </v-icon>
          </template>
        </v-list-item>
      </template>
    </draggable>
  </v-list>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { CourseInfo } from '../interfaces'
import { ref, watch } from 'vue'
import { iconDrag } from '../icons'

const props = defineProps<{
  data: CourseInfo[]
  isFetching: boolean
  showInfo: (course: CourseInfo) => void
}>()

const list = ref<CourseInfo[]>([])

const checkMove = (e: any) => (list.value = e.relatedContext.list)
const onEnd = () =>
  console.log(JSON.stringify(list.value.map((e: any) => e.cou_cname.trim())))

watch(
  () => props.isFetching,
  () => (list.value = props.data)
)
</script>

<style scoped>
:deep(.v-list-item-title) {
  font-size: 14px;
}
:deep(.v-list-item-subtitle) {
  font-size: 12px;
}
</style>
