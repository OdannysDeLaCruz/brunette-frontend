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
                    <BCart color="black" class="header__cart" />
                    <img class="header__nav__open" src="@/assets/icons/icon-hamburger.svg" alt="Open nav">
                    <nav class="nav">
                        <div class="separator"></div>
                        <BButton 
                            bg="#ffffff" 
                            border="1px solid #808080" 
                            class="header__button-register"
                            @click="router.push({ name: 'Register' })"
                        > 
                            Registrarse
                        </BButton>
                        <BButton 
                            bg="#FFCC00" 
                            color="#ffffff"
                            class="header__button-login"
                        > 
                            Ingresar
                        </BButton>
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

.header__cart {
    width: 25px;
    height: 26px;
}

.header__nav__open {
    display: block;
    cursor: pointer;
    margin-left: 15px;
}

.separator {
    height: 70%;
    border-right: 1px solid #cccccc;
    margin-inline: 15px;
}

.nav {
    display: none;
    grid-template-columns: repeat(4, auto);
    align-items: center;
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

.header__button-login {
    margin-left: 15px;
}

@media (min-width: 768px) {
    .header__nav__open {
        display: none;
    }

    .nav {
        display: grid;
    }
}
</style>
