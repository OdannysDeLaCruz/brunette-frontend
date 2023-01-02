<script lang="ts" setup>
import { ref } from "vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BRadioCard from "@/components/inputs/BRadioCard.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";

const addresses = ref([
    {
        id: 1,
        name: 'Calle 6b # 41 - 36',
        additional: 'La Nevada'
    },
    {
        id: 2,
        name: 'Calle 6b # 41 - 36',
        additional: 'La Nevada'
    }
])

const handleSelected = (id: string): void => {
    console.log('id emitted', id)
}

</script>
<template>
    <section class="shipping-address">
        <BPurchasingTitle title="Datos de envío" align="center" class="shipping-address__title" />
        
        <BPurchasingSegment title="Mis direcciones" subtitle="Selecciona una dirección">
            <template v-slot:purchasingSegmentList>
                <ul class="shipping-address__list">
                    <li 
                        class="shipping-address__list-item"
                        v-for="address in addresses"
                        :key="address.id"
                    >
                        <BRadioCard 
                            :address="address"
                            inputName="address"
                            @selected="handleSelected"
                        >
                            <template v-slot:radioCardIcon>
                                <img src="@/assets/icons/icon-pin-map.svg" alt="Pin">
                            </template>
                        </BRadioCard>
                    </li>
                </ul>
            </template>
        </BPurchasingSegment>

        <button class="shipping-address__button-add-new-adddress">
            <span>
                <img src="@/assets/icons/icon-plus-yellow.svg" alt="add">
            </span>
            Agrear nueva dirección
        </button>
    </section>
    <BPurchasingProcessResumen buttonText="Continuar" />
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
