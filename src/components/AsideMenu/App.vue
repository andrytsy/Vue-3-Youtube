<template>
	<div class="aside-menu">
		<AsideHeader />
		<MenuControls />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideHeader from '@/components/Header/MainLogoBlock/App.vue'
import MenuControls from '@/components/AsideMenu/MenuControls/App.vue'

export default defineComponent({
    name: 'AsideMenu',
    components: {
        AsideHeader,
        MenuControls
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
