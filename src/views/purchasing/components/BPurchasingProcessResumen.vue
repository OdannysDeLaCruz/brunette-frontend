<script setup>
import BButton from "@/components/BButton.vue";

defineProps({
    buttonText: {
        type: String,
        default: 'Button text'
    },
    click: {
        type: Function,
        default: () => {}
    }
})

</script>
<template>
<div class="purchasing-process__resumen">
    <div class="purchasing-process__resumen__ammount">
        <span
            class="
                    purchasing-process__resumen__ammount__item
                    purchasing-process__resumen__ammount__item--small
                "
        >Envío $ 4.000</span>
        <span class="purchasing-process__resumen__ammount__item">Total $ 40.000</span>
    </div>
    <BButton
        class="purchasing-process__resumen__button-next"
        bg="#FFCC00"
        color="#403300"
        size="large"
        @click="click()"
    >
        {{ buttonText }}
    </BButton>
</div>
</template>
<style lang="scss" scoped>
.purchasing-process__resumen {
    margin-top: 120px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background: #fff;
    padding: 16px 20px;
    bottom: 0;
    position: sticky;
}
.purchasing-process__resumen__ammount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.purchasing-process__resumen__ammount__item {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    text-align: right;
    color: #403300;
    margin-bottom: 5px;
}
.purchasing-process__resumen__ammount__item--small {
    font-size: 14px;
    color: #7c7868;
}
.purchasing-process__resumen__button-next {
    width: 100%;
    margin: 0;
}

@media (min-width: 480px) {
    .purchasing-process__resumen {
        flex-direction: column;
        grid-gap: 50px;
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr;
    }
}
</style>