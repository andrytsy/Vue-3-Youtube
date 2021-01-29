import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Watch from '@/pages/Watch.vue'
import Trending from '@/pages/Trending.vue'
import Subscriptions from '@/pages/Subscriptions.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/watch/:id',
        name: 'Watch',
        component: Watch
    },
    {
        path: '/trending',
        name: 'Trending',
        component: Trending
    },
    {
        path: '/subscriptions',
        name: 'Subscriptions',
        component: Subscriptions
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
