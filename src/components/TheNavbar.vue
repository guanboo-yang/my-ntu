<template>
	<v-app-bar color="primary" density="comfortable" location="top" flat>
		<v-app-bar-title>
			<b>MY NTU</b>
		</v-app-bar-title>
		<span style="margin: 0 10px">{{ name }}</span>
		<v-btn size="small" :icon="mode === 'light' ? mdiBrightness2 : mdiWhiteBalanceSunny" @click="nextMode()" />
	</v-app-bar>
	<v-bottom-navigation bgColor="primary" mandatory grow>
		<v-btn v-for="link in links" :key="link.text" :to="link.to">
			<v-icon size="large">{{ link.icon }}</v-icon>
			<span style="margin-top: 2px; text-transform: uppercase">{{ link.text }}</span>
		</v-btn>
	</v-bottom-navigation>
</template>

<script setup lang="ts">
	import { mdiCalendarBlank, mdiAccount, mdiLink, mdiChartBar, mdiBrightness2, mdiWhiteBalanceSunny } from '@mdi/js'
	import { useMyTheme } from '../hooks'

	const { mode, nextMode } = useMyTheme()
	const name = '楊冠柏'
	const links = [
		{ text: '帳號', icon: mdiAccount, to: '/profile' },
		{ text: '課表', icon: mdiCalendarBlank, to: '/timetable' },
		{ text: '成績', icon: mdiChartBar, to: '/grades' },
		{ text: '連結', icon: mdiLink, to: '/' },
	]
</script>

<style scoped lang="scss">
	.v-bottom-navigation .v-btn {
		&.v-btn--active :deep(.v-btn__overlay) {
			background: transparent !important;
		}
		&:not(.v-btn--active) {
			opacity: 0.6;
		}
	}
</style>
