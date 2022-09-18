<template>
	<v-container>
		<v-card style="text-align: center; transition: none">
			<v-card-item>
				<v-avatar size="80" style="background: #bbb3; margin-bottom: 12px">
					<v-img src="/ntu.png" />
				</v-avatar>
				<h3>{{ profile.name }}</h3>
				<p style="opacity: 0.5">{{ profile.id }}</p>
			</v-card-item>
			<v-divider />
			<v-progress-circular v-if="isFetching" indeterminate style="height: 100px" />
			<v-card-item v-else-if="error">
				<p>{{ error }}</p>
			</v-card-item>
			<v-card-item v-else style="text-align: left; font-size: 15px">
				<v-row>
					<v-col cols="6"> 系所：{{ profile.department?.replace(/\s/g, ' ') }} </v-col>
					<v-col cols="6"> 年級：{{ profile.grade?.replace(/\s/g, ' ') }} </v-col>
				</v-row>
				<v-row>
					<v-col cols="6"> 性別：{{ profile.sex }}</v-col>
					<v-col cols="6"> 狀態：{{ profile.status }} </v-col>
				</v-row>
				<!-- <v-row>
					<v-col cols="6"> 身份證字號：{{ profile.idNumber }} </v-col>
					<v-col cols="6"> 生日：{{ profile.birthday }} </v-col>
				</v-row> -->
				<v-row>
					<v-col cols="12"> 英文名字：{{ profile.english }} </v-col>
				</v-row>
				<v-row>
					<v-col cols="12" style="display: flex">
						<span style="white-space: nowrap">地址：</span>
						{{ profile.address }}
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12"> 身分別：{{ profile.identity?.replace(/\s/g, ' ') }} </v-col>
				</v-row>
			</v-card-item>
			<v-divider />
			<v-card-item>
				<v-btn color="primary" @click="logout" to="/login" replace>登出</v-btn>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
	import { useFetch, useStorage } from '@vueuse/core'
	import { onBeforeUnmount, onMounted } from 'vue'
	import { useUser } from '../hooks'
	import type { Profile } from '../interfaces'

	const { logout } = useUser()

	const profile = useStorage<Profile>('profile', {
		name: '訪客',
	})

	const cookies = useStorage('cookies', [])

	const { execute, error, isFetching, canAbort, abort } = useFetch(
		import.meta.env.VITE_API_URL + '/profile',
		{
			method: 'POST',
			body: JSON.stringify({ cookies: cookies.value }),
		},
		{
			immediate: false,
			afterFetch: ({ data, response }) => {
				console.log(response.ok, data)
				if (response.ok) profile.value = data
				return { data, response }
			},
		}
	).json<Profile>()

	onMounted(() => {
		if (Object.keys(profile.value).length <= 1) execute()
	})

	onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped>
	.v-card-item {
		padding: 1rem;
	}
</style>
