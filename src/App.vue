<script lang="ts" setup>
import BHeader from './components/BHeader.vue'
import BCartDetail from './components/cart/BCartDetail.vue'
import { useCartStore } from './stores/cartStore'
const cartStore = useCartStore()
cartStore.getProducts()

</script>
<template>
<div class="app">
    <BHeader />
    <router-view />
    <BCartDetail />
</div>
</template>
<style lang="scss"></style>
