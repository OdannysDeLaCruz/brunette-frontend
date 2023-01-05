<script lang="ts" setup>
import { ref } from "vue";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BPurchasingTitle from "./components/BPurchasingTitle.vue";
import BPurchasingSegment from "./components/BPurchasingSegment.vue";
import BRadioCardCompact from "@/components/inputs/BRadioCardCompact.vue";

const shippingList = ref([
    {
        id: 1,
        name: 'Domicilio a mi casa',
        image: 'https://picsum.photos/200/200?random=1',
        ammount: '4000'
    },
    {
        id: 2,
        name: 'Recoger en el local',
        image: 'https://picsum.photos/200/200?random=2',
        ammount: ''
    }
])

const handleSelected = (id: string): void => {
    console.log('id emitted', id)
}

</script>
<template>
<section class="shipping__method">
    <BPurchasingTitle
        title="¿Como quieres recibir tu pedido?" 
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
                    v-for="shipping in shippingList"
                    :key="shipping.id"
                    class="shipping__method__list-item"
                >
                    <BRadioCardCompact
                        :id="shipping.id" 
                        :name="shipping.name" 
                        :image="shipping.image" 
                        :additional="shipping.ammount && `+ ${shipping.ammount}`" 
                        input-name="inputShippingMethod"
                        @selected="handleSelected" 
                    />
                </li>
            </ul>
        </template>
    </BPurchasingSegment>
</section>
<BPurchasingProcessResumen button-text="Continuar" />
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
