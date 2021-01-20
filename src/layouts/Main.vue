<template>
    <Header />
    <div class="main__content">
        <AsideMenu />
        <slot name="content"></slot>
    </div>
    <Footer />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Header from '@/components/Header/App.vue'
    import AsideMenu from '@/components/AsideMenu/App.vue'
    import Footer from '@/components/Footer/App.vue'

    export default defineComponent({
        name: 'MainPage',
        components: {
            Header,
            AsideMenu,
            Footer
        }
    })
</script>

<style scoped lang="scss">
	@import './styles/main.scss';
</style>
