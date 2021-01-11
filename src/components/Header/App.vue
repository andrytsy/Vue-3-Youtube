<template>
	<div class="header-app">
		<MainLogoBlock />
		<Search class="header-app__search" />
		<AuthButton class="header-app__btn-group" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLogoBlock from '@/components/Header/MainLogoBlock/App.vue'
import Search from 'app/components/Header/Search.vue'
import AuthButton from 'app/components/Header/AuthButton.vue'

export default defineComponent({
    name: 'Header',
    components: {
        MainLogoBlock,
	    Search,
	    AuthButton
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/app.scss";
</style>
