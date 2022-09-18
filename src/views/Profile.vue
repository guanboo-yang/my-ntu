<template>
	<v-container>
		<v-card style="text-align: center; transition: none">
			<v-card-item>
				<v-avatar size="80" style="margin: 10px 0; background: #bbb3">
					<v-img src="/ntu.png" />
				</v-avatar>
				<h3>{{ data?.name }}</h3>
				<p style="opacity: 0.5">{{ data?.id }}</p>
			</v-card-item>
			<v-divider style="margin: 10px 0" />
			<v-progress-circular v-if="isFetching" indeterminate style="height: 100px" />
			<v-card-item v-else-if="error">
				<p>{{ error }}</p>
			</v-card-item>
			<v-card-item v-else style="text-align: left; font-size: 15px">
				<v-row>
					<v-col cols="6"> 系所：{{ data.department?.replace(/\s/g, ' ') }} </v-col>
					<v-col cols="6"> 年級：{{ data.grade?.replace(/\s/g, ' ') }} </v-col>
				</v-row>
				<v-row>
					<v-col cols="6"> 性別：{{ data.sex }}</v-col>
					<v-col cols="6"> 狀態：{{ data.status }} </v-col>
				</v-row>
				<!-- <v-row>
					<v-col cols="6"> 身份證字號：{{ data.idNumber }} </v-col>
					<v-col cols="6"> 生日：{{ data.birthday }} </v-col>
				</v-row> -->
				<v-row>
					<v-col cols="12"> 英文名字：{{ data.english }} </v-col>
				</v-row>
				<v-row>
					<v-col cols="12"> 地址：{{ data.address }} </v-col>
				</v-row>
				<v-row>
					<v-col cols="12"> 身分別：{{ data.identity?.replace(/\s/g, ' ') }} </v-col>
				</v-row>
				<v-card-actions style="justify-content: center">
					<v-btn color="primary" @click="logout" to="/login" replace>登出</v-btn>
				</v-card-actions>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
	import { useFetch } from '@vueuse/core'
	import { useUser } from '../hooks'

	const { user, logout } = useUser()

	console.log(import.meta.env.VITE_API_URL + '/profile')

	const { data, error, isFetching } = useFetch(
		import.meta.env.VITE_API_URL + '/profile',
		{
			method: 'POST',
			body: JSON.stringify({
				name: user.id,
				pass: user.pass,
			}),
		},
		{
			initialData: {},
		}
	).json()
</script>

<style scoped></style>
