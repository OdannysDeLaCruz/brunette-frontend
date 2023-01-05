<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
</script>
<template>
<carousel>
    <slide 
        v-for="slide in 10" 
        :key="slide"
    >
        <div class="carousel__item">
            <img
                class="carousel__image"
                src="@/assets/images/banner.png"
                alt="Banner Brunette"
            >
        </div>
    </slide>

    <template #addons>
        <!-- <navigation /> -->
        <pagination />
    </template>
</carousel>
</template>
<style lang="scss" scoped>
.carousel__item {
    width: 100%;
}
.carousel__image {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
}
</style>