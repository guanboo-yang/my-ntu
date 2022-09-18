import { createRouter as createVueRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useUser } from '../hooks'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Links.vue'),
	},
	{
		path: '/timetable',
		name: 'Timetable',
		component: () => import('../views/CourseList.vue'),
		alias: '/home',
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/Profile.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/grades',
		name: 'Grades',
		component: () => import('../views/Grades.vue'),
		meta: { requiresAuth: true },
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('../views/NotFound.vue'),
	},
]

const router = createVueRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	const { isLoggedIn } = useUser()
	// console.log('to', to)
	// console.log('from', from)
	// console.log('isLoggedIn', isLoggedIn.value)
	if (to.meta.requiresAuth && !isLoggedIn.value) {
		next({ name: 'Login', query: { redirect: to.fullPath } })
	} else {
		next()
	}
})

router.afterEach(to => {
	// if (to.name === 'Watch') window.dispatchEvent(new HashChangeEvent('hashchange'))
	if (to.name === 'Home') document.title = 'MyNTU'
	else document.title = `${String(to.name)} | MyNTU`
	window.scrollTo({ top: 0 /* , behavior: 'smooth' */ })
})

export const createRouter = () => router
