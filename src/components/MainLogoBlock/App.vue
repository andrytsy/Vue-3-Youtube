<template>
    <div class="header-main-logo-block">
        <svg @click="toggleMenu" class="header-main-logo-block__menu-btn">
            <use :xlink:href="`${asideMenuSpriteSrc}#burger`"></use>
        </svg>
        <svg class="header-main-logo-block__logo">
            <use :xlink:href="`${logoSpriteSrc}#bigLogo`"></use>
        </svg>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import asideMenuSpriteSrc from '@/assets/icons/asideMenuSprite.svg'
    import logoSpriteSrc from '@/assets/icons/logoSprite.svg'

    import { toggleMenu } from './composition'

    export default defineComponent({
        name: 'MainLogoBlock',
        setup () {
            return { toggleMenu, asideMenuSpriteSrc, logoSpriteSrc }
        }
    })
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
