<script lang="ts" setup>
defineProps({
    quantity: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits(['onDecrease', 'onIncrease'])

const handleDecrease = () => {
    emits('onDecrease')
}

const handleIncrease = () => {
    emits('onIncrease')
}
</script>

<template>
    <div class="control-quantity">
        <button class="control-quantity__button" @click="handleDecrease">-</button>
        <div class="control-quantity__counter">{{ quantity }}</div>
        <button class="control-quantity__button" @click="handleIncrease">+</button>
    </div>    
</template>

<style lang="scss" scoped>
// Control quantity
.control-quantity {
    width: 100px;
    height: 36px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.control-quantity__button {
    border: none;
    background: #ffffff;
    width: 31px;
    height: 36px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 19px;
    color: #000000;
}
.control-quantity__button:hover {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
}
.control-quantity__counter {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 12px;
    text-align: center;
    color: #000000;
}
</style>