<template>
    <div class="header-search">
        <UiDropdown>
            <template name="trigger">
                <div class="header-search">
                    <input @input="updateFastVariants" v-model="searchString" class="header-search__input" type="text">
                    <button @click="doSearch" class="header-search__btn"></button>
                </div>
            </template>
            <template name="content">
                <UiSelect></UiSelect>
            </template>
        </UiDropdown>
    </div>
</template>

<script lang="ts">
    import { defineComponent, Ref, ref } from 'vue'
    import UiDropdown from '@/components/UiKit/UiDropdown/App.vue'
    import UiSelect from '@/components/UiKit/UiSelect/App.vue'

    export default defineComponent({
        name: 'HeaderSearch',
        components: {
            UiDropdown,
            UiSelect
        },
        setup () {
            const searchString: Ref = ref('')
            const updateFastVariants = () => ([])
            const doSearch = () => ([])
            return { updateFastVariants, searchString, doSearch }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/headerSearch.scss";
</style>
