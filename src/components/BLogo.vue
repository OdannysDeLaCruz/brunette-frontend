<template>
    <div>
        <img class="image-mobile mobile" src="@/assets/images/brunette-isotipo.png" alt="Brunette Girl Extensiones">
        <img class="image-desktop desktop" src="@/assets/images/brunette-logotipo.png" alt="Brunette Girl Extensiones">
    </div>
</template>
<style lang="scss" scoped>
.image-mobile {
    width: 28px;
}
.image-desktop {
    max-width: 150px;
}
.mobile {
    display: block;
}
.desktop {
    display: none;
}

@media (min-width: 576px) {
    .mobile {
        display: none;
    }
    .desktop {
        display: block;
    }
}
</style>