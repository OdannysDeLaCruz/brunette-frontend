<script lang="ts" setup>
interface Props {
    title?: string,
    subtitle?: string
}

withDefaults(defineProps<Props>(), {
    title: '',
    align: ''
})
</script>
<template>
    <section class="purchasing__segment">
        <h1 class="purchasing__segment__title">{{ title }}</h1>
        <h2 class="purchasing__segment__subtitle">{{ subtitle }}</h2>
        
        <div class="purchasing__segment__list">
            <slot name="purchasingSegmentList"></slot>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.purchasing__segment {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.purchasing__segment__title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    margin-bottom: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
}
.purchasing__segment__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    margin-bottom: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
}
.purchasing__segment__list {
    // max-width: 450px;
    width: 100%;
}
</style>
