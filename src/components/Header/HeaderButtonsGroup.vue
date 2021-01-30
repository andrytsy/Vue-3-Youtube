<template>
    <div class="header-btn-group">
        <!-- todo: Если авторизирован -->
        <div v-if="false" class="header-btn-group__item header-btn-group__add-video"></div>
        <div class="header-btn-group__item header-btn-group__g-services"></div>
        <div class="header-btn-group__item header-btn-group__notifications"></div>
        <div class="header-btn-group__item header-btn-group__auth"></div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'HeaderButtonsGroup'
    })
</script>

<style scoped lang="scss">
	@import "./styles/headerButtonsGroup.scss";
</style>
