<template>
    <router-view/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    // todo: доделать определение и установку ширины экрана клиента
    export default defineComponent({
        name: 'RootApp',
        beforeMount () {
        }
    })

</script>

<style lang="scss">
    @import './scss/reset.scss';
    @import './scss/app.scss';
</style>
