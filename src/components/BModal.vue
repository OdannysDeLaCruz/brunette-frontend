<script lang="ts" setup>

</script>
<template>
    <div class="modal">
        <div class="modal__backdrop">
            <div class="modal__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.modal__backdrop {
    background: rgba(0,0,0, .5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}
</style>