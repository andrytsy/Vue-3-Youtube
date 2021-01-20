<template>
    <a :href="item.path" class="menu-list-item">
        <div class="menu-list-item__icon">
            <svg class="menu-list-item__svg">
                <use :xlink:href="`${icons}#${item.icon}`"></use>
            </svg>
        </div>
        <div v-if="isMenuOpen" class="menu-list-item__title">
            {{ item.title }}
        </div>
    </a>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import MenuSectionItem from '@/models/AsideMenu/MenuSectionItem.ts'
    import icons from '@/assets/icons.svg'
    import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'

    export default defineComponent({
        name: 'MenuSectionItem',
        props: {
            item: {
                type: MenuSectionItem,
                required: true
            }
        },
        setup () {
            return { isMenuOpen, icons }
        }
    })
</script>

<style scoped lang="scss">
@import "./styles/menuSectionItem.scss";
</style>
