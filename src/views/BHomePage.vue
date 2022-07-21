<script lang="ts" setup>
import BCarouselCategories from '@/components/BCarouselCategories.vue'
import BBanner from '@/components/BBanner.vue'
import BPaymentMethodsList from '@/components/payment/BPaymentMethodsList.vue';
import BCarouselProducts from '@/components/BCarouselProducts.vue';
import { onMounted, ref } from 'vue';

const products: any = ref([])

onMounted(() => {
    products.value = [
        {
            name: "Kanekalon",
            price: 10000
        },
        {
            name: "Lanapelo",
            price: 3500
        },
        {
            name: "Kanekalon",
            price: 10000
        },
        {
            name: "Lanapelo",
            price: 3500
        },
        {
            name: "Kanekalon",
            price: 10000
        },
        {
            name: "Lanapelo",
            price: 3500
        },
    ]
})

</script>
<template>
    <div class="home">
        <section class="section__carousel-categories">
            <BCarouselCategories />
        </section>
        <section class="container section__banner-main">
            <BBanner />
        </section>
        <section class="container section__payment-methods">
            <BPaymentMethodsList />
        </section>
        <section class="container section__carousel-products">
            <BCarouselProducts title="¡Promociones del día!" link="promotions" :products="products" />
        </section>
        <section class="container section__carousel-products">
            <BCarouselProducts title="Mas vendidos" :products="products" />
        </section>
        <section class="container section__carousel-products">
            <BCarouselProducts title="Lanapelos" link="categories/lanapelos" :products="products" />
        </section>
        <section class="container section__carousel-products">
            <BCarouselProducts title="Kanekalon" link="categories/kanekalon" :products="products" />
        </section>
    </div>
</template>
<style lang="scss" scoped>
.home {
    padding: 0 0 40px 0;
}
.section__carousel-categories {
    position: sticky;
    top: 0;
    z-index: 9;
}
.section__banner-main {
    padding: 16px;
    margin-top: 30px;
}

.section__payment-methods {
    margin-top: 20px;
}

.section__carousel-products {
    margin-top: 50px;
}
</style>