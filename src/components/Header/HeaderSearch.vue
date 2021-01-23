<template>
    <div class="header-search">
        <UiDropdown>
            <template name="trigger">
                <div class="header-search">
                    <input @input="doSearch" v-model="searchString" class="header-search__input" type="text">
                    <button @click="doSearch" class="header-search__btn"></button>
                </div>
            </template>
            <template name="content">
                <ul>
                    <li v-for="option in quickOptions" :key="option.title">{{ option.title }}</li>
                </ul>
            </template>
        </UiDropdown>
    </div>
</template>

<script lang="ts">
    import { defineComponent, Ref, ref } from 'vue'
    import UiDropdown from '@/components/UiKit/UiDropdown/App.vue'
    import { getSearchQuickOptions } from '@/api/getSearchQuickOptions.ts'

    export default defineComponent({
        name: 'HeaderSearch',
        components: {
            UiDropdown
        },
        setup () {
            const searchString: Ref = ref('')
            const quickOptions: Ref = ref([])
            const doSearch = () => {
                getSearchQuickOptions(searchString.value)
            }

            return { searchString, quickOptions, doSearch }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/headerSearch.scss";
</style>
