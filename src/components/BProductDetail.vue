<script lang="ts" setup>
import { computed } from "vue"
import BModal from "@/components/BModal.vue"
import BButton from '@/components/BButton.vue';
import BControlQuantity from "@/components/BControlQuantity.vue";
import { ref } from "vue";

const props = defineProps({
    productDetail: {
        type: Number,
        default: null
    }
})

const emits = defineEmits(['closeDetail'])

const closeModal = () => {
    emits('closeDetail')
}

const quantity = ref(0)
const onDecrease = () => {
    if ( quantity.value > 0 ) {
        quantity.value -= 1
    }
}
const onIncrease = () => {
    quantity.value += 1
}

</script>
<template>
    <BModal 
        position="center" 
        width="850px"
        :show="productDetail ? true : false"
        @closeModal="closeModal"
    >
        <template v-slot:modalHeader>
            <h1 class="detail__title detail__title--no-wrapper">Kanekalon Californiano Jumbo braid </h1>
        </template>
        <template v-slot:modalBody>
            <div class="detail">
                <div class="detail__content">
                    <div class="detail__image-wrapper">
                        <img class="detail__image" src="@/assets/images/kanekalon.jpeg" alt="">
                    </div>
                    <div class="detail__summary">
                        <!-- <h1 class="detail__title">Kanekalon Californiano Jumbo braid </h1> -->
                        <span class="detail__price">$14.000</span>
                        <p class="detail__description">Cabello sintetico para trenzas marca jumbo brais.</p>
                        <div class="detail__section-add">
                            <BControlQuantity :quantity="quantity" @onDecrease="onDecrease" @onIncrease="onIncrease" />

                            <BButton color="#000000" bg="#E7E7E7" padding="10px 16px" class="control-quantity__button-add"> AGREGAR AL CARRITO </BButton>
                            <BButton color="#ffffff" bg="#FFCC00" padding="10px 16px" class="control-quantity__button-buy"> COMPRAR DE UNA </BButton>
                        </div>
                    </div>
                </div>
                <!-- section "recomendados, mas vendidos, productos vistos, etc" -->
                <div class="detail__generals">
                    
                </div>
            </div>
        </template>
    </BModal>
</template>
<style lang="scss" scoped>
.detail {
    width: 100%;
}
.detail__content {
    padding: 20px;
    display: grid;
    grid-gap: 30px;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
.detail__image-wrapper {
    max-width: 427px;
    max-height: 335px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.detail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.detail__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #403300;
}
.detail__title--no-wrapper {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.detail__price {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
    color: #FFCC00;
    margin-top: 20px;
}
.detail__description {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #7D7D7D;
    margin-top: 20px;
}

.detail__section-add {
    display: grid;
    grid-gap: 16px;
    align-items: center;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr;
    margin-top: 40px;
}

.control-quantity__button-add {
    width: 100%;
}
.control-quantity__button-buy {
    grid-column-start: 1;
    grid-column-end: 3;
}

@media (min-width: 576px) {
    .detail__content {
        grid-template-columns: 1fr 1fr;
    }
    .detail__title {
        font-size: 28px;
        line-height: 35px;
    }
    .detail__description {
        font-size: 16px;
        // line-height: 35px;
    }
}
</style>