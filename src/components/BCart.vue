<template>
    <BButton mode="orange" class="cart">
        <div class="cart__wrapper">
            <svg class="cart__icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.7 15.2C4.655 15.2 3.8 16.055 3.8 17.1C3.8 18.145 4.655 19 5.7 19C6.745 19 7.6 18.145 7.6 17.1C7.6 16.055 6.745 15.2 5.7 15.2ZM0 0V1.9H1.9L5.32 9.12L3.99 11.4C3.895 11.685 3.8 12.065 3.8 12.35C3.8 13.395 4.655 14.25 5.7 14.25H17.1V12.35H6.08C5.985 12.35 5.89 12.255 5.89 12.16V12.065L6.745 10.45H13.775C14.535 10.45 15.105 10.07 15.39 9.49996L18.81 3.325C19 3.135 19 3.04 19 2.85C19 2.28 18.62 1.9 18.05 1.9H3.99L3.135 0H0ZM15.2 15.2C14.155 15.2 13.3 16.055 13.3 17.1C13.3 18.145 14.155 19 15.2 19C16.245 19 17.1 18.145 17.1 17.1C17.1 16.055 16.245 15.2 15.2 15.2Z" fill="black"/>
            </svg>
            <div class="cart__counter text-sm text-black font-bold">
                1
            </div>
        </div>
    </BButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BButton from '@/components/BButton.vue';

export default defineComponent({
    name: 'BCart',
    components: {
        BButton
    }
})
</script>

<style>
.cart__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart__counter {
    color: #000000;
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
}
</style>