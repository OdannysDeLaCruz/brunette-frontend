<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'

interface Address {
    id: number,
    name: string,
    additional?: string
}

const props = defineProps({
    address: {
        type: Object as PropType<Address>,
        require: true
    },
    inputName: {
        type: String
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
        <label class="radio-card__label" @click.prevent="handleClick">
            <div class="radio-card__wrapper">
                <div class="radio-card__icon">
                    <slot name="radioCardIcon"></slot>
                </div>
                <div class="radio-card__content">
                    <span class="radio-card__title radio-card__title--medium">{{ address?.name }}</span>
                    <span class="radio-card__title radio-card__title--small"> {{ address?.additional }}</span>
                </div>
                <div class="radio-card__radio">
                    <input class="radio-card__radio-input" type="radio" id="radioCardInput" :value="address?.id" :name="inputName" ref="inputNameRef" />
                </div>
            </div>
        </label>
    </div>
</template>
<style lang="scss" scoped>
.radio-card {
    padding: 17px;
    background: #FFFFFF;
    border-radius: 5px;
}
.radio-card__wrapper {
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
.radio-card__radio {}
.radio-card__radio-input {

}
</style>
