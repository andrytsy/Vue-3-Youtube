<template>
	<div class="menu-list">
		<div v-if="title" class="menu-list__title">{{ title }}</div>
		<MenuSectionItem
			v-for="item in list"
			:key="item.title"
			:item="item"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuSectionItem from '@/components/AsideMenu/MenuSectionBase/MenuSectionItem.vue'

export default defineComponent({
    name: 'MenuSectionBase',
    components: {
        MenuSectionItem
    },
    props: {
    	title: {
    		type: String,
		    required: false
	    },
        list: {
    		type: Array,
            required: true
        }
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/menuSectionBase.scss";
</style>
