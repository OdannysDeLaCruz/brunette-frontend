<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BModal from "@/components/BModal.vue"

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

</script>
<template>
    <BModal 
        position="center" 
        width="950px"
        :show="productDetail ? true : false"
        @closeModal="closeModal"
    >
        <div class="detail">
            <div class="detail__content">
                <div class="detail__image-wrapper">
                    <img class="detail__image" src="@/assets/images/kanekalon.jpeg" alt="">
                </div>
                <div class="detail__summary">
                    <h1 class="detail__title">Kanekalon Californiano Jumbo braid </h1>
                    <span class="detail__price">$14.000</span>
                    <p class="detail__description">Cabello sintetico para trenzas marca jumbo brais.</p>
                </div>
            </div>
            <!-- section "recomendados, mas vendidos, productos vistos, etc" -->
            <div class="detail__generals">
                
            </div>
        </div>
    </BModal>
</template>
<style lang="scss" scoped>
.detail {
    overflow: hidden;
    overflow-y: auto;  
    border-radius: 10px;
    // height: 100%;
    width: 100%;
}
.detail::-webkit-scrollbar {
    display: none;
}
.detail__content {
    background: #fff;
    border-radius: 10px;
    padding: 40px 30px;
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
.detail__summary {
}
.detail__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #403300;
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
    line-height: 35px;
    color: #7D7D7D;
}

@media (min-width: 576px) {
    .detail__content {
        grid-template-columns: 1fr 1fr;
    }
}
</style>