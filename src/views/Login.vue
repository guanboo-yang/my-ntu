<template>
	<v-container style="text-align: center">
		<h2 style="margin: 20px 0">Login</h2>
		<form style="margin: 10px auto; max-width: 300px">
			<!-- id input -->
			<v-text-field
				v-model="id"
				variant="outlined"
				density="compact"
				label="Student ID"
				:rules="[v => !!v || 'Student ID is required']"
				required
				type="text"
				style="margin-bottom: 5px"
			/>
			<!-- password input -->
			<v-text-field
				v-model="pass"
				variant="outlined"
				density="compact"
				label="Password"
				:rules="[v => !!v || 'Password is required']"
				required
				:append-inner-icon="showPass ? mdiEye : mdiEyeOff"
				@click:append-inner="showPass = !showPass"
				:type="showPass ? 'text' : 'password'"
			/>
		</form>
		<v-btn color="primary" @click="clickLogin">Login</v-btn>
	</v-container>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useUser } from '../hooks'
	import { mdiEye, mdiEyeOff } from '@mdi/js'
	import { useRoute, useRouter } from 'vue-router'

	const router = useRouter()
	const route = useRoute()
	const id = ref('')
	const pass = ref('')
	const showPass = ref(false)

	const { login } = useUser()
	const clickLogin = () => {
		login(id.value, pass.value)
		router.push(String(route.query.redirect) || '/')
	}
</script>

<style scoped></style>
