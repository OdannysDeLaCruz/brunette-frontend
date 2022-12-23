<script lang="ts" setup>
import BCartDetailItem from "@/components/cart/BCartDetailItem.vue";
import BButton from "@/components/BButton.vue";
import BContent from "@/components/layouts/BContent.vue";
import BPurchasingProcessResume from "./components/BPurchasingProcessResume.vue";

const products = [
    {
        id: 1,
        name: "Kanekalon californiano",
        oldPrice: 10500,
        price: 10500,
        quantity: 2,
    },
    {
        id: 2,
        name: "Lanapelo",
        oldPrice: 3500,
        price: 3700,
        quantity: 4,
    },
    {
        id: 2,
        name: "Lanapelo",
        oldPrice: 3500,
        price: 3700,
        quantity: 4,
    },
    {
        id: 2,
        name: "Lanapelo",
        oldPrice: 3500,
        price: 3700,
        quantity: 4,
    },
];
</script>
<template>
    <section class="cart-page">
        <h1 class="cart-page__title">Carrito</h1>
        <ul class="cart-page__list">
            <li
                class="cart-page__item"
                v-for="product in products"
                :key="product.id"
            >
                <BCartDetailItem :product="product" />
            </li>
        </ul>
    </section>
    <section>
        <BPurchasingProcessResume />
    </section>
</template>
<style lang="scss" scoped>
.cart-page {
    max-width: 1000px;
    margin: 24px auto;
    background: rgba(255, 255, 255, 0.5);
    padding: 25px 30px;
}
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
