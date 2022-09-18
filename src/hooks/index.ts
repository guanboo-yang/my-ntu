import { createGlobalState, useColorMode, useCycleList, useLocalStorage, useStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'
import { Profile } from '../interfaces'

export const useUser = createGlobalState(() => {
	const profile = useStorage<Profile>('profile', null)
	const cookies = useStorage<string[]>('cookies', [])
	const isLoggedIn = ref(false)

	const login = (c: any[]) => {
		cookies.value = c
		isLoggedIn.value = true
	}

	const logout = () => {
		cookies.value = []
		profile.value = null
	}

	watch(
		profile,
		() => {
			isLoggedIn.value = profile.value !== null
		},
		{
			immediate: true,
		}
	)

	return { isLoggedIn, login, logout }
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
