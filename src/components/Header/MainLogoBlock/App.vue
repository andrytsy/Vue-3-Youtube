<template>
	<div class="header-main-logo-block">
		<BurgerIcon class="header-main-logo-block__menu-btn" />
		<LogoIcon class="header-main-logo-block__logo" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BurgerIcon from '@/components/UiKit/Icons/BurgerIcon.vue'
import LogoIcon from '@/components/UiKit/Icons/LogoIcon.vue'

export default defineComponent({
    name: 'MainLogoBlock',
    components: {
        BurgerIcon,
        LogoIcon
    }
})
</script>

<style scoped lang="scss">
@import "./styles/app.scss";
</style>
