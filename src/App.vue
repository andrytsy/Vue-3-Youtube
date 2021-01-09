<template>
    <div class="app__layout">
        <router-view/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'RootApp'
})

</script>

<style lang="scss">
    @import './scss/reset.scss';
    @import './scss/app.scss';
</style>
