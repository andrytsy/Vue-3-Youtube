<template>
    <Header />
    <div class="main__content">
        <AsideMenu />
        <MainContent />
    </div>
    <Footer />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Header from '@/components/Header/App.vue'
    import AsideMenu from '@/components/AsideMenu/App.vue'
    import MainContent from '@/components/MainContent/App.vue'
    import Footer from '@/components/Footer/App.vue'

    export default defineComponent({
        name: 'MainPage',
        components: {
            Header,
            AsideMenu,
            MainContent,
            Footer
        }
    })
</script>

<style scoped lang="scss">
	@import './styles/main.scss';
</style>
