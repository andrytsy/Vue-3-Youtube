<template>
    <template v-if="true">
        <MainContentTagsBar />
        <MainContentGrid />
    </template>
    <MainContentLoader v-else />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainContentTagsBar from '@/components/MainContent/MainContentTagsBar.vue'
    import MainContentGrid from '@/components/MainContent/MainContentGrid.vue'
    import MainContentLoader from '@/components/MainContent/MainContentLoader.vue'

    export default defineComponent({
        name: 'MainContent',
        components: {
            MainContentTagsBar,
            MainContentGrid,
            MainContentLoader
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
