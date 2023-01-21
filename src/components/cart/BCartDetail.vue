<script lang="ts" setup>
import BModal from '../BModal.vue';
import BCartDetailItem from './BCartDetailItem.vue';
import BButton from '../BButton.vue';
</script>

<template>
<BModal 
    position="full-right"
    width="407px"
    :show="false"
>
    <template #modalHeader>
        <h1 class="cart__title">
            Mis productos
        </h1>
    </template>
    <template #modalBody>
        <ul>
            <li>
                <BCartDetailItem 
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </li>
        </ul>
    </template>
    <template #modalFooter>
        <div class="cart__footer">
            <BButton
                bg="#FFDB4D80"
                color="#403300"
            >
                Vaciar canasta
            </BButton>
            <BButton
                bg="#FFCC00"
                color="#403300"
                padding="7px 13px"
            >
                <div class="cart__button-whatsapp">
                    <p class="cart__button-whatsapp__text">
                        Pedir por Whatsapp
                    </p>
                    <div class="cart__button-whatsapp__wrapper">
                        <span class="cart__button-whatsapp__unids">20 unids</span>
                        <span class="cart__button-whatsapp__price">$ 40.000</span>
                    </div>
                </div>
            </BButton>
        </div>
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
.cart__footer {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 13px;
    padding: 16px;
    border-top: 1px solid #D9D9D9;
}
.cart__button-whatsapp {
    display: flex;
    flex-direction: column;
}
.cart__button-whatsapp__text {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    color: #403300;
    margin-bottom: 5px;
}
.cart__button-whatsapp__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.cart__button-whatsapp__unids {
    background: #403300;
    color: #ffffff;
    padding: 5px;
    height: 24px;
    border-radius: 5px;
    font-size: 10px;
}
</style>