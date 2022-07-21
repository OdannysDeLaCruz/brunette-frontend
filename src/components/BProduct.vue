<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    name: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
})
</script>
<template>
    <div class="product">
        <div class="product__wrapper-image">
            <img class="product__image" src="@/assets/images/kanekalon.jpeg" alt="">
        </div>
        <div class="product__body">
            <span class="product__price">${{ price }}</span>
            <p class="product__name">{{ name }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    width: 200px;
    border-radius: 8px;
    background: #ffffff;
    overflow: hidden;
}
.product__wrapper-image {
    width: 100%;
    height: 200px;
}
.product__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.product__body {
    display: flex;
    flex-direction: column;
    padding: 8px 8px 16px 8px;
}
.product__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFCC00;
    text-align: left;
    margin-bottom: 5px;
}
.product__name {
    text-align: left;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.7);
}
</style>