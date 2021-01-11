<template>
	<BurgerIcon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BurgerIcon from 'uiKit/Icons/BurgerIcon.vue'

export default defineComponent({
    name: 'MenuButton',
    components: {
        BurgerIcon
    }
})
</script>

<style scoped lang="scss">
	@import "./styles/menuButton.scss";
</style>
