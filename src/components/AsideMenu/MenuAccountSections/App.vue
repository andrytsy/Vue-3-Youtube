<template>
	<MenuListBase :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuListBase from '@/components/AsideMenu/MenuListBase/App.vue'

export default defineComponent({
    name: 'MenuAccountSections',
    components: {
        MenuListBase
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
})
</script>
