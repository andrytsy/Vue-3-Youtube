<template>
    <div :class="asideMenuClasses" class="aside-menu">
        <!-- todo: убрать если не будет использоваться -->
        <MainLogoBlock
            v-if="isMenuOpen"
            class="aside-menu__header"
        />
        <AsideMenuSection
            v-for="section in allSections"
            :key="section.id"
            :section="section"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, ComputedRef, Ref, ref } from 'vue'
    import MainLogoBlock from '@/components/MainLogoBlock/App.vue'
    import AsideMenuSection from '@/components/AsideMenu/AsideMenuSection.vue'
    import { isMenuOpen } from '@/components/MainLogoBlock/composition'
    import { fetchMenuSections } from '@/api/getMenuSection.ts'

    export default defineComponent({
        name: 'AsideMenu',
        components: {
            MainLogoBlock,
            AsideMenuSection
        },
        setup () {
            const allSections: Ref = ref([])
            const asideMenuClasses: ComputedRef = computed(() => ({ 'aside-menu--open': isMenuOpen.value }))
            const updateMenuSections = async () => {
                allSections.value = await fetchMenuSections()
            }

            return { asideMenuClasses, isMenuOpen, allSections, updateMenuSections }
        },
        mounted () {
            this.updateMenuSections()
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/asideMenu.scss";
</style>
