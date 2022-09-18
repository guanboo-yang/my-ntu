import { createVuetify as createVuetifyBase } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

const vuetify = createVuetifyBase({
	theme: {
		// defaultTheme: 'dark',
		themes: {
			light: {
				colors: {
					primary: '#691917',
					secondary: '#f9be00',
					background: '#fafafa',
					surface: '#fafafa',
				},
			},
			dark: {
				dark: true,
				colors: {
					primary: '#4f0e0d',
					secondary: '#f9be00',
					background: '#050505',
					surface: '#050505',
				},
			},
		},
	},
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: { mdi },
	},
})

export const createVuetify = () => vuetify
