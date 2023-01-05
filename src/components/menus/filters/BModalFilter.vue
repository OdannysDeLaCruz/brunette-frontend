<script lang="ts" setup>
import { ref } from 'vue'
import BMainCategoriesItem from "@/components/menus/main-categories/BMainCategoriesItem.vue"

const modalFilterShow = ref(false)

const showModalFilter = () => {
    modalFilterShow.value = true
}

const hideModalFilter = () => {
    modalFilterShow.value = false
}

</script>
<template>
<button
    class="modal-filter__button"
    @click="showModalFilter"
>
    Filtrar <img
        src="@/assets/icons/icon-chevron-bottom-blue.svg"
        alt="Botón filtrar"
    >
</button>
    
<div 
    v-show="modalFilterShow" 
    class="modal-filter__backdrop"
    @click.self="hideModalFilter"
>
    <div class="filters">
        <h1 class="filters__title">
            Filtrar por:
        </h1>
        <section class="filters__accordion">
            <label for="accordion__check1">
                <header class="filters__accordion__header">
                    <h2 class="filters__accordion__title">Categorias</h2>
                    <img
                        class="filters__accordion__icon"
                        src="@/assets/icons/icon-chevron-bottom-gray.svg"
                        alt=""
                    >
                </header>
            </label>
            <input
                id="accordion__check1"
                type="checkbox"
                class="filters__accordion__check"
            >
            <section class="filters__accordion__body">
                <ul class="navigation__list">
                    <BMainCategoriesItem
                        text="Kanekalon"
                        link-path="/categories/kanekalon"
                    />
                    <BMainCategoriesItem
                        text="Lanapelo"
                        link-path="/categories/lanapelo"
                    />
                    <BMainCategoriesItem
                        text="Microzizi"
                        link-path="/categories/microzizi"
                    />
                </ul>
            </section>
        </section>
    </div>
</div>
</template>
<style lang="scss" scoped>
.modal-filter__button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    color: #147ECC;
    font-weight: 400;
    font-size: 12px;
    line-height: 9px;
}

.modal-filter__backdrop {
    background: rgba(0,0,0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 8;
}

// filters
.filters {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 240px;
    position: absolute;
    top: 40px;
    right: 0px;
    z-index: 9;
    border-radius: 5px;
    overflow: hidden;
}
.filters__title {
    padding: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
}
.filters__accordion {
    border-top: 1px solid #C6C6C6;
}
.filters__accordion__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: 52px;
}
.filters__accordion__title {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #000000;
}
.filters__accordion__icon {
    width: 10px;
}
.filters__accordion__body {
    padding: 0 16px;
    height: 0;
    overflow: hidden;
    transition: ease all .5s;
}
.filters__accordion__check {
    display: none;
}
.filters__accordion__check:checked + .filters__accordion__body {
    padding: 16px 16px;
    height: auto;
    overflow: hidden;
}
</style>