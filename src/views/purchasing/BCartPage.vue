<script lang="ts" setup>
import BCartDetailItem from "../../components/cart/BCartDetailItem.vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import { useCartStore } from '../../stores/cartStore';

const cartStore = useCartStore()

</script>
<template>
<section class="cart-page">
    <BPurchasingTitle title="Carrito" />
    <template v-if="cartStore.products.length">
        <ul class="cart-page__list">
            <li
                v-for="product in cartStore.products"
                :key="product.id"
                class="cart-page__item"
            >
                <BCartDetailItem :product="product" />
            </li>
        </ul>
    </template>
    <template v-if="cartStore.loading">
        <h1>Cargando...</h1>
    </template>
    <template v-if="cartStore.products.length == 0">
        <h1>No hay productos</h1>
    </template>
</section>
<BPurchasingProcessResumen button-text="Continuar" />
</template>
<style lang="scss" scoped>
.cart-page__title {
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 17px;
    color: #000000;
}
.cart-page__item {
    margin-bottom: 16px;
}
</style>
