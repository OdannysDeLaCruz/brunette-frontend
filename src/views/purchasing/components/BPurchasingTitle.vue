<script lang="ts" setup>
interface Props {
    title: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Hola',
})
</script>
<template>
    <h1 class="shipping-address__title">{{ title }}</h1>
</template>
<style lang="scss" scoped>
.shipping-address__title {
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 17px;
    color: #000000;
}
</style>