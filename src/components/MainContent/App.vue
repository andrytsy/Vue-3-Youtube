<template>
    <ContentTagsBar />
    <div class="content-grid">
        <ContentItem v-for="n in 30" :key="n" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ContentTagsBar from '@/components/MainContent/ContentTagsBar.vue'
    import ContentItem from '@/components/MainContent/ContentItem.vue'

    export default defineComponent({
        name: 'MainContent',
        components: {
            ContentTagsBar,
            ContentItem
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
