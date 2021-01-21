<template>
    <div class="menu-list">
        <div v-if="section.title && isMenuOpen" class="menu-list__title">{{ section.title }}</div>
        <AsideMenuSectionItem
            v-for="item in section.items"
            :key="item.title"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import AsideMenuSectionItem from '@/components/AsideMenu/AsideMenuSectionItem.vue'
    import AsideMenuSection from '@/models/AsideMenu/AsideMenuSection.ts'
    import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'

    export default defineComponent({
        name: 'AsideMenuSection',
        components: {
            AsideMenuSectionItem
        },
        props: {
            section: {
                type: AsideMenuSection,
                required: true
            }
        },
        setup () {
            return { isMenuOpen }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/asideMenuSection.scss";
</style>
