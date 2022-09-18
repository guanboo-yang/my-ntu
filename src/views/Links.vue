<template>
	<v-list>
		<v-list-item
			v-for="link in links"
			:key="link.title"
			:title="link.title"
			:subtitle="link.subtitle"
			:append-icon="mdiChevronRight"
			prepend-avatar="/ntu.png"
			style="padding: 8px 16px"
			:href="link.href"
			target="_blank"
			rel="noopener"
		/>
		<v-list>
			<v-list-item v-for="course in data" :key="course.ser_no" :title="course.cou_cname" :subtitle="`${course.tea_cname} ${course.cls_time}`" />
		</v-list>
	</v-list>
</template>

<script setup lang="ts">
	import { mdiChevronRight } from '@mdi/js'
	import { useFetch } from '@vueuse/core'
	import { onBeforeUnmount } from 'vue'

	const ser_no = [13088, 20938, 32336, 44602, 48143, 51383, 57575, 67883, 77445, 97112]
	const { data, canAbort, abort } = useFetch(import.meta.env.VITE_API_URL + '/course?ser_no=' + ser_no.join(',')).json()

	const links = [
		{
			title: '臺灣大學電子郵件系統',
			subtitle: 'NTU Mail',
			href: 'https://webmail2.ntu.edu.tw/',
		},
		{
			title: '學生學習歷程檔案',
			subtitle: 'NTU ePortfolio',
			href: 'https://if163.aca.ntu.edu.tw/',
		},
		{
			title: '台大課程網',
			subtitle: 'NTU course Information',
			href: 'https://nol.ntu.edu.tw/',
		},
		{
			title: '台大選課系統',
			subtitle: 'Course Selection System',
			href: 'https://if177.aca.ntu.edu.tw/',
		},
		{
			title: 'NTU Cool',
			subtitle: 'NTU Course OnLine',
			href: 'https://cool.ntu.edu.tw/',
		},
		{
			title: 'Ceiba',
			href: 'https://ceiba.ntu.edu.tw/',
		},
		{
			title: '網路額度流量查詢',
			href: 'http://140.112.2.212/',
		},
	]
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
