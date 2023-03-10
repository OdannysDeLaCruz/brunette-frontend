<script setup>
import { ref } from "vue"
import BPurchasingTitle from "./components/BPurchasingTitle.vue"
import BRadioCard from "@/components/inputs/BRadioCard.vue"
import BPurchasingSegment from "./components/BPurchasingSegment.vue"
import { usePurchasingProcessStore } from '../../stores/purchasingProcessStore'

const purchasingProcessStore = usePurchasingProcessStore()
const shippingAddress = ref(purchasingProcessStore.steps['shippingAddress'])

const handleSelected = (id) => {
    console.log('id emitted', id)
}

</script>
<template>
<section class="shipping-address">
    <BPurchasingTitle
        :title="shippingAddress.title"
        align="center"
        class="shipping-address__title"
    />
        
    <BPurchasingSegment
        title="Mis direcciones"
        subtitle="Selecciona una dirección"
    >
        <template #purchasingSegmentList>
            <ul class="shipping-address__list">
                <li 
                    v-for="address in shippingAddress.data"
                    :key="address.id"
                    class="shipping-address__list-item"
                >
                    <BRadioCard 
                        :address="address"
                        input-name="address"
                        @selected="handleSelected"
                    >
                        <template #radioCardIcon>
                            <img
                                src="@/assets/icons/icon-pin-map.svg"
                                alt="Pin"
                            >
                        </template>
                    </BRadioCard>
                </li>
            </ul>
        </template>
    </BPurchasingSegment>

    <button class="shipping-address__button-add-new-adddress">
        <span>
            <img
                src="@/assets/icons/icon-plus-yellow.svg"
                alt="add"
            >
        </span>
        Agrear nueva dirección
    </button>
</section>
</template>
<style lang="scss" scoped>

.shipping-address__title {
    margin-bottom: 60px;
}
.shipping-address__list {
    max-width: 450px;
    width: 100%;
    margin: auto;
}
.shipping-address__list-item {
    margin-bottom: 16px;
}
.shipping-address__button-add-new-adddress {
    gap: 10px;
    background: #FFFFFF;
    border-radius: 125px;
    padding: 14px 30px;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    border: none;
    cursor: pointer;
    margin: 40px auto;
}
</style>
