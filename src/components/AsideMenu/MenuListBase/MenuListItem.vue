<template>
	<a :href="item.path" class="menu-list-item">
		<img
			:src="item.icon"
			:alt="item.title"
			class="menu-list-item__icon"
		>
		<div class="menu-list-item__title">
			{{ item.title }}
		</div>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuListItem from '@/models/AsideMenu/MenuListItem'

export default defineComponent({
    name: 'MenuListItem',
    props: {
    	item: {
    		type: MenuListItem,
		    required: true
	    }
    }
})
</script>
