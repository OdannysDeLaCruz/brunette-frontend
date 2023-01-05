<script lang="ts" setup>
import BPaymentMethod from './BPaymentMethod.vue';
const paymentMethodsList = [
    {
        title: 'Paga en efectivo',
        subtitle: 'Efecty, Supergiro',
        image: 'efecty.svg'
    },
    {
        title: 'Pagale al domiciliario',
        subtitle: 'Pagas al recibir',
        image: 'domicilio.svg'
    },
    {
        title: 'Transferencia bancaria',
        subtitle: 'Corresponsal, Nequi, A la mano, cuenta bancaria',
        image: 'transferencia.svg'
    },
]
const getImage = ( image: string ) => {
    return new URL(`../../assets/icons/payments/${image}`, import.meta.url).href
}
</script>
<template>
<div class="payment-method-list">
    <div class="payment-method-list__wrapper">
        <BPaymentMethod 
            v-for="paymentMethod in paymentMethodsList"
            :key="paymentMethod.title"
            class="payment-method-list__item"
            :title="paymentMethod.title" 
            :subtitle="paymentMethod.subtitle"
        >
            <template #paymentMethodImage>
                <img
                    :src="getImage(paymentMethod.image)"
                    :alt="paymentMethod.title"
                >
            </template>
        </BPaymentMethod>
    </div>
</div>
</template>
<style lang="scss" scoped>
.payment-method-list {
    overflow: hidden;
    overflow-x: auto;
    padding: 15px;
    border: 1px solid #FFCC00;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    min-height: 90px;
    background: #ffffff;
}
.payment-method-list::-webkit-scrollbar {
    height: 4px;
}
.payment-method-list::-webkit-scrollbar-thumb {
    background: #FFCC00;
}
.payment-method-list__wrapper {
    display: inline-flex;
}
.payment-method-list__item {
    margin: 0 45px;
}
</style>