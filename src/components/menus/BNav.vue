<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BButton from '@/components/BButton.vue';
const router = useRouter()

defineProps({
    responsive: {
        type: Boolean,
        default: false
    }
})
// :class="[responsive ? 'nav--responsive' : '']"

</script>
<template>
<nav class="nav">
    <div class="separator" />
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
            color="#ffffff"
            class="header__button-login"
        > 
            Ingresar
        </BButton>
    </router-link>
</nav>
</template>
<style scoped lang="scss">
.nav {
    // display: grid;
    // grid-template-columns: repeat(4, auto);
    // align-items: center;
    background: #ffffff;
    position: absolute;
    width: 100%;
    top: 20px;
    left: 100%;
    bottom: 0;
}

.separator {
    height: 70%;
    border-right: 1px solid #cccccc;
    margin-inline: 15px;
}

.header__button-login {
    margin-left: 15px;
}

@media (min-width: 768px) {
    .nav {
        position: relative;
        left: 0;
    }
}
</style>
    