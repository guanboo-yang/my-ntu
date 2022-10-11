<template>
  <v-list>
    <draggable :list="list" v-bind="dragOptions">
      <template #item="{ element }">
        <v-list-item
          v-ripple="false"
          :href="element.href"
          target="_blank"
          rel="noopener"
          @click="props.itemClick?.(element)"
          style="padding: 8px 16px; max-height: 999999px"
        >
          <template #prepend>
            <!-- webp cannot be screenshot in dom-to-image -->
            <v-avatar size="40">
              <v-img src="/ntu.png" />
            </v-avatar>
          </template>
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
    const orderA = orderMap.value[a[props.sortKey]] ?? 100
    const orderB = orderMap.value[b[props.sortKey]] ?? 100
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
  onEnd: () => {
    orderMap.value = tempOrder.value.reduce((acc, item, index) => {
      acc[item[props.sortKey]] = index
      return acc
    }, {})
  }
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
