<template>
	<div class="header-app">
		<MenuButton class="header-app__menu-btn" />
		<LogoIcon class="header-app__logo" />
		<div class="header-app__search">
			<Search />
		</div>
		<div class="header-app__btn-group">
			<AuthButton />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuButton from 'app/components/Header/MenuButton.vue'
import LogoIcon from '@/components/UiKit/Icons/LogoIcon.vue'
import Search from 'app/components/Header/Search.vue'
import AuthButton from 'app/components/Header/AuthButton.vue'

export default defineComponent({
    name: 'Header',
    components: {
	    MenuButton,
        LogoIcon,
	    Search,
	    AuthButton
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
