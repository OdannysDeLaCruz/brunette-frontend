<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router"
import { usePurchasingProcessStore } from "@/stores/purchasingProcessStore";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BContent from "@/components/layouts/BContent.vue"

const route = useRoute()
const router = useRouter()
const { navigation, steps, setCurrentStepId, getNextStep } = usePurchasingProcessStore()

const nextStep = ref(false)

watch(route, (newRoute) => {
    console.log(newRoute.name)
    
    if ( navigation.includes(newRoute.name) ) {
        setCurrentStepId(newRoute.name)
    } else {
        router.push({
            name: 'cart'
        })
    }
})

onMounted(() => {
    console.log(route.name)
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
        console.log('fin')
    }
}

</script>
<template>
<BContent>
    <section class="purchasing-process">
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