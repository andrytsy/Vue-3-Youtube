<template>
    <router-view/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    // todo: доделать определение и установку ширины экрана клиента
    // import ClientSize from '@/helpers/ClientSize'
    export default defineComponent({
        name: 'RootApp',
        beforeMount () {
            // new ClientSize.Screen(window.screen.width)
        }
    })

</script>

<style lang="scss">
    @import './scss/reset.scss';
    @import './scss/app.scss';
</style>
