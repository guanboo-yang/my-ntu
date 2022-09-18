import { createApp } from 'vue'
import { createRouter } from './router'
import { createVuetify } from './plugins'
import App from './App.vue'

const app = createApp(App)
const router = createRouter()
const vuetify = createVuetify()

app.use(router).use(vuetify).mount('#app')
