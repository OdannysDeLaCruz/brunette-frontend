<script lang="ts" setup>
import BContent from "@/components/layouts/BContent.vue";
</script>
<template>
<BContent>
    <section class="purchasing-process">
        <router-view />
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