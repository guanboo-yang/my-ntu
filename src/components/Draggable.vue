<template>
  <v-list>
    <draggable :list="list" v-bind="dragOptions">
      <template #item="{ element }">
        <v-list-item
          v-ripple="false"
          prepend-avatar="/ntu.png"
          :href="element.href"
          target="_blank"
          rel="noopener"
          @click="props.itemClick?.(element)"
          style="padding: 8px 16px; max-height: 999999px"
        >
          <!-- prevent chrome mobile change font-size -->
          <v-list-item-title>
            <slot :element="element" />
          </v-list-item-title>
          <v-list-item-subtitle>
            <slot name="subtitle" :element="element" />
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
import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import { iconDrag } from '../icons'

const props = defineProps<{
  data: any[]
  sortKey: string
  storageKey: string
  itemClick?: (item: any) => void
}>()

const orderMap = useStorage<{
  [key: string]: number
}>(props.storageKey, {})

const list = computed(() => {
  return props.data.sort((a, b) => {
    const orderA = orderMap.value[a[props.sortKey]] || 0
    const orderB = orderMap.value[b[props.sortKey]] || 0
    return orderA - orderB
  })
})

const tempOrder = ref<any[]>([])

const dragOptions = {
  itemKey: props.sortKey,
  animation: 200,
  ghostClass: 'ghost',
  handle: '.handle',
  move: (e: any) => (tempOrder.value = e.relatedContext.list),
  onEnd: () =>
    tempOrder.value.forEach(
      (item, index) => (orderMap.value[item[props.sortKey]] = index)
    )
}
</script>

<style scoped>
:deep(.v-list-item-title) {
  font-size: 14px;
}
:deep(.v-list-item-subtitle) {
  font-size: 13px;
}
.handle {
  cursor: move;
}
.ghost {
  opacity: 0;
}
</style>
