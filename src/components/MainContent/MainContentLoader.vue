<template>
    <div class="content-loader">
        <div class="content-loader-bar">
            <div v-for="n in 10" :key="`content-loader-bar-item-${n}}`" class="content-loader-bar__item"></div>
        </div>
        <div class="content-loader-grid">
            <div v-for="n in 10" :key="`content-loader-grid-item-${n}}`" class="content-loader-grid__item"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'MainContentItem'
    })
</script>

<style scoped lang="scss">
	@import "./styles/mainContentLoader.scss";
</style>
