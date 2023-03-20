<script setup>
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";
</script>
<template>
<section class="finalizing-order">
    <BPurchasingTitle
        title="Antes de finalizar"
        align="center"
        class="finalizing-order__title"
    />
        
    <BPurchasingSegment title="">
        <template #purchasingSegmentList>
            <article class="finalizing-order__disclaimer">
                <h1 class="title">Apartaremos tu pedido durante 24 horas, presenta tu soporte de pago durante ese tiempo para finzalizar la orden.</h1>
                <p>En caso de no presentar soporte pago tu orden se cancelará.</p>
            </article>
        </template>
    </BPurchasingSegment>
</section>
</template>
<style lang="scss" scoped>

.finalizing-order__title {
    margin-bottom: 60px;
}
.finalizing-order__disclaimer {
    background: #fff;
    text-align: justify;
    padding: 25px;
}
.finalizing-order__disclaimer .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 16px;
    text-align: center;
}
.finalizing-order__disclaimer p {
    margin-bottom: 20px;
    text-align: center;
}

</style>
