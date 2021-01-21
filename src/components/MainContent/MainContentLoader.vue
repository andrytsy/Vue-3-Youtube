<template>
    <div class="content-loader">
        <div class="content-loader-bar">
            <div v-for="n in 15" :key="`content-loader-bar-item-${n}}`" class="content-loader-bar__item"></div>
        </div>
        <div class="content-loader-grid">
            <div v-for="n in 8" :key="`content-loader-grid-item-${n}}`" class="content-loader-grid__item">
                <div class="content-loader-grid__item-picture"></div>
                <div class="content-loader-grid__item-title"></div>
                <div class="content-loader-grid__item-description"></div>
            </div>
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
