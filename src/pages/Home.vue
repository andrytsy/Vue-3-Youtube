<template>
    <MainLayout>
        <template v-slot:content>
            <MainContent />
        </template>
    </MainLayout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainLayout from '../layouts/Main.vue'
    import MainContent from '@/components/MainContent/App.vue'

    export default defineComponent({
        name: 'HomePage',
        components: {
            MainLayout,
            MainContent
        }
    })
</script>
