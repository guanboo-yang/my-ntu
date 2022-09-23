<template>
  <v-list>
    <div v-if="isFetching" style="text-align: center">
      <v-progress-circular indeterminate style="height: 200px" />
    </div>
    <draggable v-else :list="list" v-bind="dragOptions">
      <template #item="{ element }">
        <v-list-item
          :title="element.cou_cname"
          v-ripple="false"
          prepend-avatar="/ntu.png"
          style="padding: 8px 16px"
          class="list-group-item"
          @click="showInfo(element)"
        >
          <v-list-item-subtitle>
            {{ element.tea_cname }}
            {{ element.cls_time }}
            {{ element.dpt_abbr.trim() }}{{ element.cou_teacno }}
          </v-list-item-subtitle>
          <template #append>
            <v-icon class="handle" size="small" :icon="iconDrag" />
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

const list = ref<CourseInfo[]>(props.data)

const dragOptions = {
  itemKey: 'ser_no',
  animation: 200,
  ghostClass: 'ghost',
  handle: '.handle',
  // group: 'description',
  // componentData: { type: 'transition-group' },
  move: (e: any) => (list.value = e.relatedContext.list),
  onEnd: () => {
    const orderMap: Record<string, number> = {}
    list.value.forEach((item, index) => (orderMap[item.ser_no] = index))
    console.log(JSON.stringify(orderMap))
  }
}

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
  text-size-adjust: none;
  -webkit-text-size-adjust: none;
}
.handle {
  cursor: move;
}
.ghost {
  opacity: 0;
}
</style>
