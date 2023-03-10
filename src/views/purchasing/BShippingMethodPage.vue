<script setup>
import { ref } from "vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";
import BRadioCardCompact from "@/components/inputs/BRadioCardCompact.vue";
import { usePurchasingProcessStore } from '../../stores/purchasingProcessStore';

const purchasingProcessStore = usePurchasingProcessStore()
const shippingMethod = ref(purchasingProcessStore.steps['shippingMethod'])

const handleSelected = (id)  => {
    console.log('id emitted', id)
}

</script>
<template>
<section class="shipping__method">
    <BPurchasingTitle
        :title="shippingMethod.title" 
        align="center" 
        class="shipping__method__title"
    />
            
    <BPurchasingSegment
        title="Formas de entrega"
        subtitle="Selecciona una forma"
    >
        <template #purchasingSegmentList>
            <ul class="shipping__method__list">
                <li 
                    v-for="shipping in shippingMethod.data"
                    :key="shipping.id"
                    class="shipping__method__list-item"
                >
                    <BRadioCardCompact
                        :id="shipping.id" 
                        :name="shipping.label" 
                        :image="shipping.image" 
                        :additional="shipping.additionalCost && `+ ${shipping.additionalCost}`" 
                        input-name="inputShippingMethod"
                        @selected="handleSelected" 
                    />
                </li>
            </ul>
        </template>
    </BPurchasingSegment>
</section>
</template>
<style lang="scss" scoped>
.shipping__method__title {
    margin-bottom: 60px;
}
.shipping__method__list {
    width: 100%;
    max-width: 440px;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
}
</style>
