<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    id: number,
    name: string,
    image: string,
    additional?: string,
    inputName: string
}

const props = defineProps<Props>()
const emits = defineEmits(['selected'])
const inputNameRef = ref()

const handleClick = () => {
    emits('selected', props.id)
    inputNameRef.value.checked = true
}

</script>
<template>
<label
    class="payment-method__card"
    @click.prevent="handleClick"
>
    <input
        ref="inputNameRef"
        class="payment-method__check"
        type="radio"
        :name="inputName"
        :value="id"
    >
    <div class="payment-method__wrapper">
        <figure class="payment-method__figure">
            <img
                class="payment-method__image"
                :src="image"
                alt="Payment method image"
            >
        </figure>
        <p class="payment-method__text payment-method__title">{{ name }}</p>
        <p
            v-if="additional"
            class="payment-method__text payment-method__subtitle"
        >{{ additional }}</p>
    </div>
</label>
</template>
<style lang="scss" scoped>
.payment-method__wrapper {
    width: 210px;
    height: 130px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.payment-method__check {
    display: none;
}
.payment-method__check:checked + .payment-method__wrapper {
    border: 1px solid #FFCC00;
}
.payment-method__figure {
    width: 60px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    overflow: hidden;
    border-radius: 125px;
    margin-bottom: 16px;
}
.payment-method__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.payment-method__text {
    font-style: normal;
    font-weight: 600;
    text-align: center;
    line-height: 17px;
    margin: 0;
}
.payment-method__title {
    font-size: 16px;
    color: #000000;
}
.payment-method__subtitle {
    font-size: 12px;
    color: #00000099;
}
</style>