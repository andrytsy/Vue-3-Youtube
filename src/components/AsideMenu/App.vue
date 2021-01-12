<template>
	<div :class="{'aside-menu--open': isMenuOpen}" class="aside-menu">
		<MainLogoBlock
			v-if="isMenuOpen"
			class="aside-menu__header"
		/>
		<MenuControls />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLogoBlock from '@/components/Header/MainLogoBlock/App.vue'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'
import MenuControls from '@/components/AsideMenu/MenuControls/App.vue'

export default defineComponent({
    name: 'AsideMenu',
    components: {
	    MainLogoBlock,
        MenuControls
    },
    setup () {
        return { isMenuOpen }
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
