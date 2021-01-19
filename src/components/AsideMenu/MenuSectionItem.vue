<template>
	<a :href="item.path" class="menu-list-item">
<!--		<img-->
<!--			:src="item.icon"-->
<!--			:alt="item.title"-->
<!--			class="menu-list-item__icon"-->
<!--		>-->
		<div class="menu-list-item__icon">
			<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
				<g>
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
				</g>
			</svg>
		</div>
		<div v-if="isMenuOpen" class="menu-list-item__title">
			{{ item.title }}
		</div>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuSectionItem from '@/models/AsideMenu/MenuSectionItem'
import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'

export default defineComponent({
    name: 'MenuSectionItem',
    props: {
    	item: {
    		type: MenuSectionItem,
		    required: true
	    }
    },
    setup () {
    	return { isMenuOpen }
    }
})
</script>

<style scoped lang="scss">
@import "./styles/menuSectionItem.scss";
</style>
