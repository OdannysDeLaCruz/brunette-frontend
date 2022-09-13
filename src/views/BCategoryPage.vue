<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BProductFluid from '@/components/BProductFluid.vue';
import BBreadCrumb from '@/components/BBreadCrumb.vue';
import BModalFilter from '../components/menus/filters/BModalFilter.vue';
import BProductDetail from '@/components/BProductDetail.vue';
import { watch } from 'vue';
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
    <section class="category">
        <!-- Mobile filters -->
        <div class="mobile__filters">
            <p class="mobile__filters__results category__results">100 resultados</p>
            <BModalFilter />
        </div>

        <div class="category__summary">
            <BBreadCrumb
                class="category__breadcrumb"
                :routes="['home', 'categorias', route.params.category ]"
            />
            <h1 class="category__title">{{ route.params.category }}</h1>
            <p class="category__results">100 resultados</p>
        </div>

        <section class="category__products-list">
            <BProductFluid 
                class="category__products-list__item"
                v-for="i in [0,1,2,3,4,5,6,7,8,9]"
                :key="i"
                :id="i"
                :name="route.params.category"
                :price="3500"
            />
        </section>
    </section>
    <BProductDetail :productDetail="productDetail" @closeDetail="closeDetail" />
</template>

<style lang="scss" scoped>
.category {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 0;
    position: relative;
}
.category__summary {
    display: none;
}
.category__breadcrumb {
    margin-bottom: 10px;
}
.category__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-bottom: 16px;
    text-transform: capitalize;
}
.category__results {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #777777;
    margin-bottom: 30px;
}
.category__products-list {
    display: grid;
    grid-gap: 10px;
    // grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.category__products-list__item {
    width: 100%;
}
.mobile__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 5px 12px -7px rgba(0, 0, 0, 0.25);
    padding: 16px;
    height: 35px;
    margin-bottom: 20px;
}
.mobile__filters__results {
    margin: 0;
}

@media (min-width: 576px) {
    .category {
        padding: 30px;
    }
    .category__summary {
        display: block;
    }
    .category__products-list {
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .mobile__filters {
        display: none;
    }
}
</style>
