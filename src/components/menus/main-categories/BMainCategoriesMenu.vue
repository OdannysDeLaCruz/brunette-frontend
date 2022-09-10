<script lang="ts" setup>
    import BMainCategoriesItem from "@/components/menus/main-categories/BMainCategoriesItem.vue"
</script>
<template>
    <div class="categories-menu">
        <h2 class="categories-menu__title">Categorias</h2>
        <nav class="categories-menu__navigation navigation">
            <ul class="navigation__list">
                <BMainCategoriesItem text="Kanekalon" linkPath="/categories/kanekalon" />
                <BMainCategoriesItem text="Lanapelo" linkPath="/categories/lanapelo" />
                <BMainCategoriesItem text="Microzizi" linkPath="/categories/microzizi" />
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.categories-menu {
    background: #ffffff;
    border-radius: 5px;
    display: none;
    .categories-menu__title {
        padding: 16px;
        margin: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #000000;
    }
}

@media (min-width: 576px) {
    .categories-menu {
        display: block;
    }
}

</style>

