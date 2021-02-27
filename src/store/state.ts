import { reactive } from 'vue'
import { Client } from '@/models/global/Client'

export const createStoreState = () => reactive({
    screenSize: '',
    userAgent: new Client.UserAgent()
})
