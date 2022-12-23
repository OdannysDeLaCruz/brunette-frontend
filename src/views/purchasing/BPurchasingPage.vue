<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import BContent from "@/components/layouts/BContent.vue"
import BButton from "@/components/BButton.vue"

const router = useRouter()
const pageActive: string = ref('')
const nextPage = () => {
    pageActive
    router.push({ name: pageActive})
}

</script>
<template>
    <BContent>
        <section class="purchasing-process">
            <router-view></router-view>
    
            <div class="purchasing-process__resumen">
                <div class="purchasing-process__resumen__ammount">
                    <span class="purchasing-process__resumen__ammount__item purchasing-process__resumen__ammount__item--small">Envío $ 4.000</span>
                    <span class="purchasing-process__resumen__ammount__item">Total $ 40.000</span>
                </div>
                <BButton 
                    class="purchasing-process__resumen__button-next" 
                    bg="#FFCC00" 
                    color="#403300" 
                    size="large"
                    @click="nextPage"
                >
                    Continuar
                </BButton>
            </div>
        </section>
    </BContent>
</template>
<style lang="scss" scoped>
.purchasing-process {
    max-width: 1000px;
    margin: 24px auto;
    background: rgba(255, 255, 255, 0.5);
    padding: 25px 30px;
}
.purchasing-process__title {
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 17px;
    color: #000000;
}
.purchasing-process__list {}
.purchasing-process__item {
    margin-bottom: 16px;
}
.purchasing-process__resumen {
    margin-top: 120px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background: #fff;
    padding: 16px 20px;
    bottom: 0;
    position: sticky;
}
.purchasing-process__resumen__ammount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.purchasing-process__resumen__ammount__item {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    text-align: right;
    color: #403300;
    margin-bottom: 5px;
}
.purchasing-process__resumen__ammount__item--small {
    font-size: 14px;
    color: #7C7868;
}
.purchasing-process__resumen__button-next {
    width: 100%;
    margin: 0;
}

@media (min-width: 480px) {
    .purchasing-process__resumen {
        flex-direction: column;
        grid-gap: 50px;
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr;
    }
    .purchasing-process__resumen__button-next {
        // margin-left: 50px;
    }
}
</style>