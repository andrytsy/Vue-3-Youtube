import {
	reactive,
	readonly,
	toRefs,
	computed,
	defineComponent,
	provide,
	inject,
} from 'vue'
import platform from 'platform'
import {Client} from '@/models/global/Client'
import IUserAgent from '@/models/global/userAgent/UserAgent.interface'

export const state = reactive({
	screenSize: '',
	userAgent: new Client.UserAgent(),
})

export const getters = {
	getScreenSize: computed(() => state.screenSize)
}

export const actions = {
	initClientSettings() {
		const screen = new Client.Screen(window.screen.width)
		const userAgent = new Client.UserAgent(platform.parse(navigator.userAgent))

		mutations.setScreenSize(screen.getSize())
		mutations.setUserAgent(userAgent)
	},
}

export const mutations = {
	setScreenSize: (screenSize: string) => state.screenSize = screenSize,
	setUserAgent: (userAgent: IUserAgent) => state.userAgent = userAgent,
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
