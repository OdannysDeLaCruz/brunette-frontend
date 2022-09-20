<script lang="ts" setup>
import { defineProps } from 'vue';
import BControlQuantity from '../BControlQuantity.vue';

defineProps({
    product: {
        type: Object,
        required: true
    },
})

</script>

<template>
    <li class="cart-item">
        <div class="cart-item__wrapper-image">
            <img class="cart-item__image" src="@/assets/images/kanekalon.jpeg" :alt="product.name">
        </div>
        <div class="cart-item__content">
            <div class="cart-item__content__wrapper">
                <h1 class="cart-item__name">{{ product.name }}</h1>
                <div class="cart-item__prices">
                    <span class="cart-item__prices__item cart-item__prices__new">{{ product.oldPrice }}</span>
                    <span class="cart-item__prices__item cart-item__prices__old">{{ product.price }}</span>
                </div>
            </div>
            <div class="cart-item__options">
                <BControlQuantity :quantity="product.quantity" />
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.cart-item {
    padding: 16px;
    display: flex;
    border-bottom: 1px solid #E3E3E3;
}
.cart-item__wrapper-image {
    width: 70px;
    height: 70px;
    margin-right: 15px;
}
.cart-item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.cart-item__content {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
}
.cart-item__content__wrapper {
    display: flex;
    flex-direction: column;
}
.cart-item__name {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
}
.cart-item__prices {
    display: flex;
    flex-wrap: wrap;
}
.cart-item__prices__item {
    font-style: normal;
    line-height: 17px;
    font-weight: 500;
    font-size: 14px;
    margin-right: 5px;
}
.cart-item__prices__old {
    text-decoration-line: line-through;
    color: rgba(0, 0, 0, 0.5);
}
.cart-item__prices__new {
    font-weight: 700;
    font-size: 16px;
    color: #FFCC00;
}
.cart-item__options {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>