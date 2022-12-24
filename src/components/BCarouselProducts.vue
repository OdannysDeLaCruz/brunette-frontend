<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import BProduct from '@/components/BProduct.vue';

const breakpoints = {
    0: {
        itemsToShow: 1.2,
        snapAlign: 'start',
    },
    300: {
        itemsToShow: 1.9,
        snapAlign: 'start',
    },
    480: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
    700: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    },
}

defineProps({
    title: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: '#'
    },
    products: {
        type: Array,
        default() {
            return []
        }
    }
})

</script>
<template>
    <div class="carousel-product">
        <span class="carousel-product__header">
            <h2 class="carousel-product__title">{{ title }}</h2>
            <router-link :to="link" class="carousel-product__link">Ver todos</router-link>
        </span>
        <carousel 
            :items-to-show="5.2"
            :breakpoints="breakpoints"
            :wrap-around="true"
        >
            <slide 
                v-for="product in products" 
                :key="product.id"
            >
                <BProduct :id="product.id" :name="product.name" :price="product.price" />
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>
<style lang="scss" scoped>
.carousel-product__header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}
.carousel-product__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
}
.carousel-product__link {
    margin-left: 20px;
}
.carousel__slide {
  padding: 10px;
}
</style>