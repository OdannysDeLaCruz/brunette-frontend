<script setup>
import { ref } from "vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";
import BRadioCardCompact from "@/components/inputs/BRadioCardCompact.vue";
import { usePurchasingProcessStore } from '../../stores/purchasingProcessStore'
import { useOrderStore } from "../../stores/orderStore";

const { steps } = usePurchasingProcessStore()
const paymentMethod = ref(steps['paymentMethod'])
const { order, savePaymentMethod } = useOrderStore()

const handleSelected = (id) => {
    console.log('id emitted', id)
    savePaymentMethod(id)
}

const isActive = (id) => {
    return order.payment.method && order.payment.method === id
}

</script>
<template>
<section class="payment__method">
    <BPurchasingTitle
        :title="paymentMethod.title"
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
                        v-for="payment in paymentMethod.data"
                        :key="payment.id"
                        class="payment__method__list-item"
                    >
                        <BRadioCardCompact
                            :id="payment.id"
                            :name="payment.name"
                            :image="payment.image"
                            input-name="payment"
                            @selected="handleSelected"
                            :active="isActive(payment.id)"
                        />
                    </li>
                </ul>
            </form>
        </template>
    </BPurchasingSegment>
</section>
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
