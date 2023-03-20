<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router"
import { usePurchasingProcessStore } from "@/stores/purchasingProcessStore";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BContent from "@/components/layouts/BContent.vue"
import { useOrder } from "../../services/useOrder";
import BButton from "../../components/BButton.vue";

const route = useRoute()
const router = useRouter()
const { navigation, steps, setCurrentStepId, getNextStep } = usePurchasingProcessStore()

const { setOrder, createOrder } = useOrder()
setOrder()

const nextStep = ref(false)

watch(route, (newRoute) => {
    if ( navigation.includes(newRoute.name) ) {
        setCurrentStepId(newRoute.name)
    }
})

onMounted(() => {
    setCurrentStepId(route.name)
})

const get_next_step = () => {
    nextStep.value = getNextStep()
    
    if ( nextStep.value ) {
        router.push({
            path: steps[nextStep.value].url 
        })

        setCurrentStepId(nextStep.value)
    } else {
        createOrder()
    }
}

</script>
<template>
<BContent>
    <section class="purchasing-process">
        <BButton
            color="#ffffff"
            bg="#FFCC00"
            padding="10px 16px"
            style="margin: 0 0 20px 0"
            @click="router.go(-1)"
        >
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </BButton>

        <router-view />
        <BPurchasingProcessResumen :button-text="'Continuar'" :click="get_next_step" />
    </section>
</BContent>
</template>
<style lang="scss" scoped>
.purchasing-process {
    max-width: 1000px;
    margin: 24px auto;
    background: rgba(255, 255, 255, 0.5);
    padding: 30px 30px;
}
</style>