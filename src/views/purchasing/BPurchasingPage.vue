<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router"
import { usePurchasingProcessStore } from "@/stores/purchasingProcessStore";
import BPurchasingProcessResumen from "./components/BPurchasingProcessResumen.vue";
import BContent from "@/components/layouts/BContent.vue"

const route = useRoute()
const router = useRouter()
const purchasingProcessStore = usePurchasingProcessStore()
const nextStep = ref(false)

watch(route, (newRoute) => {
    console.log(newRoute.name)
    
    if ( purchasingProcessStore.$state.navigation.includes(newRoute.name) ) {
        purchasingProcessStore.setCurrentStepId(newRoute.name)
    } else {
        router.push({
            name: 'cart'
        })
    }
})

onMounted(() => {
    console.log(route.name)
    purchasingProcessStore.setCurrentStepId(route.name)
})

const getNextStep = () => {
    nextStep.value = purchasingProcessStore.nextStep()
    if ( nextStep.value ) {
        router.push({
            path: purchasingProcessStore.$state.steps[nextStep.value].url 
        })
        purchasingProcessStore.setCurrentStepId(nextStep.value)
    }
}

</script>
<template>
<BContent>
    <section class="purchasing-process">
        <router-view />
        <BPurchasingProcessResumen :button-text="'Continuar'" :click="getNextStep" />
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