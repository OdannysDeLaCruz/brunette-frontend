<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BButton from '@/components/BButton.vue';
import BCart from '@/components/BCart.vue';
import BLogo from '@/components/BLogo.vue';
import BSearch from '@/components/BSearch.vue';

const router = useRouter()
</script>
<template>
  <header class="header">
    <div class="header__logo" @click="router.push({ name: 'Home' })">
      <BLogo class="header__logo-image" />
    </div>
    <div class="header__search">
      <BSearch />
    </div>
    <div class="header__nav">
      <nav class="nav">
        <BCart />
        <div class="separator"></div>
        <BButton @click="router.push({ name: 'Register' })"> Registrarse </BButton>
        <BButton mode="orange"> Ingresar </BButton>
      </nav>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-bottom: 1px solid #ccc;
}

.header__logo-image {
  width: 150px;
}

.header__search {
  max-width: 580px;
  width: 100%;
  height: 40px;
  padding: 0 16px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.nav {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0 15px;
  align-items: center;
}

.separator {
  height: 70%;
  border-right: 1px solid #cccccc;
}
</style>
