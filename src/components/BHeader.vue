<script setup>
import { ref } from 'vue';
import BButton from '@/components/BButton.vue';
import BCart from '@/components/cart/BCart.vue';
import BLogo from '@/components/BLogo.vue';
import BSearch from '@/components/BSearch.vue';
import BNav from '@/components/menus/BNav.vue';
import BContent from './layouts/BContent.vue';

const openNavigation = ref(false)
const openNav = () => {
    openNavigation.value = true
}
</script>
<template>
<BContent class="content-custom">
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <router-link to="/home">
                    <BLogo class="header__logo-image" />
                </router-link>
            </div>
            <div class="header__search header__search--full">
                <BSearch />
            </div>  
            <div class="header__nav">
                <BCart
                    color="black"
                    class="header__cart"
                />
                <img
                    class="header__nav__open"
                    src="@/assets/icons/icon-hamburger.svg"
                    alt="Open nav"
                    @click="openNav()"
                >
                <BNav :active="openNavigation" @onClose="() => { openNavigation = false }" />
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

.header__cart {
    width: 25px;
    height: 26px;
}

.header__nav__open {
    display: block;
    cursor: pointer;
    margin-left: 15px;
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

@media (min-width: 768px) {
    .header__nav__open {
        display: none;
    }
}
</style>
