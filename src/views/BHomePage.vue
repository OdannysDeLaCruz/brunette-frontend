<script lang="ts" setup>
import BCarouselCategories from '@/components/BCarouselCategories.vue'
import BBanner from '@/components/BBanner.vue'
import BPaymentMethodsList from '@/components/payment/BPaymentMethodsList.vue';
</script>
<template>
  <div class="home">
      <BCarouselCategories />
      <div class="container section__banner-main">
        <BBanner />
      </div>
      <div class="container section__payment-methods">
            <BPaymentMethodsList />
      </div>
      <h1>Home</h1>
  </div>
</template>
<style lang="scss" scoped>
.section__banner-main {
    padding: 16px;
}
.section__payment-methods {
    margin-top: 30px;
}
</style>