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
    <div class="cart-item">
        <div class="cart-item__wrapper-image">
            <img class="cart-item__image" src="@/assets/images/kanekalon.jpeg" :alt="product.name">
        </div>
        <div class="cart-item__content">
            <div class="cart-item__content__wrapper">
                <h1 class="cart-item__name">{{ product.name }}</h1>
                <div class="cart-item__prices">
                    <span class="cart-item__prices__item cart-item__prices__old">{{ product.price }}</span>
                    <span class="cart-item__prices__item cart-item__prices__new">{{ product.oldPrice }}</span>
                </div>
                <div class="cart-item__options">
                    <span class="cart-item__options__item cart-item__options__item--color-red">Remove</span>
                </div>
            </div>
            <div class="cart-item__control-quantity">
                <BControlQuantity :quantity="product.quantity" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart-item {
    padding: 16px;
    height: 120px;
    display: flex;
    border-radius: 4px;
    background: #fff;
}
.cart-item__wrapper-image {
    width: 90px;
    height: 90px;
    margin-right: 20px;
    border-radius: 4px;
    overflow: hidden;
}
.cart-item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.cart-item__content {
    display: grid;
    grid-template-columns: 1fr auto;
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
    margin-top: auto;
    display: flex;
    align-items: center;
}
.cart-item__options__item {
    cursor: pointer;
}
.cart-item__options__item--color-red {
    color: #F28383;
}
.cart-item__control-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>