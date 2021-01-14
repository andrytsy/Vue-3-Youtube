<template>
	<div :class="asideMenuClasses" class="aside-menu">
		<!-- todo: убрать если не будет использоваться -->
		<MainLogoBlock
			v-if="isMenuOpen"
			class="aside-menu__header"
		/>
		<MenuMainSections :list="mainSections" />
		<MenuAccountSections />
		<MenuSubscriptions v-if="true" />
		<MenuBestSections v-else />
		<MenuYoutubeMoreSections />
		<MenuHelpSections />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, Ref, ref } from 'vue'
import MainLogoBlock from '@/components/Header/MainLogoBlock/App.vue'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'
import MenuMainSections from '@/components/AsideMenu/MenuMainSections/App.vue'
import MenuAccountSections from '@/components/AsideMenu/MenuAccountSections/App.vue'
import MenuSubscriptions from '@/components/AsideMenu/MenuSubscriptions/App.vue'
import MenuBestSections from '@/components/AsideMenu/MenuBestSections/App.vue'
import MenuYoutubeMoreSections from '@/components/AsideMenu/MenuYoutubeMoreSections/App.vue'
import MenuHelpSections from '@/components/AsideMenu/MenuHelpSections/App.vue'

import { fetchMenuSections } from '@/api/getMenuSection.ts'

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
    	const mainSections: Ref = ref([])
    	const asideMenuClasses: ComputedRef = computed(() => ({ 'aside-menu--open': isMenuOpen }))
	    const updateMenuSections = async () => {
		    mainSections.value = await fetchMenuSections()
	    }

        return { asideMenuClasses, isMenuOpen, mainSections, updateMenuSections }
    },
    mounted () {
    	this.updateMenuSections()
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/asideMenu.scss";
</style>
