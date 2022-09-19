<template>
	<div style="display: flex; flex-direction: column; height: calc(100vh - 112px)">
		<v-tabs v-model="tab" centered bg-color="primary" hide-slider>
			<v-tab value="summary">總覽</v-tab>
			<v-tab v-for="option of options" :key="option" :value="option"> {{ grades[option]?.year }}學年<br />{{ grades[option]?.semester === '1' ? '上學期' : '下學期' }} </v-tab>
			<v-tab v-if="isFetching" disabled>努力爬取中...</v-tab>
		</v-tabs>
		<v-window v-model="tab" style="flex: 1">
			<v-window-item value="summary" style="text-align: center">
				<v-progress-circular v-if="isFetching" indeterminate style="height: 200px" />
				<template v-else-if="error">
					<p style="padding: 50px 0 10px 0">爬取失敗... {{ error }}</p>
					<v-btn color="primary" @click="execute()" style="margin: 5px">重新爬取</v-btn>
					<v-btn color="primary" @click="logout" :to="{ name: '登入', query: { redirect: '/grades' } }" replace style="margin: 5px">重新登入</v-btn>
				</template>
				<v-list v-else variant="elevated" style="padding: 0">
					<v-list-item v-for="option of options" :key="option" @click="tab = option" class="secondary">
						<v-row>
							<v-col cols="3" style="text-align: center">
								<span>{{ grades[option]?.year }}學年</span>
								<br />
								<span>{{ grades[option]?.semester === '1' ? '上學期' : '下學期' }}</span>
							</v-col>
							<v-col cols="3" style="text-align: center">
								<span>學分</span>
								<br />
								<span>{{ grades[option]?.credits || '--' }}</span>
							</v-col>
							<v-col cols="3" style="text-align: center">
								<span>排名</span>
								<br />
								<span>{{ grades[option]?.rank || '--' }}</span>
							</v-col>
							<v-col cols="3" style="text-align: center">
								<span>平均</span>
								<br />
								<span>{{ grades[option]?.gpa || '--' }}</span>
							</v-col>
						</v-row>
					</v-list-item>
					<p style="opacity: 0.5; font-size: 14px">
						<span>重新登入以更新成績</span>
						<br />
						<span>資料來源：NTU ePortfolio</span>
					</p>
				</v-list>
			</v-window-item>
			<v-window-item v-for="option of options" :key="option" :value="option">
				<v-list variant="elevated" style="padding: 0">
					<v-list-item class="secondary">
						<v-row>
							<v-col cols="4" style="text-align: center">
								<span>學分</span>
								<br />
								<span style="font-weight: 500">{{ grades[option]?.credits || '--' }}</span>
							</v-col>
							<v-col cols="4" style="text-align: center">
								<span>排名</span>
								<br />
								<span style="font-weight: 500">{{ grades[option]?.rank || '--' }}</span>
							</v-col>
							<v-col cols="4" style="text-align: center">
								<span>平均</span>
								<br />
								<span style="font-weight: 500">{{ grades[option]?.gpa || '--' }}</span>
							</v-col>
						</v-row>
					</v-list-item>
					<v-list-item v-for="(course, index) in grades[option]?.courses" :key="index">
						<v-list-item-title>{{ course.name }}</v-list-item-title>
						<v-list-item-subtitle>{{ course.credits }}學分</v-list-item-subtitle>
						<template #append>
							<span style="opacity: 0.6; font-size: 14px">{{ course.grade || '成績未到' }}</span>
						</template>
					</v-list-item>
				</v-list>
			</v-window-item>
		</v-window>
	</div>
</template>

<script setup lang="ts">
	import { useFetch, useStorage } from '@vueuse/core'
	import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
	import { useUser } from '../hooks'

	type Grades = {
		[key: string]: {
			courses: {
				name: string
				credits: number
				grade: number
			}[]
			semester: string
			year: string
			gpa: string
			rank: string
			credits: string
		}
	}

	const grades = useStorage<Grades>('grades', {})

	const cookies = useStorage<any[]>('cookies', [])

	const { logout } = useUser()

	const tab = ref<string>('summary')
	const { error, isFetching, execute, canAbort, abort } = useFetch(
		import.meta.env.VITE_API_URL + '/grade',
		{
			method: 'POST',
			body: JSON.stringify({ cookies: cookies.value }),
		},
		{
			immediate: false,
			onFetchError: ({ response, error }) => {
				return { response, error }
			},
			afterFetch: ({ data, response }) => {
				if (response.ok) grades.value = data
				return { data, response }
			},
		}
	).json<{}>()

	onMounted(() => {
		if (!Object.keys(grades.value).length) execute()
	})

	const options = computed(() => grades.value && Object.keys(grades.value).sort((a, b) => Number(b) - Number(a)))

	onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped lang="scss">
	:deep(.v-list-item-title) {
		font-size: 15px;
	}
	:deep(.v-list-item-subtitle) {
		font-size: 14px;
	}
	.v-tabs .v-btn {
		&.v-btn--active :deep(.v-btn__overlay) {
			background: transparent !important;
		}
		&:not(.v-btn--active) {
			opacity: 0.6;
		}
	}
	.v-tab {
		border-radius: 0;
		letter-spacing: 0;
		min-width: 80px;
	}
	.v-window :deep(.v-window__container) {
		height: 100%;
		.v-window-item {
			height: 100%;
			overflow-y: auto;
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
	.v-list-item {
		padding: 6px 16px !important;
		margin: 12px;
		border-radius: 4px;
		font-size: 14px;
		&.secondary {
			background: rgba(var(--v-theme-secondary));
		}
	}
	:deep(.v-slide-group__content) {
		/* flex: 0 1 auto; */
		/* overflow-x: auto; */
		scrollbar-width: none;
	}
	:deep(.v-slide-group__content)::-webkit-scrollbar {
		display: none;
	}
</style>
