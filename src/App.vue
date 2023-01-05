<script lang="ts" setup>
import BHeader from '@/components/BHeader.vue'
import BCartDetail from './components/cart/BCartDetail.vue';

</script>
<template>
<div class="app">
    <BHeader />
    <router-view />
    <BCartDetail />
</div>
</template>
<style lang="scss"></style>
