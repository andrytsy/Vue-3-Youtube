<template>
    <div class="header-search">
        <UiDropdown>
            <template v-slot:trigger>
                <div class="header-search__trigger search-trigger">
                    <input @input="doSearch" v-model="searchString" class="search-trigger__input" type="text">
                    <button @click="doSearch" class="search-trigger__btn"></button>
                </div>
            </template>
            <template v-slot:content>
                <ul class="header-search__content">
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
