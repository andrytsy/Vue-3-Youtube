<template>
	<div :class="asideMenuClasses" class="aside-menu">
		<!-- todo: убрать если не будет использоваться -->
		<MainLogoBlock
			v-if="isMenuOpen"
			class="aside-menu__header"
		/>
		<MenuMainSection :list="mainSections" />
		<MenuAccountSection :list="mainSections" />
		<MenuSubscriptionsSection v-if="true" :list="mainSections" />
		<MenuBestSection v-else />
		<MenuYoutubeMoreSection />
		<MenuHelpSection />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, Ref, ref } from 'vue'
import MainLogoBlock from '@/components/Header/MainLogoBlock/App.vue'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'
import MenuMainSection from '@/components/AsideMenu/MenuMainSection/App.vue'
import MenuAccountSection from '@/components/AsideMenu/MenuAccountSection/App.vue'
import MenuSubscriptionsSection from '@/components/AsideMenu/MenuSubscriptionsSection/App.vue'
import MenuBestSection from '@/components/AsideMenu/MenuBestSection/App.vue'
import MenuYoutubeMoreSection from '@/components/AsideMenu/MenuYoutubeMoreSection/App.vue'
import MenuHelpSection from '@/components/AsideMenu/MenuHelpSection/App.vue'

import { fetchMenuSections } from '@/api/getMenuSection.ts'

export default defineComponent({
    name: 'AsideMenu',
    components: {
	    MainLogoBlock,
	    MenuMainSection,
	    MenuAccountSection,
	    MenuSubscriptionsSection,
	    MenuBestSection,
	    MenuYoutubeMoreSection,
	    MenuHelpSection
    },
    setup () {
    	const mainSections: Ref = ref([])
    	const asideMenuClasses: ComputedRef = computed(() => ({ 'aside-menu--open': isMenuOpen.value }))
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
