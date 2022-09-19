import { createRouter as createVueRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { mdiCalendarBlank, mdiAccount, mdiLink, mdiChartBar } from '@mdi/js'
import { useUser } from '../hooks'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/profile',
		name: '帳號',
		component: () => import('../views/Profile.vue'),
		meta: { icon: mdiAccount, bottom: true, requiresAuth: true },
	},
	{
		path: '/grades',
		name: '成績',
		component: () => import('../views/Grades.vue'),
		meta: { icon: mdiChartBar, bottom: true, requiresAuth: true },
	},
	{
		path: '/timetable',
		name: '行事曆',
		component: () => import('../views/CourseList.vue'),
		meta: { icon: mdiCalendarBlank, bottom: true },
	},
	{
		path: '/',
		name: '連結',
		// alias: '/home',
		component: () => import('../views/Links.vue'),
		meta: { icon: mdiLink, bottom: true },
	},
	{
		path: '/login',
		name: '登入',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('../views/NotFound.vue'),
	},
]

const router = createVueRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	// console.log('beforeEach', to, from)
	const { isLoggedIn } = useUser()
	if (to.meta.requiresAuth && !isLoggedIn.value) {
		next({ name: '登入', query: { redirect: to.fullPath } })
	} else if (to.name === '登入' && isLoggedIn.value) {
		next(String(to.query.redirect) || '/')
	} else {
		next()
	}
})

router.afterEach(to => {
	// if (to.name === 'Watch') window.dispatchEvent(new HashChangeEvent('hashchange'))
	document.title = `${String(to.name)} | 臺灣大學`
	window.scrollTo({ top: 0 /* , behavior: 'smooth' */ })
})

export const createRouter = () => router
