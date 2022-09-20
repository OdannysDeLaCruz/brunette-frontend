<script lang="ts" setup>
import BCarouselCategories from '@/components/BCarouselCategories.vue'
import BBanner from '@/components/BBanner.vue'
import BPaymentMethodsList from '@/components/payment/BPaymentMethodsList.vue';
import BCarouselProducts from '@/components/BCarouselProducts.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BContent from '@/components/layouts/BContent.vue';
import BProductDetail from '@/components/BProductDetail.vue';

const products: any = ref([
    {
        id: 1,
        name: "Version Mobile Kanekalon californiano",
        price: 10000
    },
    {
        id: 2,
        name: "Lanapelo",
        price: 3500
    },
    {
        id: 3,
        name: "Kanekalon",
        price: 10000
    },
    {
        id: 4,
        name: "Lanapelo",
        price: 3500
    },
    {
        id: 6,
        name: "Kanekalon",
        price: 10000
    },
    {
        id: 7,
        name: "Lanapelo",
        price: 3500
    },
])

const route = useRoute()
const router = useRouter()
const productDetail = ref()

const setProductDetail = () => {
    if (route.query.productDetail) {
        productDetail.value = Number(route.query.productDetail)
    }
}

onMounted(() => {
    setProductDetail()
})

watch(route, () => {
    setProductDetail()
})

const closeDetail = () => {
    productDetail.value = null
    router.replace({
        query: undefined
    })
}
</script>
<template>

    <BContent class="content-custom__carousel-categories">
        <section class="section__carousel-categories">
            <BCarouselCategories />
        </section>
    </BContent>
    <BContent class="content-custom__general">
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
    </BContent>

    <BProductDetail :productDetail="productDetail" @closeDetail="closeDetail" />
</template>
<style lang="scss" scoped>
.content-custom__carousel-categories {
    background: #ffffff;
}
.content-custom__general {
    padding: 16px;
}
.section__carousel-categories {
    position: sticky;
    top: 0;
    z-index: 9;
}
.section__banner-main {
    margin-top: 30px;
}

.section__payment-methods {
    margin-top: 20px;
}

.section__carousel-products {
    margin-top: 50px;
}
</style>