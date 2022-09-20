<script lang="ts" setup>
import { defineProps } from 'vue';
import BModal from '../BModal.vue';
import BCartDetailItem from './BCartDetailItem.vue';

defineProps({
    showCart: {
        type: Boolean,
        default: true
    }
})

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
]
</script>

<template>
    <BModal 
        position="full-right"
        width="407px"
        :show="showCart"
    >
        <template v-slot:modalHeader>
            <h1 class="cart__title">Mis productos</h1>
        </template>
        <template v-slot:modalBody>
            <ul class="cart__list">
                <li class="cart__item">
                    <BCartDetailItem 
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </li>
            </ul>
        </template>
    </BModal>
</template>

<style lang="scss" scoped>
.cart__title {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.7);
}
</style>