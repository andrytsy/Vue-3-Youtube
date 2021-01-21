<template>
    <MainContentTagsBar />
    <MainContentGrid />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainContentTagsBar from '@/components/MainContent/MainContentTagsBar.vue'
    import MainContentGrid from '@/components/MainContent/MainContentGrid.vue'

    export default defineComponent({
        name: 'MainContent',
        components: {
            MainContentTagsBar,
            MainContentGrid
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
