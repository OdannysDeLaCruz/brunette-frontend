<script lang="ts" setup>

defineProps({
    text: {
        type: String,
        default: ''
    },
    linkPath: {
        type: String,
        default: ''
    }
})

</script>
<template>
<li class="navigation__item">
    <router-link
        :to="linkPath"
        class="navigation__link"
    >
        {{ text }}
    </router-link>
</li>
</template>
<style lang="scss" scoped>
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
</style>