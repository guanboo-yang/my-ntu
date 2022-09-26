import {
  createRouter as createVueRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import { mdiCalendarBlank, mdiAccount, mdiLink, mdiChartBar } from '@mdi/js'
import { useUser } from '../hooks'

const routes: Array<RouteRecordRaw> = [
  {
    name: '帳號',
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    meta: { icon: mdiAccount, requiresAuth: true }
  },
  {
    name: '成績',
    path: '/grades',
    component: () => import('../views/Grade.vue'),
    meta: { icon: mdiChartBar, requiresAuth: true }
  },
  {
    name: '課表',
    path: '/course',
    component: () => import('../views/Course.vue'),
    meta: { icon: mdiCalendarBlank, requiresAuth: true }
  },
  {
    name: '連結',
    path: '/',
    component: () => import('../views/Links.vue'),
    meta: { icon: mdiLink }
  },
  {
    name: '登入',
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createVueRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.debug('routing from', from.path, 'to', to.path)
  const { isLoggedIn } = useUser()
  if (to.meta.requiresAuth && !isLoggedIn.value) next({ name: '登入' })
  else if (to.name === '登入' && isLoggedIn.value) next({ name: '帳號' })
  else next()
})

router.afterEach(to => {
  // if (to.name === 'Watch') window.dispatchEvent(new HashChangeEvent('hashchange'))
  document.title = `${String(to.name)} | 臺灣大學`
  window.scrollTo({ top: 0 })
})

export const createRouter = () => router
