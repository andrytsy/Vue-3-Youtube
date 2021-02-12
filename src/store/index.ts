import {
	reactive,
	readonly,
	toRefs,
	computed,
	defineComponent,
	provide,
	inject,
} from 'vue'
import {Client} from '@/models/global/Client'

export const state = reactive({
	screenSize: null,
	userAgent: null,
})

export const getters = {
	getScreenSize: computed(() => state.screenSize)
}

export const actions = {
	initClientSettings() {
		const screen = new Client.Screen(window.screen.width)
		const userAgent = new Client.UserAgent(navigator.userAgent)

		mutations.setScreenSize(screen.getSize())
	},
}

export const mutations = {
	// @ts-ignore
	setScreenSize: (screenSize: string) => state.screenSize = screenSize,
}


export const globalStoreName = Symbol('GlobalStore')

export const GlobalProvider = defineComponent({
	setup() {
		provide(globalStoreName, {
			...toRefs(readonly(state)),
			...getters,
			...actions,
			...mutations,
		})
		return {}
	},
	render(h: any) {
		return h('div', this.$slots.default)
	},
})

export const useGlobalStore = () => inject(globalStoreName)
