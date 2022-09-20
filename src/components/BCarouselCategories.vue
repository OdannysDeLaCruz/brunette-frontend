<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import BContent from './layouts/BContent.vue';

type CategoryType = {
    name: string
}

const categories = ref<CategoryType[]>()

onMounted(() => {
    categories.value = [
        { name: 'Kanekalon' },
        { name: 'Lanapelo' },
        { name: 'Pelo pesado' },
        { name: 'Micro zizi' },
        { name: 'Kanekalon' },
        { name: 'Lanapelo' },
        { name: 'Pelo pesado' },
        { name: 'Micro zizi' },
        { name: 'Kanekalon' },
        { name: 'Lanapelo' },
        { name: 'Pelo pesado' },
        { name: 'Micro zizi' },
    ]
})
</script>
<template>
    <div class="carousel-categories">
        <div class="container carousel-categories__wrapper">
            <div class="carousel-categories__slider">
                <div
                    v-for="(category, index) in categories"
                    :key="index"
                    class="category"
                >
                    <router-link :to="`/categories/${category.name}`">
                        <span class="category__name"> {{ category.name }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carousel-categories {
    background: #ffffff;
}
.carousel-categories__wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
    height: 40px;
    padding-left: 20px;
}
.carousel-categories__wrapper::-webkit-scrollbar {
    height: 4px;
    background: #cccccc;
}
.carousel-categories__wrapper::-webkit-scrollbar-thumb {
    background: var(--color-primary);
}
.carousel-categories__slider {
    display: flex;
    align-items: center;
}
.category {
    margin-right: 30px;
    cursor: pointer;
}
.category__name {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.7);
    white-space: nowrap;
}
</style>
