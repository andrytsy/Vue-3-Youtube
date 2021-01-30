<template>
    <div class="header-app">
        <MainLogoBlock />
        <HeaderSearch class="header-app__search" />
        <HeaderButtonsGroup class="header-app__btn-group" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MainLogoBlock from '@/components/MainLogoBlock/App.vue'
    import HeaderSearch from '@/components/Header/HeaderSearch.vue'
    import HeaderButtonsGroup from '@/components/Header/HeaderButtonsGroup.vue'

    export default defineComponent({
        name: 'Header',
        components: {
            MainLogoBlock,
            HeaderSearch,
            HeaderButtonsGroup
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
