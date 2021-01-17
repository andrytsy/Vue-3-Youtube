<template>
	<div class="menu-list">
		<div v-if="title" class="menu-list__title">{{ title }}</div>
		<MenuListItem
			v-for="item in list"
			:key="item.title"
			:item="item"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuListItem from '@/components/AsideMenu/MenuListBase/MenuListItem.vue'

export default defineComponent({
    name: 'MenuListBase',
    components: {
        MenuListItem
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
	@import "./styles/menuListBase.scss";
</style>
