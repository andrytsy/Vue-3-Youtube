<template>
    <div class="select">
        <label :for="id" :class="labelClass" class="select__label"></label>
        <select :id="id" :class="optionsClass" class="select__options">
            <option
                v-for="(option, index) in options"
                :key="`select-${id}-option-${index}`"
                :value="option.value"
                :class="optionClass"
                class="select__option"
            >{{ option.name }}</option>
        </select>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'UiSelect',
        props: {
            id: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            labelClass: {
                type: String,
                default: ''
            },
            optionsClass: {
                type: String,
                default: ''
            },
            optionClass: {
                type: String,
                default: ''
            }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
