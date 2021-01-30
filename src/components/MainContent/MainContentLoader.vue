<template>
    <div class="content-loader">
        <div class="content-loader-bar">
            <div v-for="n in 15" :key="`content-loader-bar-item-${n}}`" class="content-loader-bar__item"></div>
        </div>
        <div class="content-loader-grid">
            <div v-for="n in 18" :key="`content-loader-grid-item-${n}}`" class="content-loader-grid__item grid-item">
                <div class="grid-item__image"></div>
                <div class="grid-item__content">
                    <div class="grid-item__icon"></div>
                    <div class="grid-item__info">
                        <div class="grid-item__info-title"></div>
                        <div class="grid-item__info-description"></div>
                    </div>
                </div>
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
