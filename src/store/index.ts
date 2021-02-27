import {
    readonly,
    toRefs,
    computed
} from 'vue'
import platform from 'platform'
import { Client } from '@/models/global/Client'
import { createStoreState } from './state'

const state: {[index: string]: any} = createStoreState()
const getters = {
    getScreenSize: computed(() => state.screenSize)
}

const actions = {
    patchStoreState (payload: {[index: string]: any}) {
        Object.keys(payload).forEach((key: string) => {
        	if (state[key]) {
                state[key] = payload[key]
            }
        })
    },
    initClientSettings () {
        const screen = new Client.Screen(window.screen.width)
        const userAgent = new Client.UserAgent(platform.parse(navigator.userAgent))

        this.patchStoreState({
            screenSize: screen.getSize(),
            userAgent: userAgent
        })
    }
}

export default Object.freeze({
    state: toRefs(readonly(state)),
    getters,
    actions
})
