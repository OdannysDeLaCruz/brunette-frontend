<script lang="ts" setup>
import { onMounted, ref } from 'vue'

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
        <div class="carousel-categories__wrapper">
            <div class="carousel-categories__slider">
                <div
                    v-for="(category, index) in categories"
                    :key="index"
                    class="category"
                >
                    <span class="category__name"> {{ category.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.carousel-categories__wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    overflow-x: scroll;
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
