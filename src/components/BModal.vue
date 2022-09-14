<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
    show: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: 'center'
    },
    width: {
        type: String,
        default: '1200px'
    }
})

const emits = defineEmits(['closeModal'])
const closeModal = () => {
    emits('closeModal')
}

</script>
<template>
    <div class="modal" v-if="show">
        <div class="modal__backdrop" :class="[`modal--${position}`]">
            <div class="modal__content" :class="[`modal__content--${position}`]">
                <img 
                    class="modal__close" 
                    src="@/assets/icons/icon-close.svg" 
                    alt="" 
                    title="Cerrar"
                    @click="closeModal">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.modal--full {
    justify-content: center;
    align-items: flex-start;
    padding: 0;
}
.modal__backdrop {
    background: rgba(0,0,0, .5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0;
}
.modal__content {
    position: relative;
    width: 100%;
    max-width: v-bind(width);
    height: 100%;
    display: flex;
}
.modal__content--full {
    justify-content: center;
    align-items: flex-start;
}
.modal__close {
    position: absolute;
    top: 18px;
    right: 20px;
    cursor: pointer;
}

@media (min-width: 576px) {
    .modal--top {
        justify-content: center;
        align-items: flex-start;
        padding: 0 40px 40px;
    }
    .modal--center {
        justify-content: center;
        align-items: center;
        padding: 40px;
    }
    .modal--bottom {
        justify-content: center;
        align-items: flex-end;
        padding: 40px 40px 0;
    }
    .modal--left {
        justify-content: flex-start;
        align-items: center;
        padding: 40px 40px 40px 0;
    }
    .modal--right {
        justify-content: flex-end;
        align-items: center;
        padding: 40px 0 40px 40px;
    }
    .modal__content--top {
        justify-content: center;
        align-items: flex-start;
    }
    .modal__content--center {
        justify-content: center;
        align-items: flex-start;
    }
    .modal__content--bottom {
        flex-direction: column;
        justify-content: flex-end;
    }
    .modal__content--left {
        justify-content: center;
        align-items: flex-start;
    }
    .modal__content--right {
        justify-content: center;
        align-items: flex-start;
    }
}
</style>