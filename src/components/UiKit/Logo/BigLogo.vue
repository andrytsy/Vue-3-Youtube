<template>
	<div>
		<svg viewBox="0 0 200 60">
			<use href="/src/assets/icons/logo.svg" />
		</svg>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BigLogo'
})
</script>

<style scoped lang="scss">
	@import "./styles/bigLogo.scss";
</style>
