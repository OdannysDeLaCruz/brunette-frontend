<script lang="ts" setup>

</script>
<template>
    <button class="modal-filter__button">
        Filtrar <img src="@/assets/icons/icon-chevron-bottom-blue.svg" alt="Botón filtrar">
    </button>
    <div class="modal-filter__backdrop">

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
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
}

</style>