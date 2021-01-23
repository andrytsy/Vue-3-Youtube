<template>
    <component :is="tagName" :class="[dropdownClass, {'dropdown--open': isOpen}]" class="dropdown">
        <div class="dropdown__trigger">
            <slot name="trigger"></slot>
        </div>
        <div class="dropdown__content">
            <slot name="content"></slot>
        </div>
    </component>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'UiDropdown',
        props: {
            positioning: {
                type: String,
                default: 'bottom'
            },
            isOpen: {
                type: Boolean,
                required: true
            },
            tagName: {
                type: String,
                default: 'div'
            },
            dropdownClass: {
                type: String,
                default: ''
            }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
