<template>
    <IconBase viewBox="-4 0 24 24">
        <rect y="8" width="16" height="1.6"></rect>
        <rect y="12" width="16" height="1.6"></rect>
        <rect y="16" width="16" height="1.6"></rect>
    </IconBase>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import IconBase from '@/components/UiKit/Icons/IconBase.vue'

    export default defineComponent({
        name: 'BurgerIcon',
        components: {
            IconBase
        }
    })
</script>
