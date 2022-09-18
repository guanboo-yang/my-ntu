<template>
	<v-container style="text-align: center">
		<h2 style="margin: 20px 0">登入學校帳號</h2>
		<v-form lazy-validation style="margin: 10px auto; max-width: 300px" ref="form" @submit.prevent="execute()">
			<v-text-field
				v-model="input.name"
				variant="outlined"
				density="compact"
				label="Student ID"
				:rules="[v => !!v || 'Student ID is required']"
				required
				type="text"
				style="margin-bottom: 5px"
			/>
			<v-text-field
				v-model="input.pass"
				variant="outlined"
				density="compact"
				label="Password"
				:rules="[v => !!v || 'Password is required']"
				required
				:append-inner-icon="showPass ? mdiEye : mdiEyeOff"
				@click:append-inner="showPass = !showPass"
				:type="showPass ? 'text' : 'password'"
				style="margin-bottom: 5px"
			/>
			<v-btn color="primary" @click="reset" style="margin-right: 10px">Reset</v-btn>
			<v-btn color="primary" type="submit" :loading="isFetching">Login</v-btn>
		</v-form>
	</v-container>
</template>

<script setup lang="ts">
	import { onBeforeUnmount, reactive, ref } from 'vue'
	import { useUser } from '../hooks'
	import { mdiEye, mdiEyeOff } from '@mdi/js'
	import { useRoute, useRouter } from 'vue-router'
	import { useFetch } from '@vueuse/core'

	const router = useRouter()
	const route = useRoute()
	const input = reactive({ name: '', pass: '' })
	const showPass = ref(false)
	const form = ref<typeof import('vuetify/components')['VForm'] | null>(null)

	const { login } = useUser()

	const { isFetching, execute, canAbort, abort } = useFetch(
		import.meta.env.VITE_API_URL + '/login',
		{ method: 'POST' },
		{
			immediate: false,
			beforeFetch: ctx => {
				ctx.options.body = JSON.stringify(input)
				return ctx
			},
			afterFetch: ({ data, response }) => {
				login(data.cookie)
				router.push(String(route.query.redirect || '/'))
				form.value?.reset()
				form.value?.resetValidation()
				return { data, response }
			},
		}
	).json()

	const reset = () => form.value?.reset()

	onBeforeUnmount(() => canAbort && abort())
</script>

<style scoped></style>
