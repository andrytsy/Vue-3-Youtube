<template>
	<div class="menu-list">
		<div v-if="section.title && isMenuOpen" class="menu-list__title">{{ section.title }}</div>
		<MenuSectionItem
			v-for="item in section.items"
			:key="item.title"
			:item="item"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuSectionItem from '@/components/AsideMenu/MenuSectionItem.vue'
import MenuSection from '@/models/AsideMenu/MenuSection.ts'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'

export default defineComponent({
    name: 'MenuSectionBase',
    components: {
        MenuSectionItem
    },
    props: {
	    section: {
    		type: MenuSection,
            required: true
        }
    },
    setup () {
    	return { isMenuOpen }
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/menuSectionBase.scss";
</style>
