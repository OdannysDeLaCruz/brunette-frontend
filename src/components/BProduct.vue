<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()

const props = defineProps({
    id: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
})
const showDetail = () => {
    router.push({
        query: {
            productId: props.id
        }
    })
}
</script>
<template>
<div
    class="product"
    @click="showDetail"
>
    <div class="product__wrapper-image">
        <img
            class="product__image"
            src="@/assets/images/kanekalon.jpeg"
            alt=""
        >
    </div>
    <div class="product__body">
        <span class="product__price">${{ price }}</span>
        <p class="product__name">
            {{ name }}
        </p>
    </div>
</div>
</template>
<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    width: 160px;
    border-radius: 8px;
    background: #ffffff;
    overflow: hidden;
    cursor: pointer;
}
.product__wrapper-image {
    width: 100%;
    height: 150px;
}
.product__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.product__body {
    height: 80px;
    display: flex;
    flex-direction: column;
    padding: 8px 8px 16px 8px;
}
.product__price {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 11px;
    color: #FFCC00;
    text-align: left;
    margin-bottom: 5px;
}
.product__name {
    font-family: "Roboto", sans-serif;
    text-align: left;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.7);
}

@media (min-width: 575px) {
    .product {
        width: 200px;
    }
    .product__wrapper-image {
        height: 200px;
    }
    .product__price {
        font-size: 16px;
        line-height: 20px;
    }
    .product__name {
        font-size: 14px;
        line-height: 16px;
    }
}
</style>