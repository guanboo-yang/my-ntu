<template>
	<v-list>
		<v-list-item
			v-for="course in data"
			:key="course.ser_no"
			:title="course.cou_cname"
			:subtitle="`${course.tea_cname} ${course.cls_time} ${course.cou_code} ${course.dpt_abbr}${course.cou_teacno}`"
			prepend-avatar="/ntu.png"
			style="padding: 8px 16px"
		/>
	</v-list>
</template>

<script setup lang="ts">
	import { useFetch } from '@vueuse/core'
	import { onBeforeUnmount } from 'vue'

	const ser_no = [13088, 20938, 32336, 44602, 48143, 51383, 57575, 67883, 77445, 97112]
	const { data, canAbort, abort } = useFetch(import.meta.env.VITE_API_URL + '/course?ser_no=' + ser_no.join(',')).json()

	onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped>
	:deep(.v-list-item-title) {
		font-size: 14px;
	}
	:deep(.v-list-item-subtitle) {
		font-size: 12px;
	}
</style>
