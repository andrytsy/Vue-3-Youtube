<template>
	<div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuListItem from '@/models/MenuListItem'

export default defineComponent({
    name: 'MenuListBase',
    props: {
    	title: {
    		type: String,
		    default: ''
	    },
        list: {
    		// todo type array of MenuListItem
    		type: MenuListItem,
            required: true
        }
    }
})
</script>
