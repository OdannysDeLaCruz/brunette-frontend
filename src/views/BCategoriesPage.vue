<script lang="ts" setup>
import BMainCategoriesMenu from '@/components/menus/main-categories/BMainCategoriesMenu.vue';
import BContent from '@/components/layouts/BContent.vue';
</script>
<template>
<BContent>
    <div class="categories">
        <div class="categories__side-bar">
            <BMainCategoriesMenu />
        </div>
        <div class="categories__content">
            <router-view />
        </div>
    </div>
</BContent>
</template>
<style lang="scss" scoped>
.categories {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 0;
}

@media (min-width: 576px) {
    .categories {
        grid-gap: 20px;
        grid-template-columns: minmax(100px, 240px) auto;
        grid-template-rows: auto;
        padding: 16px;
    }
}
</style>