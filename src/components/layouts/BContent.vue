<script lang="ts" setup>
defineProps({
    type: {
        type: String,
        default: 'content'
    }
})
</script>
<template>
<div class="wrapper">
    <div :class="type">
        <slot />
    </div>
</div>
</template>
<style lang="scss" scoped>
.wrapper {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
.content {
    max-width: 1240px;
    width: 100%;
}
.content-fluid {
    width: 100%;
}

@media (min-width: 576px) {
    .wrapper {
        padding: 0 16px;
    }
}
</style>