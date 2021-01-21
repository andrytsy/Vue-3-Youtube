<template>
    <a :href="item.path" class="menu-list-item">
        <div class="menu-list-item__icon">
            <svg class="menu-list-item__svg">
                <use :xlink:href="`${iconsSpriteSrc}#${item.icon}`"></use>
            </svg>
        </div>
        <div v-if="isMenuOpen" class="menu-list-item__title">
            {{ item.title }}
        </div>
    </a>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import AsideMenuSectionItem from '@/models/AsideMenu/AsideMenuSectionItem.ts'
    import iconsSpriteSrc from '@/assets/icons/asideMenuSprite.svg'
    import { isMenuOpen } from '@/components/Header/MainLogoBlock/composition'

    export default defineComponent({
        name: 'AsideMenuSectionItem',
        props: {
            item: {
                type: AsideMenuSectionItem,
                required: true
            }
        },
        setup () {
            return { isMenuOpen, iconsSpriteSrc }
        }
    })
</script>

<style scoped lang="scss">
@import "./styles/AsideMenuSectionItem.scss";
</style>
