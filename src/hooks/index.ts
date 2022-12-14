import {
  createGlobalState,
  useColorMode,
  useCycleList,
  useStorage
} from '@vueuse/core'
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'
import { Profile } from '../interfaces'

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

export const useUser = createGlobalState(() => {
  const profile = useStorage<Profile>('profile', {})
  const grades = useStorage<Grades>('grades', {})
  const cookies = useStorage<string[]>('cookies', [])
  const isLoggedIn = ref(false)

  const login = (c: any[]) => {
    cookies.value = c
    isLoggedIn.value = true
  }

  const logout = () => {
    cookies.value = []
    profile.value = {}
    grades.value = {}
  }

  watch(profile, () => (isLoggedIn.value = !!profile.value.name), {
    immediate: true
  })

  return { isLoggedIn, login, logout, profile, cookies, grades }
})

export const useMyTheme = createGlobalState(() => {
  const theme = useTheme()
  const mode = useColorMode({
    storageKey: 'color-mode'
  })
  const { next: nextMode } = useCycleList(['dark', 'light'], {
    initialValue: mode
  })
  watch(
    mode,
    newVal => {
      // console.log('mode changed', newVal)
      theme.global.name.value = newVal
      document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute('content', theme.current.value.colors.primary)
    },
    { immediate: true }
  )
  return { mode, nextMode }
})
