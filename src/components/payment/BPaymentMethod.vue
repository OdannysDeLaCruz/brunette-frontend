<script lang="ts" setup>

defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    subtitle: {
        type: String,
        default: 'Subtitle'
    },
})
</script>
<template>
    <div class="payment-method">
        <div class="payment-method__wrapper-image">
            <slot name="paymentMethodImage"></slot>
        </div>
        <div>
            <h1 class="payment-method__title"> {{ title }} </h1>
            <h1 class="payment-method__subtitle"> {{ subtitle }} </h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.payment-method {
    display: flex;
    align-items: center;
    min-width: 300px;
}
.payment-method__wrapper-image {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    border-radius: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}
.payment-method__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFCC00;
}
.payment-method__subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);
}
</style>