<template>
    <GlobalProvider>
        <router-view/>
    </GlobalProvider>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useProvidedGlobalStore } from '@/composable/useGlobalStore'

    export default defineComponent({
        name: 'RootApp',
        components: {
            GlobalProvider
        },
        setup () {
            const globalStore = useProvidedGlobalStore()
        }
    })

</script>

<style lang="scss">
    @import './scss/reset.scss';
    @import './scss/app.scss';
</style>
