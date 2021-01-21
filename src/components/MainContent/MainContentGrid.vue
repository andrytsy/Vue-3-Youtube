<template>
    <div class="content-grid">
        <MainContentItem v-for="n in 30" :key="n" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainContentItem from '@/components/MainContent/MainContentItem.vue'

    export default defineComponent({
        name: 'MainContent',
        components: {
            MainContentItem
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
