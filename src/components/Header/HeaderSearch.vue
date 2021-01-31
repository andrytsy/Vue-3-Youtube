<template>
    <div class="header-search">
        <UiDropdown>
            <template v-slot:trigger>
                <div class="header-search__trigger search-trigger">
                    <input @input="updateQuickOptions" v-model="searchString" class="search-trigger__input" type="text">
                    <button @click="updateQuickOptions" class="search-trigger__btn"></button>
                </div>
            </template>
            <template v-slot:content>
                <ul class="header-search__content">
                    <li v-for="option in quickOptions" :key="option.title" class="header-search__content-item">{{ option.title }}</li>
                </ul>
            </template>
        </UiDropdown>
    </div>
</template>

<script lang="ts">
    import { defineComponent, Ref, ref, unref } from 'vue'
    import throttle from 'lodash/throttle'
    import UiDropdown from '@/components/UiKit/UiDropdown/App.vue'
    import { getSearchQuickOptions } from '@/api/getSearchQuickOptions'

    export default defineComponent({
        name: 'HeaderSearch',
        components: {
            UiDropdown
        },
        setup () {
            const searchString: Ref = ref('')
            const quickOptions: Ref = ref([])
            const updateQuickOptions = throttle(async () => {
                const options = await getSearchQuickOptions(unref(searchString))
                quickOptions.value = options
            }, 500)

            return { searchString, quickOptions, updateQuickOptions }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/headerSearch.scss";
</style>
