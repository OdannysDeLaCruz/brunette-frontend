<script lang="ts" setup>
import { ref } from "vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BRadioCard from "@/components/inputs/BRadioCard.vue";

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
    <section class="shipping-address">
        <BPurchasingTitle title="Datos de envío" align="center" class="shipping-address__title" />
        <section class="shipping-address__address">
            <h1 class="shipping-address__address-title">Mis direcciones</h1>
            <h2 class="shipping-address__address-subtitle">Selecciona una dirección</h2>
            
            <ul class="shipping-address__list">
                <li 
                    class="shipping-address__list-item"
                    v-for="address in addresses"
                    :key="address.id"
                >
                    <BRadioCard 
                        :address="address.address" 
                        :additional="address.additional"
                        inputName="address"
                    >
                        <template v-slot:radioCardIcon>
                            <img src="@/assets/icons/icon-pin-map.svg" alt="Pin">
                        </template>
                    </BRadioCard>
                </li>
            </ul>

            <button class="shipping-address__button-add-new-adddress">
                <span>
                    <img src="@/assets/icons/icon-plus-yellow.svg" alt="add">
                </span>
                Agrear nueva dirección
            </button>

        </section>
    </section>
    <BPurchasingProcessResumen />
</template>
<style lang="scss" scoped>
.shipping-address {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
}
.shipping-address__title {
    margin-bottom: 60px;
}
.shipping-address__address {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.shipping-address__address-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    margin-bottom: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
}
.shipping-address__address-subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    margin-bottom: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
}
.shipping-address__list {
    max-width: 450px;
    width: 100%;
}
.shipping-address__list-item {
    margin-bottom: 16px;
}

.shipping-address__button-add-new-adddress {
    gap: 10px;
    margin-top: 40px;
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
}
</style>
