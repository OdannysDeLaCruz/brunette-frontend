<script lang="ts" setup>
import { useRoute } from 'vue-router';
import BProduct from '@/components/BProduct.vue';
const route = useRoute()
</script>
<template>
    <section class="category">
        <h1 class="category__title">{{ route.params.category }}</h1>
        <section class="category__products-list">
            <BProduct 
                class="category__products-list__item"
                v-for="i in [0,1,2,3,4,5,6,7,8,9]"
                :key="i"
                :name="route.params.category"
                :price="3500"
            />
        </section>
    </section>
</template>
<style lang="scss" scoped>
.category {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 16px;
}
.category__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-bottom: 20px;
    text-transform: capitalize;
}
.category__products-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.category__products-list__item {
    width: 100%;
}

@media (min-width: 576px) {
    .category {
        padding: 20px 16px;
    }
    .category__products-list {
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

</style>