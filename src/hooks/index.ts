import { createGlobalState, useColorMode, useCycleList, useLocalStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { reactive, ref, watch } from 'vue'

export const useUser = createGlobalState(() => {
	const isLoggedIn = ref(false)
	const user = reactive({
		name: '訪客',
		id: '',
		pass: '',
	})
	const login = (id: string, pass: string) => {
		user.id = id
		user.pass = pass
	}
	const logout = () => {
		user.id = ''
		user.pass = ''
	}
	watch(
		() => user,
		() => {
			isLoggedIn.value = !(user.id === '' || user.pass === '')
		},
		{ deep: true }
	)
	return { user, isLoggedIn, login, logout }
})

export const useMyTheme = createGlobalState(() => {
	const theme = useTheme()
	const mode = useColorMode({
		storageKey: 'color-mode',
	})
	const { next: nextMode } = useCycleList(['dark', 'light'], { initialValue: mode })
	watch(
		mode,
		newVal => {
			// console.log('mode changed', newVal)
			theme.global.name.value = newVal
			document.querySelector('meta[name="theme-color"]')!.setAttribute('content', theme.current.value.colors.primary)
		},
		{ immediate: true }
	)
	return { mode, nextMode }
})
