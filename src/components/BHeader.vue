<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BButton from '@/components/BButton.vue';
import BCart from '@/components/cart/BCart.vue';
import BLogo from '@/components/BLogo.vue';
import BSearch from '@/components/BSearch.vue';
import BContent from './layouts/BContent.vue';

const router = useRouter()
</script>
<template>
    <BContent class="content-custom">
        <header class="header">
            <div class="header__wrapper">
                <div class="header__logo" @click="router.push({ name: 'Home' })">
                    <router-link to="/home">
                        <BLogo class="header__logo-image" />
                    </router-link>
                </div>
                <div class="header__search header__search--full">
                    <BSearch />
                </div>  
                <div class="header__nav">
                    <nav class="nav">
                        <div class="header__search--small">
                            <img src="@/assets/icons/icon-search.svg" alt="">
                        </div>
                        <BCart />
                        <!-- <div class="separator"></div> -->
                        <!-- <BButton @click="router.push({ name: 'Register' })"> Registrarse </BButton> -->
                        <!-- <BButton mode="orange"> Ingresar </BButton> -->
                    </nav>
                </div>
            </div>
        </header>
    </BContent>
</template>
<style scoped lang="scss">
.content-custom {
    background: #ffffff;
}
.header {
    padding: 16px 18px;
    border-bottom: 1px solid #F4F4F4;
    background: #ffffff;
}
.header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
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
    // grid-gap: 0 15px;
    align-items: center;
}

.separator {
    height: 70%;
    border-right: 1px solid #cccccc;
}

.header__search--full {
    display: none;
}
.header__search--small {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    width: 23px;
}
.header__search--small img {
    width: 23px;
}

@media (min-width: 576px) {
    .header__search--full {
        display: block;
    }
    .header__search--small {
        display: none;
    }
}
</style>
