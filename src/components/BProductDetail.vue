<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BModal from "@/components/BModal.vue"

const props = defineProps({
    productDetail: {
        type: String,
        default: ''
    }
})

const emits = defineEmits(['closeDetail'])

const closeModal = () => {
    emits('closeDetail')
}

</script>
<template>
    <BModal 
        position="bottom" 
        :show="productDetail ? true : false"
        @closeModal="closeModal"
    >
        <div class="detail">
            <div class="detail__content">
                <div class="detail__image-wrapper">
                    <img src="@/assets/images/kanekalon.jpeg" alt="">
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
}
.detail::-webkit-scrollbar {
    display: none;
}

.detail__content {
    background: #fff;
    border-radius: 10px;
    padding: 40px 30px;
}
</style>