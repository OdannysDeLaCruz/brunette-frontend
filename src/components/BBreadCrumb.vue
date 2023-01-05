<script lang="ts" setup>
defineProps({
    routes: {
        type: Array,
        default() {
            return []
        }
    }
})
</script>
<template>
<div class="breadcrumb">
    <span 
        v-for="route in routes"
        :key="route"
        class="breadcrumb__item"
    >
        {{ `${route}` }}
    </span>
</div>
</template>
<style lang="scss" scoped>
.breadcrumb {
    display: flex;
    align-items: center;
}
.breadcrumb__item {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 9px;
    color: #777777;
}

.breadcrumb__item:not(:last-child)::after {
    content: '/';
    position: relative;
    padding: 0 5px;
}

.breadcrumb__item:last-child {
    font-weight: 700;
}
</style>