<script lang="ts" setup>
import { onMounted } from 'vue'
import { watch } from 'vue'
import { ref } from 'vue'

const searchWrapper = ref()
const searchIcon = ref()
const searchLabel = ref()
const searchInput = ref()
const searchInputModel = ref('')

watch(searchInputModel, ( newVal: string ) => {
    if ( newVal === '') {
        searchWrapper.value.style.display = "flex"
    } else {
        searchWrapper.value.style.display = "none"
    }
})

onMounted(() => {
    searchInput.value.addEventListener('focus', () => {
        searchWrapper.value.classList.add('move-left')
    })

    searchInput.value.addEventListener('blur', () => {
        searchWrapper.value.classList.remove('move-left')
    })
})
</script>
<template>
    <div class="search">
        <div class="search__wrapper" ref="searchWrapper">
            <svg 
                ref="searchIcon"
                class="search__icon"
                width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.55556 16.1111C12.7284 16.1111 16.1111 12.7284 16.1111 8.55556C16.1111 4.38274 12.7284 1 8.55556 1C4.38274 1 1 4.38274 1 8.55556C1 12.7284 4.38274 16.1111 8.55556 16.1111Z" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.9999 18L13.8916 13.8917" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span ref="searchLabel" class="search__label">Buscar en Brunette</span>
        </div>
        <input ref="searchInput" v-model="searchInputModel" type="search" class="search__input">
    </div>
</template>
<style lang="scss" scoped>
.search {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F4F4;
    border-radius: 5px;
}

.search__input {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    background: transparent;
}

.search__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    position: relative;
}

.search__icon {
    margin-right: 10px;
}

.search__label {
    font-weight: 700;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.4);
    user-select: none;
}

// Animations

.move-left {
    animation: moveLeft .1s forwards;
}

@keyframes moveLeft {
     from {
        // position: relative;
        left: initial;
    }
    to {    
        position: absolute;
        left: 10px;
    } 
   
}
</style>
