<script lang="ts" setup>
import { ref } from "vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BRadioCard from "@/components/inputs/BRadioCard.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";

const addresses = ref([
    {
        id: 1,
        address: 'Calle 6b # 41 - 36',
        additional: 'La Nevada'
    },
    {
        id: 2,
        address: 'Calle 6b # 41 - 36',
        additional: 'La Nevada'
    }
])

</script>
<template>
    <section class="payment__method">
        <BPurchasingTitle title="¿Como quieres pagar?" align="center" class="payment__method__title" />
        
        <BPurchasingSegment title="Formas de pago" subtitle="Selecciona una forma">
            <template v-slot:purchasingSegmentList>
                <ul class="payment__method__list">
                    <li 
                        class="payment__method__list-item"
                        v-for="address in addresses"
                        :key="address.id"
                    >
                       
                    </li>
                </ul>
            </template>
        </BPurchasingSegment>
    </section>
    <BPurchasingProcessResumen />
</template>
<style lang="scss" scoped>
.payment__method__title {
    margin-bottom: 60px;
}
.payment__method__list {
    width: 100%;
    max-width: 440px;
    margin: auto;
}
</style>
