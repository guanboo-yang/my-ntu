<script setup lang="ts">
	import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
	<v-app>
		<the-navbar />
		<v-main>
			<router-view v-slot="{ Component }">
				<keep-alive>
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</keep-alive>
			</router-view>
		</v-main>
	</v-app>
</template>

<style lang="scss">
	:root {
		/* font-family: Poppins, Inter, Avenir, Helvetica, Arial, sans-serif; */
		font-synthesis: none;
	}
	.v-theme--dark,
	.v-theme--light {
		--v-high-emphasis-opacity: 1 !important;
	}
	.fade {
		&-enter-active,
		&-leave-active {
			transition: opacity 0.2s ease-out;
		}
		&-enter-from,
		&-leave-to {
			opacity: 0;
		}
	}
</style>
