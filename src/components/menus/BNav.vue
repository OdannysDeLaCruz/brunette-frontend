<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BButton from '@/components/BButton.vue';
const router = useRouter()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
    responsive: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['onClose'])

const closeNav = () => {
    emits('onClose')
}

</script>
<template>
<nav class="nav" ref="navRef" :class="active ? 'nav--open' : ''">
    <BButton 
        class="nav__close"
        v-if="active" 
        borderRadius="125px" 
        bg="#ffffff" 
        border="1px solid #FFCC00" 
        color="#FFCC00" 
        @click="closeNav()"
    > X</BButton>

    <div class="nav__wrapper">
        <router-link :to="{ name: 'Register' }">
            <BButton 
                bg="#ffffff" 
                border="1px solid #808080" 
                class="header__button-register"
            > 
                Registrarse
            </BButton>
        </router-link>
    
        <router-link :to="{ name: 'Login' }">
            <BButton 
                bg="#FFCC00" 
                border="1px solid #FFCC00" 
                color="#ffffff"
                class="header__button-login"
            > 
                Ingresar
            </BButton>
        </router-link>

    </div>
</nav>
</template>
<style scoped lang="scss">
.nav {
    background: #ffffff;
    position: relative;
    display: none;
    left: -100%;
}

.nav--open {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    flex-direction: column;
}

.nav__close {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 16px;
    width: 30px;
    height: 30px;
}

.nav__wrapper {
    display: flex;
    justify-content: center;
}
.nav--open > .nav__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.header__button-login {
    margin-left: 15px;
}

@media (min-width: 768px) {
    .nav {
        display: flex;
        position: relative;
        left: 0;
        top: 0;
        margin-left: 20px;
    }
}
</style>
    