<script lang="ts" setup>
import BCartDetailItem from "@/components/cart/BCartDetailItem.vue";
import BPurchasingProcessResume from "./components/BPurchasingProcessResume.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";

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
        
        <BPurchasingTitle />
        
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
    <BPurchasingProcessResume />
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
