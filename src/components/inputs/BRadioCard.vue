<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'

interface Address {
    id: number,
    name: string,
    additional?: string | number
}

const props = defineProps({
    address: {
        type: Object as PropType<Address>,
        required: true
    },
    inputName: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['selected'])
const inputNameRef = ref()

const handleClick = () => {
    emits('selected', props.address?.id)
    inputNameRef.value.checked = true
}

</script>
<template>
<div class="radio-card">
    <label 
        class="radio-card__label"
        @click.prevent="handleClick"
    >
    <input
        id="radioCardInput"
        ref="inputNameRef"
        class="radio-card__radio-input"
        type="radio"
        :value="address?.id"
        :name="inputName"
        :checked="active"
    >
        <div class="radio-card__wrapper">
            <div class="radio-card__icon">
                <slot name="radioCardIcon" />
            </div>
            <div class="radio-card__content">
                <span class="radio-card__title radio-card__title--medium">{{ address?.name }}</span>
                <span class="radio-card__title radio-card__title--small"> {{ address?.additional }}</span>
            </div>
        </div>
    </label>
</div>
</template>
<style lang="scss" scoped>
.radio-card {
    background: #FFFFFF;
}
.radio-card__wrapper {
    border: 1px solid #FFFFFF;
    padding: 17px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 20px auto 22px;
    gap: 16px;
    align-items: center;
}
.radio-card__icon {
    height: 100%;
}
.radio-card__content {
    display: flex;
    flex-direction: column;
}
.radio-card__title {
    font-style: normal;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
}

.radio-card__title--medium {
    font-size: 16px;
    line-height: 17px;
}
.radio-card__title--small {
    font-size: 14px;
    line-height: 17px;
}

.radio-card__radio-input {
    display: none;
}
.radio-card__radio-input:checked + .radio-card__wrapper {
    border: 1px solid #FFCC00;
}
</style>
