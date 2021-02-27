import {
    defineComponent,
    inject,
    provide
} from 'vue'
import { provideKeys } from '@/constants/provideKeys'
import globalStore from '@/store/index'

export const useProvidedGlobalStore = () => inject(provideKeys.globalStore)
export const GlobalProvider = defineComponent({
    setup () {
        provide(provideKeys.globalStore, globalStore)
    },
    render (h: any) {
        return h('div', this.$slots.default)
    }
})
