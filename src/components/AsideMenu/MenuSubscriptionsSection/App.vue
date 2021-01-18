<template>
	<MenuSectionBase :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuSectionBase from '@/components/AsideMenu/MenuSectionBase/App.vue'

export default defineComponent({
    name: 'MenuSubscriptionsSection',
    components: {
        MenuSectionBase
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
})
</script>
