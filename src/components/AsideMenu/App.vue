<template>
	<div :class="asideMenuClasses" class="aside-menu">
		<!-- todo: убрать есть не будет использоваться -->
		<MainLogoBlock
			v-if="isMenuOpen"
			class="aside-menu__header"
		/>
		<MenuMainSections />
		<MenuAccountSections />
		<MenuSubscriptions v-if="true" />
		<MenuBestSections v-else />
		<MenuYoutubeMoreSections />
		<MenuHelpSections />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import MainLogoBlock from '@/components/Header/MainLogoBlock/App.vue'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'
import MenuMainSections from '@/components/AsideMenu/MenuMainSections/App.vue'
import MenuAccountSections from '@/components/AsideMenu/MenuAccountSections/App.vue'
import MenuSubscriptions from '@/components/AsideMenu/MenuSubscriptions/App.vue'
import MenuBestSections from '@/components/AsideMenu/MenuBestSections/App.vue'
import MenuYoutubeMoreSections from '@/components/AsideMenu/MenuYoutubeMoreSections/App.vue'
import MenuHelpSections from '@/components/AsideMenu/MenuHelpSections/App.vue'

import { getMenuSection } from '@/api/getMenuSection.ts'

export default defineComponent({
    name: 'AsideMenu',
    components: {
	    MainLogoBlock,
	    MenuMainSections,
	    MenuAccountSections,
	    MenuSubscriptions,
	    MenuBestSections,
	    MenuYoutubeMoreSections,
	    MenuHelpSections
    },
    setup () {
    	const asideMenuClasses: ComputedRef = computed(() => ({ 'aside-menu--open': isMenuOpen }))

        return { asideMenuClasses, isMenuOpen }
    },
    mounted () {
        getMenuSection()
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
