<template>
    <MainLayout>
        Content
    </MainLayout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainLayout from '../layouts/Main.vue'

    export default defineComponent({
        name: 'WatchPage',
        components: {
            MainLayout
        }
    })
</script>
