<template>
    <MainLayout>
        Content
    </MainLayout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainLayout from '../layouts/Main.vue'

    export default defineComponent({
        name: 'TrendingPage',
        components: {
            MainLayout
        }
    })
</script>
