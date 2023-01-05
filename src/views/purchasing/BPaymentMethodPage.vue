<script lang="ts" setup>
import { ref } from "vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";
import BRadioCardCompact from "@/components/inputs/BRadioCardCompact.vue";

const paymentList = ref([
    {
        id: 1,
        name: 'Transferencia Bancaría',
        image: 'https://picsum.photos/200/200?random=1'
    },
    {
        id: 2,
        name: 'Efectivo',
        image: 'https://picsum.photos/200/200?random=2'
    },
    {
        id: 3,
        name: 'Nequi',
        image: 'https://picsum.photos/200/200?random=3'
    }
])

const handleSelected = (id: string): void => {
    console.log('id emitted', id)
}

</script>
<template>
<section class="payment__method">
    <BPurchasingTitle
        title="¿Como quieres pagar?"
        align="center"
        class="payment__method__title"
    />
        
    <BPurchasingSegment
        title="Formas de pago"
        subtitle="Selecciona una forma"
    >
        <template #purchasingSegmentList>
            <form action="">
                <ul class="payment__method__list">
                    <li
                        v-for="payment in paymentList"
                        :key="payment.id"
                        class="payment__method__list-item"
                    >
                        <BRadioCardCompact
                            :id="payment.id"
                            :name="payment.name"
                            :image="payment.image"
                            input-name="payment"
                            @selected="handleSelected"
                        />
                    </li>
                </ul>
            </form>
        </template>
    </BPurchasingSegment>
</section>
<BPurchasingProcessResumen button-text="Continuar" />
</template>
<style lang="scss" scoped>
.payment__method__title {
    margin-bottom: 60px;
}
.payment__method__list {
    width: 100%;
    max-width: 440px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
}
</style>
