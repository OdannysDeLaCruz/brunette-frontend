<script lang="ts" setup>
</script>
<template>
    <div class="categories-menu">
        <h2 class="categories-menu__title">Categorias</h2>
        <nav class="categories-menu__navigation navigation">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link to="/categories/kanekalon" class="navigation__link">Kanekalon</router-link>
                </li>
                <li class="navigation__item">
                    <router-link to="/categories/lanapelo" class="navigation__link">Lanapelo</router-link>
                </li>
                <li class="navigation__item">
                    <router-link to="/categories/microzizi" class="navigation__link">Microzizi</router-link>
                </li>
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
    .categories-menu__navigation {
        .navigation__list {
            .navigation__item {
                padding: 10px 10px 10px 16px;
                border-left: 4px solid transparent;
                &:hover {
                    background: #ffeeaa;
                    border-left: 4px solid #FFCC00;
                }
                .navigation__link {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    color: rgba(51, 51, 51, 0.7);
                }
            }
        }
    }
}

@media (min-width: 576px) {
    .categories-menu {
        display: block;
    }
}

</style>

