<script lang="ts" setup>
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
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
        
    <BPurchasingSegment title="Ten en cuenta lo siguiente:">
        <template #purchasingSegmentList>
            <article class="finalizing-order__disclaimer">
                <p>
                    Para transferencias bancarias debes presentar soporte de pago en un transcurso de 24 horas después de realizado el pedido. No te preocupes, apartaremos tu pedido durante todo ese tiempo.
                </p>
                <p>
                    En caso de no presentar soporte pago de tu orden, esta será cancelada.
                </p>
            </article>
        </template>
    </BPurchasingSegment>
</section>
<BPurchasingProcessResumen button-text="Finalizar pedido" />
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
.finalizing-order__disclaimer p {
    margin-bottom: 20px;
}

</style>
