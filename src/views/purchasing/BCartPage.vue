<script lang="ts" setup>
import BCartDetailItem from "../../components/cart/BCartDetailItem.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import { useCartStore } from '../../stores/cartStore';
import { usePurchasingProcessStore } from '../../stores/purchasingProcessStore';

const { cart } = useCartStore()
const purchasingProcessStore = usePurchasingProcessStore()

</script>
<template>
<section class="cart-page">
    <BPurchasingTitle :title="purchasingProcessStore.steps['cart'].title" />
    <template v-if="cart.loading">
        <h1>Cargando...</h1>
    </template>
    <template v-else>
        <template v-if="cart.products.length">
            <ul class="cart-page__list">
                <li
                    v-for="product in cart.products"
                    :key="product.id"
                    class="cart-page__item"
                >
                    <BCartDetailItem :product="product" />
                </li>
            </ul>
        </template>
        <template v-if="cart.products.length == 0">
            <h1>No hay productos</h1>
        </template>

    </template>
</section>
<!-- <BPurchasingProcessResumen button-text="Continuar" /> -->
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
