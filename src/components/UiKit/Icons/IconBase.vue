<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        role="presentation"
    >
        <slot />
    </svg>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'IconBase',
        props: {
            width: {
                type: Number,
                required: false
            },
            height: {
                type: Number,
                required: false
            },
            viewBox: {
                type: String,
                required: false
            }
        }
    })
</script>
